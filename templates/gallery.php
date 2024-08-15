<?php 
/* Template Name: Galeria */
get_header(); 
?>

<main>
    <section id="gallery-content">
        <h2><span class="highlight">Galeria</span></h2>
        <div class="gallery-1">
            <div class="photo-grid" id="photo-grid">
                <?php
                
                $args = array(
                    'post_type' => 'attachment',
                    'post_mime_type' => 'image',
                    'post_status' => 'inherit',
                    'posts_per_page' => -1,
                );
                $query = new WP_Query($args);

                if ($query->have_posts()) :
                    while ($query->have_posts()) : $query->the_post();
                        $image_url = wp_get_attachment_image_src(get_the_ID(), 'full')[0];
                        ?>
                        <div class="photo-item">
                            <a href="<?php echo esc_url($image_url); ?>" class="photo-link" data-fancybox="gallery">
                                <?php echo wp_get_attachment_image(get_the_ID(), 'thumbnail'); ?>
                            </a>
                        </div>
                    <?php
                    endwhile;
                endif;
                wp_reset_postdata();
                ?>
            </div>
            <div class="pagination" id="pagination">
                <!-- Paginacja dodana dynamicznie za pomocą JavaScriptu -->
            </div>
        </div>
    </section>
</main>

<!-- Modal -->
<div id="photo-modal" class="modal">
    <span id="prev" class="modal-nav">
        <i class="fa fa-chevron-left"></i>
    </span>
    <img id="modal-img" src="" alt="Modal Image">
    <span id="next" class="modal-nav">
        <i class="fa fa-chevron-right"></i>
    </span>
    <span id="modal-close" class="close">
        <i class="fa fa-times"></i>
    </span>
</div>

<?php get_footer(); ?>
