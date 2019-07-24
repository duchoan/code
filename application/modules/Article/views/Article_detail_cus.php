<div class="uk-container uk-container-center">
    <div class="uk-grid">
        <div class="uk-width-medium-1-1">
            <div class="link">
                <a href="<?php echo base_url(); ?>">Trang chủ</a>
                <?php if (!empty($arr_cate)) {
                    foreach ($arr_cate as $cat) {
                        ?>
                        >> <a href="<?php echo base_url() . $cat->alias; ?>"
                              title="<?php echo show_meta($cat); ?>"><?php echo $cat->title; ?></a>
                    <?php }
                } ?>
            </div>
        </div>
    </div>
</div>
<div class="uk-container uk-container-center">
    <div class="uk-grid">
        <div class="uk-width-medium-7-10">
            <div class="title_trangcon">
                <p><?php echo $art->title ; ?></p>
            </div>
            <div class="uk-grid">
                <?php if (!empty($art->img)) {
                    $image = json_decode($art->img);
                    if (!empty($image)) {
                        ?>
                        <div class="uk-width-medium-1-1">
                            <!--                            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>-->
                            <link rel="stylesheet"
                                  href="<?php echo base_url(); ?>skin/frontend/css/flexslider.css"
                                  type="text/css" media="screen"/>
                            <script defer
                                    src="<?php echo base_url(); ?>skin/frontend/js/jquery.flexslider.js"></script>
                            <section class="slider">
                                <div id="slider" class="flexslider">
                                    <ul class="slides">
                                        <?php foreach ($image as $im) { ?>
                                            <li>
                                                <img src="<?php echo $im; ?>"/>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                </div>
                                <div id="carousel" class="flexslider">
                                    <ul class="slides">
                                        <?php foreach ($image as $im) { ?>
                                            <li>
                                                <img src="<?php echo $im; ?>"/>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </section>
                            <script type="text/javascript">
                                $(window).load(function () {
                                    $('#carousel').flexslider({
                                        animation: "slide",
                                        controlNav: false,
                                        animationLoop: false,
                                        slideshow: false,
                                        itemWidth: 210,
                                        itemMargin: 5,
                                        asNavFor: '#slider',
                                        prevText: "",    //String: Set the text for the "previous" directionNav item
                                        nextText: ""
                                    });

                                    $('#slider').flexslider({
                                        animation: "slide",
                                        controlNav: false,
                                        animationLoop: false,
                                        slideshow: true,
                                        slideshowSpeed: 3000,
                                        sync: "#carousel",
                                        prevText: "",    //String: Set the text for the "previous" directionNav item
                                        nextText: "",
                                        start: function (slider) {
                                            $('body').removeClass('loading');
                                        },
//                                            pauseOnAction: true, // default setting
//                                            after: function(slider) {
//                                                /* auto-restart player if paused after action */
//                                                if (!slider.playing) {
//                                                    slider.play();
//                                                }
//                                            }
                                    });
                                });
                            </script>

                        </div>
                    <?php }
                } ?>
                <div class="uk-width-medium-1-1">
                    <div class="article">
                        <?php echo $art->fulltext ; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-width-medium-3-10">
            <?php if(!empty($comment)){?>
                <div class="title_menu_doc">
                    <p>nhận xét khách hàng</p>
                </div>
                <div class="tour_hot">

                        <?php foreach ($comment as $com){?>
                            <div class="box_tour_hot">
                        <div class="uk-grid">
                            <div class="uk-width-medium-1-3">
                                <div class="img_box_tour_hot">
                                    <a><img src="<?php echo $com->image ;?>" width="100%" alt="<?php echo $com->image ;?>"></a>

                                </div>
                            </div>
                            <div class="uk-width-medium-2-3">
                                <div class="title_box_tour_hot">
                                    <a><?php echo $com->name ;?></a>
                                </div>
                                <div><?php echo $com->fulltext ;?></div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            <?php } ?>
            <?php if (!empty($pro_stick)) { ?>
                <div class="title_menu_doc">
                    <p>tour hot</p>
                </div>
                <div class="tour_hot">
                    <?php foreach ($pro_stick as $pro) { ?>
                        <div class="box_tour_hot">
                            <div class="uk-grid">
                                <div class="uk-width-medium-1-3">
                                    <div class="img_box_tour_hot">
                                        <a href="<?php echo base_url() . $pro->alias; ?>"
                                           title="<?php echo show_meta($pro); ?>"><img
                                                src="<?php echo $pro->image; ?>"
                                                width="100%" alt="<?php echo show_meta($pro); ?>"></a>
                                        <?php if ($pro->price_old != '' && $pro->price_old > 0) {
                                            $sale = round((($pro->price_old - $pro->price) / $pro->price_old) * 100);
                                            ?>
                                            <div class="sale">
                                                <?php echo $sale; ?>%
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                                <div class="uk-width-medium-2-3">
                                    <div class="title_box_tour_hot">
                                        <a href="<?php echo base_url() . $pro->alias; ?>"
                                           title="<?php echo show_meta($pro); ?>"><?php echo $pro->title; ?></a>
                                    </div>
                                    <div class="price_box_tour_hot"><?php echo VndDot($pro->price); ?>VNĐ</div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <div class="more_box_tour_hot">
                        <a href="<?php echo base_url() . 'tour-hot'; ?>">Xem thêm</a>
                    </div>
                </div>
            <?php } ?>
        </div>
        <?php if (!empty($more_art)) { ?>
            <div class="uk-width-medium-1-1">
                <div class="title_primary">
                    Một số khách hàng khác
                </div>
            </div>
            <?php foreach ($more_art as $art) { ?>
                <div class="uk-width-medium-1-4">
                    <div class="box_dvdl">
                        <a href="<?php echo base_url().$art->alias ; ?>" title="<?php echo show_meta($art);?>">
                            <img src="<?php echo $art->image ;?>" width="100%" alt="<?php echo show_meta($art);?>">
                        </a>
                        <div class="title">
                            <a href="<?php echo base_url().$art->alias ; ?>" title="<?php echo show_meta($art);?>">
                                <?php echo $art->title ;?>
                            </a>
                        </div>
                        <div class="more">
                            <a href="<?php echo base_url().$art->alias ; ?>" title="<?php echo show_meta($art);?>">Xem thêm</a>
                        </div>
                    </div>
                </div>
            <?php } ?>
        <?php } ?>
    </div>
</div>

<style>
    #slider {
        margin-bottom: 10px;
    }

    .flex-direction-nav a::before {
        font-size: 30px;
        color: #fff;
        line-height: 40px;
    }

    #carousel {
        padding: 0 30px;
    }

    #carousel .flex-direction-nav a {
        opacity: 1;
        display: block;
    }

    #carousel .flex-direction-nav a.flex-next {
        opacity: 1;
        right: -15px;

    }

    #carousel .flex-direction-nav a.flex-prev {
        opacity: 1;
        left: -15px;
    }

    #carousel .flex-direction-nav a::before {
        background: #ebebeb;
        border-radius: 50%;
        text-align: center;
        width: 40px;
    }

    #carousel .flex-active-slide {
        box-sizing: border-box;
        border: 1px solid #464646;
    }
</style>