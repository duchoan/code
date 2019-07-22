<?php if (!empty($art)) { ?>
    <div class="body-content">
        <div class="container">
            <div class="row row-25">
                <?php echo Modules::run('Left/Module_left/index'); ?>
                <div class="col-sm-9 padding-25">
                    <h1 class="main-title"><?php echo $art->title; ?></h1>
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
                    <?php echo $art->content_text; ?>
                    <div style="width: 100%; margin: 10px 0">
                        <div class="fb-comments" data-href="<?php echo current_url(); ?>" data-width="100%"
                             data-numposts="5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php } ?>
