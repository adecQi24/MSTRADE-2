<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>
    <div id="preloader">
        <div id="preloader-logo">
            <div id="preloader-fill"></div>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.svg" alt="Logo">
        </div>
    </div>
    <header>
    <div class="header-white">
        <nav>
            <?php 
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container' => false,
                'menu_class' => 'nav-list',
                'fallback_cb' => false, // Jeśli menu nie jest przypisane, nie pokazuj nic
            )); 
            ?>
        </nav>
    </div>
    <div class="header-black">
        <a href="https://www.facebook.com/p/MS-Trade-Felgi-Opony-Części-100086735444723/?paipv=0&eav=AfbapMBz81Dxbe8dMBfxeTw1aOtIRhJYOwgyy-AC1_FdYyp12bHv6uFyRr1jQzsgcBg&_rdr" target="_blank" class="fab fa-facebook"></a>
        <div class="hamburger-menu">
            <span class="hamburger-icon">&#9776;</span>
        </div>
    </div>
    <div class="hamburger-nav">
        <span class="close-icon"><i class="fa-solid fa-xmark"></i></span>
        <nav>
            <?php 
            wp_nav_menu(array(
                'theme_location' => 'main-menu',
                'container' => false, 
                'menu_class' => 'nav-ham-list',
                'fallback_cb' => false,
            )); 
            ?>
        </nav>
    </div>
</header>



