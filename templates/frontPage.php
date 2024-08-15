<?php 
/* Template Name: Strona główna */
get_header(); 
?>

<main>
    <section id="main-info">
        <div class="main-white">
            <h1> <span class="highlight">Dopasowanie</span> to nasza specjalność</h1>
            <br>
            <h1>Felgi aluminiowe <br> Felgi fabryczne i marki Premium <br> Kompletne koła <br> System TPMS</h1>
        </div>
        <div class="main-black">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/wheel-main.svg" alt="Felgi główne">
        </div>
    </section>

    <section id="main-bottom-info">
        <div class="main-bottom-black">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/car-brands.svg" alt="Marki samochodowe">
        </div>
        <div class="main-bottom-green">
            <span>
                <i class="fa fa-phone"></i> +48 502 310 982
            </span>
            <span>
                <i class="fa fa-envelope"></i> tomaszjuda.mstrade@gmail.com
            </span>
        </div>
    </section>

    <section id="latest-products">
        <div class="latest-title">
            <h1>Ostatnio <span class="highlight">dodane</span></h1>
            <a href="wheels.html"><i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="latest-content-container">
            <div class="latest-content">
                <div class="latest-content-single">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/example1.svg" alt="Produkt 1">
                    <h5>R17 Dezent KS Graphite 7.0''</h5>
                    <div class="latest-description">
                        <p>Mazda 6 CX3</p>
                        <p>Mazda 6 CX3</p>
                        <p>Mazda 6 CX3</p>
                    </div>
                </div>
            </div>
            <!-- Kolejne elementy latest-content -->
        </div>
    </section>

    <section id="popular-products-bg">
        <section id="popular-products">
            <div class="popular-title">
                <h1><span class="highlight">Najczęstszy </span>wybór</h1>
                <a href="wheels.html"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div class="popular-content-container">
                <div class="popular-content">
                    <div class="popular-content-single">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/example1.svg" alt="Popularny produkt 1">
                        <h5>R17 Dezent KS Graphite 7.0''</h5>
                        <div class="popular-description">
                            <p>Mazda 6 CX3</p>
                            <p>Mazda 6 CX3</p>
                            <p>Mazda 6 CX3</p>
                        </div>
                    </div>
                </div>
                <!-- Kolejne elementy popular-content -->
            </div>
        </section>
    </section>
    
    <section id="company-description">
        <h2> Specjalizujemy się w sprzedaży najwyższej jakości felg, dbając o każdy detal. Nasza firma to synonim rzetelności, profesjonalizmu i zaangażowania w obsługę klienta. Każdego dnia dokładamy wszelkich starań, aby sprostać Twoim oczekiwaniom. Dołącz do grona naszych zadowolonych klientów i przekonaj się, dlaczego warto nam zaufać!</h2>
        <a href="about.html">Dowiedz się więcej!</a>
    </section>

    <section id="gallery">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gallery-bg.svg" alt="Galeria">
        <a href="gallery.html">Galeria</a>
    </section>

    <section id="et-calculator">
        <h1>Kalkulator <span class="highlight">ET</span></h1>
        <div class="calculator-content">
            <div class="calculator-options">
                <div class="ET-option">
                    <h5>Wzorcowa felga</h5>
                    <div class="ET-single-table">
                        <div class="ET-option-names">
                            <p><strong>Szerokość [cal]</strong></p>
                            <p><strong>Odsadzenie ET [mm]</strong></p>
                            <p><strong>Dystans (opcjonalnie) [mm]</strong></p>
                        </div>
                        <div class="ET-option-values">
                            <!-- Szerokość -->
                            <div class="ET-value">
                                <button class="decrease" data-type="width" data-group="original">-</button>
                                <input type="text" class="value width" value="7" data-group="original" readonly>
                                <button class="increase" data-type="width" data-group="original">+</button>
                            </div>
                            <!-- Odsadzenie ET -->
                            <div class="ET-value">
                                <button class="decrease" data-type="et" data-group="original">-</button>
                                <input type="text" class="value et" value="35" data-group="original" readonly>
                                <button class="increase" data-type="et" data-group="original">+</button>
                            </div>
                            <!-- Dystans -->
                            <div class="ET-value">
                                <button class="decrease" data-type="distance" data-group="original">-</button>
                                <input type="text" class="value distance" value="0" data-group="original" readonly>
                                <button class="increase" data-type="distance" data-group="original">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ET-option">
                    <h6>Nowa felga</h6>
                    <div class="ET-single-table">
                        <div class="ET-option-names">
                            <p><strong>Szerokość [cal]</strong></p>
                            <p><strong>Odsadzenie ET [mm]</strong></p>
                            <p><strong>Dystans (opcjonalnie) [mm]</strong></p>
                        </div>
                        <div class="ET-option-values">
                            <!-- Szerokość -->
                            <div class="ET-value">
                                <button class="decrease" data-type="width" data-group="new">-</button>
                                <input type="text" class="value width" value="7" data-group="new" readonly>
                                <button class="increase" data-type="width" data-group="new">+</button>
                            </div>
                            <!-- Odsadzenie ET -->
                            <div class="ET-value">
                                <button class="decrease" data-type="et" data-group="new">-</button>
                                <input type="text" class="value et" value="35" data-group="new" readonly>
                                <button class="increase" data-type="et" data-group="new">+</button>
                            </div>
                            <!-- Dystans -->
                            <div class="ET-value">
                                <button class="decrease" data-type="distance" data-group="new">-</button>
                                <input type="text" class="value distance" value="0" data-group="new" readonly>
                                <button class="increase" data-type="distance" data-group="new">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calculator-results">
                <h5>Rezultat</h5>
                <p id="result-front">
                    <span class="highlight"><strong>Od zewnątrz (front felgi) </strong></span><br>
                    <!-- To będzie zaktualizowane przez JavaScript -->
                    Osadzenie nowej felgi będzie identyczne jak w przypadku wzorcowej felgi.
                </p>
                <p id="result-rear">
                    <span class="highlight"><strong>Od wewnątrz (tył felgi) </strong></span><br>
                    <!-- To będzie zaktualizowane przez JavaScript -->
                    Osadzenie nowej felgi będzie identyczne jak w przypadku wzorcowej felgi.
                </p>
            </div>
            <div class="calculator-description">
                <h5>Opis parametrów</h5>
                <p>
                    <strong>Szerokość: </strong>mierzona jest pomiędzy kołnierzami felgi. Wymiar podawany jest w calach. Producent umieszcza ją zazwyczaj na wewnętrznej stronie felgi.
                </p>
                <p>
                    <strong>Odsadzenie ET: </strong>jest to odległość płaszczyzny montażowej felgi od linii centralnej felgi. Podawane w milimetrach. Można je znaleźć na zewnętrznej krawędzi felgi.
                </p>
                <p>
                    <strong>Dystans: </strong>jeśli używasz dystansów, musisz uwzględnić ten wymiar w obliczeniach.
                </p>
            </div>
        </div>
    </section>

    <section id="customer-reviews-bg">
        <section id="customer-reviews">
            <h1>Opinie <span class="highlight">naszych</span> klientów</h1>
            <div class="reviews">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/client-example.svg" alt="Opinie klientów">
            </div>
        </section>
    </section>

    <section id="contact">
        <h1>Tutaj nas <span class="highlight">znajdziesz</span></h1>
        <div class="contact-main">
            <div class="adress-map">
                <h5>ul. Warszawska 319</h5>
                <h5>43-155 Bieruń Nowy</h5>
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508.12742476466957!2d19.183720515340898!3d50.0712768948726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716bf4f9b11dbbd%3A0x81b0ac9293a67934!2zTVMgVHJhZGUg4oCTIEZlbGdpIOKAoiBPcG9ueSDigKIgQ3rEmcWbY2k!5e0!3m2!1spl!2spl!4v1722513435545!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact-info">
                <h4>Kontakt</h4>
                <div class="person-contact">
                    <h5>Tomasz Juda</h5>
                    <h5><i class="fa fa-phone"></i> +48 502 310 982</h5>
                    <h5><i class="fa fa-envelope"></i> tomaszjuda.mstrade@gmail.com</h5>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
