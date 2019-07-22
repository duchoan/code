<div class="header-top">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <a href="<?php echo base_url(); ?>" title="Trang chủ">
                    <img class="logo-top" src="<?php echo $sett->logo; ?>" alt="<?php echo $sett->title; ?>">
                </a>
            </div>
            <div class="col-sm-8">
                <div class="info-top">
                    <div class="row">
                        <div class="col-sm-5">
                            <div class="company-top">
                                <?php echo $sett->$GLOBALS['title'];?>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="map-top">
                                <?php echo $sett->$GLOBALS['customer'];?>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="phone-top">
                                <p class="number-phone"><a href="tel:<?php echo $supp->phone;?>"><?php echo $supp->phone;?></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<header>
    <script>
        $(document).ready(function () {
            $('.togger-menu').on('click', function () {
                $('#menu-primary').toggle();
            })
            $('.togger-menu-sub').on('click', function () {
                $('#sub-menu').toggle();
            })
        })
    </script>
    <div class="togger-menu"><span><img src="<?php echo $sett->logo; ?>" alt=""></span> <i class="fa fa-list"></i>
    </div>

    <div id="menu-primary" class="menu">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-menu">
                    <div class="nav">
                        <ul>
                            <li>
                                <a class="note-pa <?php if (current_url() == base_url()) {
                                    echo 'active';
                                } ?>" href="<?php echo base_url(); ?>"><?php echo rear('home')?></a>
                            </li>
                            <?php if (!empty($categories)) {
                                foreach ($categories as $cat) {
                                    ?>
                                    <li>
                                        <a class="note-pa <?php if (!empty($cate) && in_array($cat->id, explode(',', $cate->array_cate))) {
                                            echo 'active';
                                        } ?>" href="<?php  echo base_url() . $cat->$GLOBALS['alias'];
                                         ?>"
                                           title="<?php echo show_meta($cat); ?>">
                                            <?php echo $cat->$GLOBALS['title']; ?>
                                        </a>
                                        <?php if (!empty($cate_child[$cat->id])) { ?>
                                            <div class="togger-menu-sub"><i class="fa fa-angle-down"
                                                                            aria-hidden="true"></i></div>
                                            <ul class="sub-menu">
                                                <?php foreach ($cate_child[$cat->id] as $child) { ?>
                                                    <li><a href="<?php
                                                        echo base_url() . $child->$GLOBALS['alias']; ?>"
                                                           title="<?php echo show_meta($child); ?>"><?php echo $child->$GLOBALS['title']; ?></a>
                                                        <?php echo Modules::run('Header/Module_header/create_sub', $child->id); ?>
                                                    </li>
                                                <?php } ?>
                                            </ul>
                                        <?php } ?>
                                    </li>
                                <?php }
                            } ?>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-2">
                    <a class="group-cart" href="<?php echo base_url() . rear('alias_cart'); ?>">
                        <span ><?php echo $this->cart->total_items(); ?></span>
                    </a>
                    <div class="group-search">
                        <i class="fa fa-search"></i>
                        <div class="box-hover-search">
                            <div class="search-popup">
                                <form action="<?php echo base_url().rear('search_link');?>" method="get">
                                    <input name="key" type="text" class="searchTerm" placeholder="<?php echo rear('search_title');?>">
                                    <button type="submit" class="searchButton">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<script>
    $(document).ready(function () {
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 400) {
                $('header').addClass('divfixed');
            }
            else {
                $('header').removeClass('divfixed');
            }
        });
    })
</script>
