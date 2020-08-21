<?php

function supervalle_scripts() {
    wp_enqueue_style( 'animate-min', get_template_directory_uri() .'/css/animate.min.css' );
    wp_enqueue_style( 'bootstrap-min', get_template_directory_uri() .'/node_modules/bootstrap/dist/css/bootstrap.min.css' );
    wp_enqueue_style( 'style', get_template_directory_uri() .'/style.css' );
    wp_enqueue_style( 'fontawesome-css', 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' );
    wp_enqueue_style( 'iconic-css', 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css' );
    //JS
    wp_enqueue_script( 'jquery-min', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'aniview', get_template_directory_uri() . '/node_modules/jquery-aniview/dist/jquery.aniview.js', array(), '1.0.0', true );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );
    wp_enqueue_script( 'popper', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'bundle', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'supervalle_scripts' );

?>