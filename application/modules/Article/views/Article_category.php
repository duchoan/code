<?php if (!empty($cate)) {
    $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    ?>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <div class="body-content">
        <div class="container">
            <div class="row row-25">
                <?php echo Modules::run('Left/Module_left/index'); ?>
                <div class="col-sm-9 padding-25">
                    <?php if (!empty($article)) { ?>
                        <h1 class="left-title"><?php echo $cate->$GLOBALS['title']; ?></h1>
                        <div class="list-item-news">
                            <?php if (isset($_GET['views']) && $_GET['views'] == 'grid' || !isset($_GET['views'])) { ?>
                                <div class="row row-10">
                                    <?php foreach ($article as $art) { ?>
                                        <div class="col-sm-6 padding-10">
                                            <div class="item-art">
                                                <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                   title="<?php echo show_meta($art); ?>">
                                                    <img src="<?php echo $art->image; ?>"
                                                         alt="<?php echo show_meta($art); ?>">
                                                </a>
                                                <h3 class="news-title">
                                                    <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo character_limiter(strip_tags($art->$GLOBALS['title']),100); ?>
                                                    </a>
                                                </h3>
                                                <div class="art-views">
                                                    <div class="row row-5">
                                                        <div class="col-sm-6 padding-5">
                                                            <p class="views"><?php echo $art->views . ' ' . rear('views'); ?></p>
                                                        </div>
                                                        <div class="col-sm-6 padding-5">
                                                            <div class="row row-5">
                                                                <div class="col-8 padding-5">
                                                                    <div class="fb-like"
                                                                         data-href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                                         data-layout="button_count" data-action="like"
                                                                         data-size="small" data-show-faces="false"
                                                                         data-share="true"></div>
                                                                </div>
                                                                <div class="col-4 padding-5" style="padding-top: 3px">
                                                                    <g:plusone data-href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"  data-size="small"></g:plusone>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="description">
                                                    <?php echo character_limiter(strip_tags($art->$GLOBALS['intro']),110); ?>
                                                </div>
                                                <p class="more-than">
                                                    <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo rear('more_detail'); ?>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            <?php } else { ?>

                                <?php foreach ($article as $art) { ?>
                                    <div class="item-art">
                                        <div class="row row-10">
                                            <div class="col-sm-6 padding-10">

                                                <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                   title="<?php echo show_meta($art); ?>">
                                                    <img src="<?php echo $art->image; ?>"
                                                         alt="<?php echo show_meta($art); ?>">
                                                </a>


                                            </div>
                                            <div class="col-sm-6 padding-10">
                                                <h3 class="news-title">
                                                    <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo $art->$GLOBALS['title']; ?>
                                                    </a>
                                                </h3>
                                                <div class="art-views">
                                                    <div class="row row-5">
                                                        <div class="ol-sm-6 padding-5">
                                                            <p class="views"><?php echo $art->views . ' ' . rear('views'); ?></p>
                                                        </div>
                                                        <div class="ol-sm-6 padding-5">
                                                            <div class="row row-5">
                                                                <div class="col-8 padding-5">
                                                                    <div class="fb-like"
                                                                         data-href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                                         data-layout="button_count" data-action="like"
                                                                         data-size="small" data-show-faces="false"
                                                                         data-share="true"></div>
                                                                </div>
                                                                <div class="col-4 padding-5" style="padding-top: 3px">
                                                                    <g:plusone data-href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"  data-size="small"></g:plusone>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="description">
                                                    <?php echo strip_tags($art->$GLOBALS['intro']); ?>
                                                </div>
                                                <p class="more-than">
                                                    <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo rear('more_detail'); ?>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>

                            <?php } ?>
                        </div>
                        <div class="id-pagination">
                            <div class="row row-5">
                                <div class="col-sm-3 padding-5">
                                    <div class="grid-views">
                                        <a data-val="grid"
                                           class="add-views <?php if (isset($_GET['views']) && $_GET['views'] == 'grid' || !isset($_GET['views'])) {
                                               echo 'active';
                                           } ?>">
                                            <i class="fa fa-th-large"></i>
                                        </a>
                                        <a data-val="list"
                                           class="add-views <?php if (isset($_GET['views']) && $_GET['views'] == 'list') {
                                               echo 'active';
                                           } ?>">
                                            <i class="fa fa-th-list"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-sm-9 padding-5">
                                    <div id="paging">
                                        <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>