<?php
function mstrade_register_assets() {
    // Rejestracja i załadowanie stylu
    wp_enqueue_style(
        'mstrade-style', // Unikalny uchwyt dla stylu
        get_template_directory_uri() . '/assets/css/styles.css'
    );

    // Rejestracja i załadowanie skryptu
    wp_enqueue_script(
        'mstrade-scripts', // Unikalny uchwyt dla skryptu
        get_template_directory_uri() . '/assets/js/scripts.js',
        array(), // Tablica zależności, pusta jeśli brak
        false, // Numer wersji, false dla braku wersji
        true // Gdzie załadować skrypt, true oznacza w stopce
    );
}

add_action('wp_enqueue_scripts', 'mstrade_register_assets');

function register_my_menus() {
    register_nav_menus(array(
        'main-menu' => __('Main Menu'),
        'mobile-menu' => __('Mobile Menu')
    ));
}
add_action('init', 'register_my_menus');
?>