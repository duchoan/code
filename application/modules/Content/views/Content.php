<div class="home-content">
    <div class="container">
        <?php
                if (!empty($pro_home_stick)) {
                    ?>
                    <div class="product-hot">
                        <p class="home-title-cate">Sản phẩm bán chạy</p>
                        <div class="product-hot-list">
                            <div class="row row-5">
                                <?php foreach ($pro_home_stick as $pro) { ?>
                                    <div class="col-sm-3 padding-5">
                                        <div class="item">
                                            <div class="pro-hot-inner">
                                                <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                   title="<?php echo show_meta($pro); ?>">
                                                    <img src="<?php echo $pro->image; ?>"
                                                         alt="<?php echo show_meta($pro); ?>">
                                                </a>
                                                <h3>
                                                    <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                       title="<?php echo show_meta($pro); ?>">
                                                        <?php echo $pro->$GLOBALS['title']; ?>
                                                    </a>
                                                </h3>
                                                <div class="row row-5">
                                                    <div class="col-sm-7 padding-5">
                                                        <p class="price-new">
                                                            <?php echo VndDot($pro->price); ?> VNĐ
                                                        </p>
                                                    </div>
                                                    <?php if ($pro->price_old > 0) { ?>
                                                        <div class="col-sm-5 padding-5">
                                                            <p class="price-old">
                                                                <?php echo VndDot($pro->price_old); ?> VNĐ
                                                            </p>
                                                        </div>
                                                    <?php } ?>
                                                    <?php if ($pro->price_old > 0 && $pro->price > 0) { ?>
                                                        <span class="price-sale">-<?php echo round((($pro->price_old - $pro->price) / $pro->price_old) * 100); ?>
                                                            %</span>
                                                    <?php } ?>
                                                </div>
                                                <div class="box-detail">
                                                    <div class="row row-5">
                                                        <div class="col-6 padding-5">
                                                            <a class="btn btn-success btn-add-cart"
                                                               href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                               title="<?php echo show_meta($pro); ?>"><?php echo rear('detail_pro'); ?></a>
                                                        </div>
                                                        <div class="col-6 padding-5">
                                                            <button class="btn btn-primary btn-buy-now" type="button"
                                                                    onclick="on_load_ajax(<?php echo $pro->id; ?>)"><?php echo rear('buy_now'); ?></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>

                    </div>
                <?php } ?>
        <?php if (!empty($cate_home)) {
            foreach ($cate_home as $cat) {
                if (!empty($pro_home[$cat->id])) {
                    ?>
                    <div class="product-hot">
                        <p class="home-title-cate"><?php echo $cat->$GLOBALS['title']; ?></p>
                        <div class="product-hot-list">
                            <div class="row row-5">
                                <?php foreach ($pro_home[$cat->id] as $pro) { ?>
                                   <div class="col-sm-3 padding-5">
                                       <div class="item">
                                           <div class="pro-hot-inner">
                                               <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                  title="<?php echo show_meta($pro); ?>">
                                                   <img src="<?php echo $pro->image; ?>"
                                                        alt="<?php echo show_meta($pro); ?>">
                                               </a>
                                               <h3>
                                                   <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                      title="<?php echo show_meta($pro); ?>">
                                                       <?php echo $pro->$GLOBALS['title']; ?>
                                                   </a>
                                               </h3>
                                               <div class="row row-5">
                                                   <div class="col-sm-7 padding-5">
                                                       <p class="price-new">
                                                           <?php echo VndDot($pro->price); ?> VNĐ
                                                       </p>
                                                   </div>
                                                   <?php if ($pro->price_old > 0) { ?>
                                                       <div class="col-sm-5 padding-5">
                                                           <p class="price-old">
                                                               <?php echo VndDot($pro->price_old); ?> VNĐ
                                                           </p>
                                                       </div>
                                                   <?php } ?>
                                                   <?php if ($pro->price_old > 0 && $pro->price > 0) { ?>
                                                       <span class="price-sale">-<?php echo round((($pro->price_old - $pro->price) / $pro->price_old) * 100); ?>
                                                           %</span>
                                                   <?php } ?>
                                               </div>
                                               <div class="box-detail">
                                                   <div class="row row-5">
                                                       <div class="col-6 padding-5">
                                                           <a class="btn btn-success btn-add-cart"
                                                              href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                              title="<?php echo show_meta($pro); ?>"><?php echo rear('detail_pro'); ?></a>
                                                       </div>
                                                       <div class="col-6 padding-5">
                                                           <button class="btn btn-primary btn-buy-now" type="button"
                                                                   onclick="on_load_ajax(<?php echo $pro->id; ?>)"><?php echo rear('buy_now'); ?></button>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                <?php } ?>
                            </div>
                        </div>
                        <div class="xem-tat-ca">
                            <a href="<?php echo base_url($cat->alias); ?>">Xem tất cả</a>
                        </div>
                    </div>
                <?php }
            }
        } ?>
        <?php
        if (!empty($pro_home_new)) {
            ?>
            <div class="product-hot">
                <p class="home-title-cate">Sản phẩm mới</p>
                <div class="product-hot-list">
                    <div class="row row-5">
                        <?php foreach ($pro_home_new as $pro) { ?>
                            <div class="col-sm-3 padding-5">
                                <div class="item">
                                    <div class="pro-hot-inner">
                                        <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                           title="<?php echo show_meta($pro); ?>">
                                            <img src="<?php echo $pro->image; ?>"
                                                 alt="<?php echo show_meta($pro); ?>">
                                        </a>
                                        <h3>
                                            <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                               title="<?php echo show_meta($pro); ?>">
                                                <?php echo $pro->$GLOBALS['title']; ?>
                                            </a>
                                        </h3>
                                        <div class="row row-5">
                                            <div class="col-sm-7 padding-5">
                                                <p class="price-new">
                                                    <?php echo VndDot($pro->price); ?> VNĐ
                                                </p>
                                            </div>
                                            <?php if ($pro->price_old > 0) { ?>
                                                <div class="col-sm-5 padding-5">
                                                    <p class="price-old">
                                                        <?php echo VndDot($pro->price_old); ?> VNĐ
                                                    </p>
                                                </div>
                                            <?php } ?>
                                            <?php if ($pro->price_old > 0 && $pro->price > 0) { ?>
                                                <span class="price-sale">-<?php echo round((($pro->price_old - $pro->price) / $pro->price_old) * 100); ?>
                                                    %</span>
                                            <?php } ?>
                                        </div>
                                        <div class="box-detail">
                                            <div class="row row-5">
                                                <div class="col-6 padding-5">
                                                    <a class="btn btn-success btn-add-cart"
                                                       href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                       title="<?php echo show_meta($pro); ?>"><?php echo rear('detail_pro'); ?></a>
                                                </div>
                                                <div class="col-6 padding-5">
                                                    <button class="btn btn-primary btn-buy-now" type="button"
                                                            onclick="on_load_ajax(<?php echo $pro->id; ?>)"><?php echo rear('buy_now'); ?></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>

            </div>
        <?php } ?>
        <?php if (!empty($ads_top)) { ?>
            <div class="ads-f">
                <img src="<?php echo $ads_top->image; ?>" alt="">
            </div>
        <?php } ?>
        <!--        --><?php //if(!empty($service)){ ?>
        <!--        <div class="service-home">-->
        <!--            <div class="row">-->
        <!--                --><?php //foreach ($service as $sv) { ?>
        <!--                    <div class="col-sm-4">-->
        <!--                        <div class="row row-5">-->
        <!--                            <div class="col-3 padding-5">-->
        <!--                                <img src="--><?php //echo $sv->icon; ?><!--" alt="-->
        <?php //echo $sv->$GLOBALS['title']; ?><!--">-->
        <!--                            </div>-->
        <!--                            <div class="col-9 padding-5">-->
        <!--                                --><?php //echo strip_tags($sv->$GLOBALS['excerpt']); ?>
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                --><?php //} ?>
        <!--            </div>-->
        <!--        </div>-->
        <!--        --><?php //} ?>
        <?php if (!empty($art_home)) { ?>
            <div class="news-home">
                <p class="home-title-cate"><?php echo $cate_art_home->$GLOBALS['title']; ?></p>
                <div class="row row-5">
                    <?php foreach ($art_home as $art) { ?>
                        <div class="col-sm-3 padding-5">
                            <div class="news-inner">
                                <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                   title="<?php echo show_meta($art); ?>">
                                    <img src="<?php echo $art->image; ?>" alt="<?php echo show_meta($art); ?>">
                                </a>
                                <h3>

                                    <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                       title="<?php echo show_meta($art); ?>">
                                        <?php echo $art->title; ?>
                                    </a>
                                </h3>
                                <p class="time-art">
                                    <i class="fa fa-clock-o"></i> <?php if (!empty($_SESSION['rear'])) {
                                        echo date('d F Y', strtotime($art->date_create));
                                    } else {
                                        echo rebuild_date('d F Y', strtotime($art->date_create));
                                    } ?>
                                </p>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
        <?php if (!empty($video)) { ?>
            <div class="news-home">
                <p class="home-title-cate"><?php echo $cate_video_home->$GLOBALS['title']; ?></p>
                <div class="row row-5">
                    <?php foreach ($video as $art) { ?>
                        <div class="col-sm-3 padding-5">
                            <div class="news-inner inner-video">
                                <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                   title="<?php echo show_meta($art); ?>">
                                    <img src="<?php echo $art->image; ?>"
                                         alt="<?php echo show_meta($art); ?>">
                                </a>
                                <h3>

                                    <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                       title="<?php echo show_meta($art); ?>">
                                        <?php echo $art->title; ?>
                                    </a>
                                </h3>
                                <p class="views"><?php echo rear('views_video') . $art->views; ?></p>

                                <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                   title="<?php echo show_meta($art); ?>" class="auto-play"></a>

                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
        <?php if (!empty($comment)) { ?>
            <div class="news-home">
                <p class="home-title-cate"><?php echo $cate_com_home->$GLOBALS['title']; ?></p>
                <div class="list-comment">
                    <div class="row row-25">
                        <?php foreach ($comment as $art) { ?>
                            <div class="col-sm-6 padding-25">
                                <div class="news-inner inner-comment">
                                    <div class="row">
                                        <div class="col-4">
                                            <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                               title="<?php echo show_meta($art); ?>">
                                                <img src="<?php echo $art->image; ?>"
                                                     alt="<?php echo show_meta($art); ?>">
                                            </a>
                                        </div>
                                        <div class="col-8">
                                            <div class="info-comment">
                                                <div class="intro-comment">
                                                    <?php echo strip_tags($art->$GLOBALS['intro']); ?>
                                                    <a class="view-text"
                                                       href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo rear('detail_com'); ?>
                                                    </a>
                                                </div>
                                                <h3 class="title-comment">
                                                    <a href="<?php echo base_url($art->$GLOBALS['alias']); ?>"
                                                       title="<?php echo show_meta($art); ?>">
                                                        <?php echo $art->$GLOBALS['title_other']; ?>
                                                    </a>
                                                </h3>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>

            </div>
        <?php } ?>
    </div>
</div>



