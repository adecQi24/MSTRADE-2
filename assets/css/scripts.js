document.addEventListener("DOMContentLoaded", function() {
    var preloaderFill = document.getElementById('preloader-fill');
    var logo = document.querySelector('#preloader-logo img');
    var images = document.images;
    var totalImages = images.length;
    var imagesLoaded = 0;

    function updatePreloader() {
        var percentage = (imagesLoaded / totalImages) * 100;
        preloaderFill.style.width = percentage + '%';
        logo.style.filter = `grayscale(${100 - percentage}%)`; // Zmniejszanie efektu wyszarzenia

        if (imagesLoaded === totalImages) {
            setTimeout(function() {
                document.getElementById('preloader').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('preloader').style.display = 'none';
                }, 500);
            }, 500);
        }
    }

    for (var i = 0; i < totalImages; i++) {
        var img = new Image();
        img.onload = function() {
            imagesLoaded++;
            updatePreloader();
        };
        img.onerror = function() {
            imagesLoaded++;
            updatePreloader();
        };
        img.src = images[i].src;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const minValues = {
        width: 4,
        et: -100,
        distance: 0,
        newWidth: 4,
        newEt: -100,
        newDistance: 0
    };

    const maxValues = {
        width: 12,
        et: 100,
        distance: 40,
        newWidth: 12,
        newEt: 100,
        newDistance: 40
    };

    document.querySelectorAll('.ET-value').forEach(container => {
        const decreaseButton = container.querySelector('.decrease');
        const increaseButton = container.querySelector('.increase');
        const input = container.querySelector('.value');
        const type = decreaseButton.dataset.type;
        const isWidth = type === 'width';

        if (isWidth) {
            decreaseButton.addEventListener('click', () => {
                let currentValue = parseFloat(input.value);
                const minValue = minValues[type];
                if (currentValue > minValue) {
                    input.value = (currentValue - 0.5).toFixed(1);
                    updateResults();
                }
            });

            increaseButton.addEventListener('click', () => {
                let currentValue = parseFloat(input.value);
                const maxValue = maxValues[type];
                if (currentValue < maxValue) {
                    input.value = (currentValue + 0.5).toFixed(1);
                    updateResults();
                }
            });
        } else {
            decreaseButton.addEventListener('click', () => {
                let currentValue = parseInt(input.value, 10);
                const minValue = minValues[type];
                if (currentValue > minValue) {
                    input.value = currentValue - 1;
                    updateResults();
                }
            });

            increaseButton.addEventListener('click', () => {
                let currentValue = parseInt(input.value, 10);
                const maxValue = maxValues[type];
                if (currentValue < maxValue) {
                    input.value = currentValue + 1;
                    updateResults();
                }
            });
        }
    });

    // Inicjalizacja wyników przy załadowaniu strony
    updateResults();
});

function updateResults() {
    const widthOriginal = parseFloat(document.querySelector('.ET-value .value.width[data-group="original"]').value);
    const etOriginal = parseFloat(document.querySelector('.ET-value .value.et[data-group="original"]').value);
    const distanceOriginal = parseFloat(document.querySelector('.ET-value .value.distance[data-group="original"]').value);

    const widthNew = parseFloat(document.querySelector('.ET-value .value.width[data-group="new"]').value);
    const etNew = parseFloat(document.querySelector('.ET-value .value.et[data-group="new"]').value);
    const distanceNew = parseFloat(document.querySelector('.ET-value .value.distance[data-group="new"]').value);

    // Przekształć szerokość z cali na mm (1 cal = 25.4 mm)
    const widthOriginalMM = widthOriginal * 25.4;
    const widthNewMM = widthNew * 25.4;

    // Oblicz zmiany dla widoku od zewnątrz (front felgi)
    const frontChange = ((etNew - etOriginal) + (widthOriginalMM - widthNewMM) / 2 - (distanceNew - distanceOriginal));
    
    // Oblicz zmiany dla widoku od wewnątrz (tył felgi)
    const rearChange = ((etOriginal - etNew) - (widthNewMM - widthOriginalMM) / 2 + (distanceNew - distanceOriginal));

    // Zaktualizuj sekcję wyników
    document.getElementById('result-front').innerHTML = `
        <span class="highlight"><strong>Od zewnątrz (front felgi) </strong></span><br>
        ${frontChange < 0 ? `Nowa felga będzie bardziej wystawać o ${Math.abs(frontChange).toFixed(1)} mm` :
          frontChange > 0 ? `Nowa felga będzie głębiej osadzona o ${Math.abs(frontChange).toFixed(1)} mm` :
          'Osadzenie nowej felgi będzie identyczne jak w przypadku wzorcowej felgi.'}
    `;
    document.getElementById('result-rear').innerHTML = `
        <span class="highlight"><strong>Od wewnątrz (tył felgi) </strong></span><br>
        ${rearChange > 0 ? `Nowa felga będzie dalej od elementów zawieszenia o ${Math.abs(rearChange).toFixed(1)} mm` :
          rearChange < 0 ? `Nowa felga będzie bliżej elementów zawieszenia o ${Math.abs(rearChange).toFixed(1)} mm` :
          'Osadzenie nowej felgi będzie identyczne jak w przypadku wzorcowej felgi.'}
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerNav = document.querySelector('.hamburger-nav');
    const closeIcon = document.querySelector('.close-icon');
    const mainContent = document.querySelector('main');
    const footerContent = document.querySelector('#footer');

    // Funkcja do zamykania menu
    const closeMenu = () => {
        hamburgerNav.classList.remove('open');
        mainContent.classList.remove('blurred');
        footerContent.classList.remove('blurred');
    };

    // Obsługuje kliknięcie w hamburgera
    hamburgerMenu.addEventListener('click', function() {
        if (hamburgerNav.classList.contains('open')) {
            closeMenu();
        } else {
            hamburgerNav.classList.add('open');
            mainContent.classList.add('blurred');
            footerContent.classList.add('blurred');
        }
    });

    // Obsługuje kliknięcie w ikonę zamknięcia (X)
    closeIcon.addEventListener('click', function() {
        closeMenu();
    });

    // Zamknięcie menu po kliknięciu poza nim
    document.addEventListener('click', function(event) {
        if (hamburgerNav.classList.contains('open') &&
            !hamburgerNav.contains(event.target) &&
            !hamburgerMenu.contains(event.target)) {
            closeMenu();
        }
    });

    // Zamknięcie menu po kliknięciu w link prowadzący do sekcji
    document.querySelectorAll('.hamburger-nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            if (link.getAttribute('href').startsWith('#')) {
                closeMenu();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("latest-products");

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});

/* OBSŁUGA GALERII */

document.addEventListener('DOMContentLoaded', () => {
    const photos = [
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
        'images/example1.svg', 'images/gallery-bg.svg', 'images/client-example.svg', 'images/car-brands.svg',
    ];

    const photoGrid = document.getElementById('photo-grid');
    const pagination = document.getElementById('pagination');
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let itemsPerPage = 50;
    let currentPage = 1;
    let currentIndex = 0;

    function updateItemsPerPage() {
        const width = window.innerWidth;

        if (width <= 400) {
            itemsPerPage = 10;
        } else if (width <= 820) {
            itemsPerPage = 20;
        } else if (width <= 1024) {
            itemsPerPage = 40;
        } else {
            itemsPerPage = 50;
        }

        renderPhotos(currentPage);
        renderPagination();
    }

    function createPhotoItem(src, index) {
        const div = document.createElement('div');
        div.className = 'photo-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Galeria';
        img.addEventListener('click', () => openModal(index));
        div.appendChild(img);
        return div;
    }

    function renderPhotos(page) {
        photoGrid.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, photos.length);

        for (let i = start; i < end; i++) {
            photoGrid.appendChild(createPhotoItem(photos[i], i));
        }
    }

    function renderPagination() {
        const totalPages = Math.ceil(photos.length / itemsPerPage);
        pagination.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const link = document.createElement('a');
            if (i != currentPage){
                link.classList.add('disabled');
            }
            link.href = '#';
            link.textContent = i;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i;
                renderPhotos(currentPage);
                updateActivePage(currentPage);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            pagination.appendChild(link);
        }
    }

    function updateActivePage(page) {
        const links = pagination.querySelectorAll('a');
        links.forEach(link => {
            link.style.fontWeight = link.textContent == page ? 'bold' : 'normal';
            if (parseInt(link.textContent) === page) {
                link.classList.remove('disabled');
            } else {
                link.classList.add('disabled');
            }
        });
    }

    function openModal(index) {
        currentIndex = index;
        modalImg.src = photos[index];
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        modalImg.src = photos[currentIndex];
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % photos.length;
        modalImg.src = photos[currentIndex];
    }

    // Initialize gallery
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    // Event listeners
    modalClose.addEventListener('click', closeModal);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    renderPhotos(currentPage);
    renderPagination();
});

/* Osbługa Felg -> filtry */

// document.addEventListener('DOMContentLoaded', function() {
//     function toggleSection(element) {
//         const content = element.nextElementSibling;
//         const isActive = element.classList.toggle('active');
//         content.style.display = isActive ? 'block' : 'none';
//     }

//     function collapseAllBut(element, selector) {
//         document.querySelectorAll(selector).forEach(function(item) {
//             if (item !== element) {
//                 item.classList.remove('active');
//                 item.nextElementSibling.style.display = 'none';
//             }
//         });
//     }

//     function collapseSubSections(section) {
//         const subSections = section.querySelectorAll('.sub-collapsible');
//         subSections.forEach(function(subSection) {
//             subSection.classList.remove('active');
//             subSection.nextElementSibling.style.display = 'none';
//         });
//     }

//     function initCollapsible(selector, parentSelector) {
//         document.querySelectorAll(selector).forEach(function(element) {
//             element.addEventListener('click', function(event) {
//                 event.stopPropagation();

//                 collapseAllBut(element, parentSelector);
//                 toggleSection(element);

//                 // Zamknij wszystkie podsekcje, gdy klikniesz w inny collapsible
//                 if (selector === '.collapsible') {
//                     collapseSubSections(element.nextElementSibling);
//                 }
//             });
//         });
//     }

//     // Inicjalizuj dla sekcji głównych i podsekcji
//     initCollapsible('.collapsible', '.collapsible');
//     initCollapsible('.sub-collapsible', '.content .sub-collapsible');

//     // Obsługa ikony filtra dla mobile (<=1024px)
//     document.querySelector('.filter-icon').addEventListener('click', function() {
//         const filterMenu = document.querySelector('.filter-menu');
//         const isMenuVisible = filterMenu.style.display === 'block';
//         filterMenu.style.display = isMenuVisible ? 'none' : 'block';
//     });

//     // Ukryj menu filtra i ustaw style dla desktopu, pokazuj dla mobile
//     function handleResize() {
//         const filterMenuContainer = document.querySelector('.filter-menu-container');
//         if (window.innerWidth > 1024) {
//             filterMenuContainer.style.display = 'none'; // Ukryj menu dla desktopu
//         } else {
//             filterMenuContainer.style.display = 'block'; // Pokaż menu dla mobile
//         }
//     }

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Uruchom przy starcie, aby ustawić odpowiedni stan
// });

/* Osbługa Felg -> produkty */

// document.addEventListener("DOMContentLoaded", function() {
//     const wheels = [
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "/assets/images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//         { imgSrc: "images/example1.svg", title: "R17 Dezent KS Graphite 7.0''", description: ["Mazda 6 CX3", "Mazda 6 CX3", "Mazda 6 CX3"] },
//     ];

//     const itemsPerPage = 36;
//     const paginationElement = document.getElementById('pagination');
//     const wheelsElement = document.getElementById('wheels');
//     let currentPage = 1;

//     function renderWheels(page) {
//         wheelsElement.innerHTML = '';
//         const start = (page - 1) * itemsPerPage;
//         const end = start + itemsPerPage;
//         const itemsToShow = wheels.slice(start, end);

//         itemsToShow.forEach(item => {
//             const wheelDiv = document.createElement('div');
//             wheelDiv.classList.add('wheels-content-item');
//             wheelDiv.innerHTML = `
//                 <div class="wheels-content-single">
//                     <img src="${item.imgSrc}" alt="${item.title}">
//                     <h5>${item.title}</h5>
//                     <div class="wheels-description">
//                         ${item.description.map(desc => `<p>${desc}</p>`).join('')}
//                     </div>
//                 </div>
//             `;
//             wheelsElement.appendChild(wheelDiv);
//         });
//     }

//     function renderPagination() {
//         paginationElement.innerHTML = '';
//         const totalPages = Math.ceil(wheels.length / itemsPerPage);

//         for (let i = 1; i <= totalPages; i++) {
//             const button = document.createElement('button');
//             button.textContent = i;
//             if (i != currentPage) {
//                 button.classList.add('disabled');
//             }
//             button.addEventListener('click', function() {
//                 currentPage = i;
//                 renderWheels(currentPage);
//                 renderPagination();

//                 window.scrollTo({
//                     top: 0,
//                     behavior: 'smooth'
//                 });
//             });
//             paginationElement.appendChild(button);
//         }
//     }

//     renderWheels(currentPage);
//     renderPagination();
// });

