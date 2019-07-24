<?php if (!empty($cate)) {
    $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    ?>
    <div class="body-content">
        <div class="container">
            <div class="row row-25">
                <?php echo Modules::run('Left/Module_left/left_pro'); ?>
                <div class="col-sm-9 padding-25">

                    <?php if (!empty($product)) { ?>
                        <h1 class="left-title"><?php echo $cate->$GLOBALS['title']; ?></h1>
                        <div class="detail-product">
                            <?php echo $cate->content_text; ?>
                        </div>
                        <div class="list-product">
                            <div class="row row-10">
                                <?php foreach ($product as $pro) { ?>
                                    <div class="col-sm-3 padding-10">
                                        <div class="pro-hot-inner">
                                            <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                               title="<?php echo show_meta($pro); ?>">
                                                <img src="<?php echo $pro->image; ?>"
                                                     alt="<?php echo show_meta($pro); ?>">
                                            </a>
                                            <h3>
                                                <a href="<?php echo base_url($pro->$GLOBALS['alias']); ?>"
                                                   title="<?php echo show_meta($pro); ?>">
                                                    <?php echo character_limiter(strip_tags($pro->$GLOBALS['title']), 48); ?>
                                                </a>
                                            </h3>
                                            <div class="row row-5">
                                                <div class="col-sm-7 padding-5">
                                                    <p class="price-new">
                                                        <?php if($pro->price>0){echo VndDot($pro->price).' VNĐ'; }else{echo rear('contact');}  ?>
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
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>