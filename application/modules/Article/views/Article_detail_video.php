<?php if (!empty($cate)) {
    $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    ?>
    <div class="body-content">
        <div class="container">
            <div class="row row-25">
                <?php echo Modules::run('Left/Module_left/index'); ?>
                <div class="col-sm-9 padding-25">
                    <?php if (!empty($art)) { ?>
                        <div class="list-views-video">
                            <div class="big-video">
                                <?php if (!empty($art)) { ?>
                                    <div id="video-lag" class="owl-carousel owl-theme">
                                        <div class="item-video" data-merge="<?php echo $art->id; ?>">
                                            <a class="owl-video" href="<?php echo $art->hyperlink; ?>"></a>
                                        </div>
                                    </div>
                                    <script>
                                        $(document).ready(function () {
                                            $('#video-lag').owlCarousel({
                                                items: 1,
                                                merge: true,
                                                loop: true,
                                                margin: 0,
                                                video: true,
                                                lazyLoad: true,
                                                center: true,
                                                videoHeight: 500,
                                                videoWidth: '100%',
                                                responsive: {
                                                    480: {
                                                        items: 1
                                                    },
                                                    600: {
                                                        items: 1
                                                    }
                                                }
                                            })
                                        })
                                    </script>
                                    <h2 class="main-title"><?php echo $art->title; ?></h2>
                                    <div class="row row-5" style="margin-bottom: 30px">
                                        <div class="col-6 col-sm-3 padding-5">
                                            <p class="views"><?php echo $art->views . ' ' . rear('views'); ?>
                                                | <?php echo date('d/m/Y', strtotime($art->date_create)); ?></p>
                                        </div>
                                        <div class="col-6 col-sm-4 padding-5">
                                            <script src="https://apis.google.com/js/platform.js" async defer></script>
                                            <div class="row row-5">
                                                <div class="col-6 padding-5">
                                                    <div class="fb-like"
                                                         data-href="<?php echo current_url(); ?>"
                                                         data-layout="button_count" data-action="like"
                                                         data-size="small" data-show-faces="false"
                                                         data-share="true"></div>
                                                </div>
                                                <div class="col-4 padding-5" style="padding-top: 3px">
                                                    <g:plusone data-href="<?php echo current_url(); ?>"  data-size="small"></g:plusone>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>

                            </div>
                        </div>
                        <?php if (!empty($article)) { ?>
                            <div class="list-item-video">
                                <p class="title-video-all"><?php echo rear('list_video'); ?></p>
                                <div class="row row-5">
                                    <?php foreach ($article as $art) { ?>
                                        <div class="col-sm-4 padding-5">
                                            <div class="news-inner inner-video">
                                                <a href="<?php echo base_url($art->alias); ?>"
                                                   title="<?php echo show_meta($art); ?>">
                                                    <img src="<?php echo $art->image; ?>"
                                                         alt="<?php echo show_meta($art); ?>">
                                                </a>
                                                <h3>
                                                    <a href="<?php echo base_url($art->alias); ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo $art->title; ?>
                                                    </a>
                                                </h3>
                                                <p class="views"><?php echo rear('views_video') . $art->views; ?></p>
                                                <a href="<?php echo base_url($art->alias); ?>"
                                                   title="<?php echo show_meta($art); ?>"class="auto-play"></a>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="id-pagination">
                                <div class="row row-5">
                                    <div class="col-sm-12 padding-5">
                                        <div id="paging">
                                            <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <?php }
                    } ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>