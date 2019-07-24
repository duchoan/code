<?php if (!empty($cate)) { ?>
    <div class="banner-home">
        <img src="<?php echo $cate->banner; ?>" alt="<?php echo show_meta($cate); ?>">
        <div class="main-breadcrumb">
            <div class="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><i
                                    class="fa fa-home"></i> <?php echo rear('home'); ?></a></li>
                    <?php if (!empty($arr_cate)) {
                        foreach ($arr_cate as $cat) {
                            ?>
                            <li class="breadcrumb-item">
                                <a href="<?php echo base_url() . $cat->$GLOBALS['alias']; ?>"
                                   title="<?php echo show_meta($cat); ?>">
                                    <?php echo $cat->$GLOBALS['title']; ?>
                                </a>
                            </li>
                        <?php }
                    } ?>
                </ol>
            </div>
        </div>
    </div>
    <div class="body-content">
        <div class="container">
            <h2 class="main-title"><?php echo $cate->$GLOBALS['title']; ?></h2>
            <?php if (!empty($cate_child)) {
                foreach ($cate_child as $bb) { ?>
                    <div class="row-article-list">
                        <div class="row-article">
                            <div class="row row-5">
                                <div class="col-sm-3 padding-5">
                                    <a class="art-img"
                                       href="<?php echo base_url() . $bb->$GLOBALS['alias']; ?>"
                                       title="<?php echo show_meta($bb); ?>">
                                        <img src="<?php echo $bb->image; ?>"
                                             alt="<?php echo show_meta($bb); ?>">
                                    </a>
                                </div>
                                <div class="col-sm-8 padding-5">
                                    <h3 class="art-title">
                                        <a href="<?php echo base_url() . $bb->$GLOBALS['alias']; ?>"
                                           title="<?php echo show_meta($bb); ?>">
                                            <?php echo $bb->$GLOBALS['title']; ?>
                                        </a>
                                    </h3>
                                    <p class="art-date">
                                        <i class="fa fa-clock-o"></i> <?php echo rear('date') . ' ' . date('d/m/Y', strtotime($bb->date_create)); ?>
                                    </p>
                                    <div class="dev-art">
                                        <?php echo $bb->$GLOBALS['intro']; ?>
                                    </div>
                                    <p class="more-art text-right">
                                        <a href="<?php echo base_url() . $bb->$GLOBALS['alias']; ?>"
                                           title="<?php echo show_meta($bb); ?>">
                                            <?php echo rear('btn_more'); ?>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
                <div class="main-news">
                    <div class="container">
                        <?php foreach ($cate_child as $cat) { ?>
                            <?php if (!empty($art_child[$cat->id])) { ?>
                                <div class="list-news item-car">
                                    <p class="main-title"><?php echo $cat->$GLOBALS['title']; ?></p>
                                    <div id="car-<?php echo $cat->id; ?>" class="owl-carousel owl-theme ">
                                        <?php foreach ($art_child[$cat->id] as $art) { ?>
                                            <div class="item">
                                                <div class="art-inner">
                                                    <div class="art-img">
                                                        <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                           title="<?php echo show_meta($art); ?>">
                                                            <img src="<?php echo $art->image; ?>"
                                                                 alt="<?php echo show_meta($art); ?>">
                                                        </a>
                                                    </div>
                                                    <h3>
                                                        <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                           title="<?php echo show_meta($art); ?>">
                                                            <?php echo $art->title; ?>
                                                        </a>
                                                    </h3>
                                                    <p class="art-date"><i
                                                                class="fa fa-calendar"></i> <?php echo date('d/m/Y', strtotime($art->date_create)); ?>
                                                    </p>
                                                    <div class="dev-art">
                                                        <?php echo character_limiter(strip_tags($art->$GLOBALS['intro']), 150); ?>
                                                    </div>
                                                    <p class="art-more">
                                                        <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                                           title="<?php echo show_meta($art); ?>">
                                                            <?php echo rear('btn_more'); ?>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        <?php } ?>
                                    </div>
                                    <script>
                                        $(document).ready(function () {
                                            $('#car-<?php echo $cat->id;?>').owlCarousel({
                                                loop: true,
                                                margin: 10,
                                                nav: true,
                                                navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
                                                responsive: {
                                                    0: {
                                                        items: 1
                                                    },
                                                    480: {
                                                        items: 2
                                                    },
                                                    600: {
                                                        items: 3
                                                    },
                                                    1000: {
                                                        items: 4
                                                    }
                                                }
                                            })
                                        })
                                    </script>
                                </div>
                            <?php } ?>
                        <?php } ?>
                    </div>
                </div>
            <?php } else {
                if (!empty($article)) { ?>
                    <h1 class="main-title"><?php echo $cate->$GLOBALS['title']; ?></h1>
                    <?php foreach ($article as $art) { ?>
                        <div class="row-article">
                            <div class="row row-5">
                                <div class="col-sm-3 padding-5">
                                    <a class="art-img" href="<?php echo base_url() . $art->$GLOBALS['title']; ?>"
                                       title="<?php echo show_meta($art); ?>">
                                        <img src="<?php echo $art->image; ?>" alt="<?php echo show_meta($art); ?>">
                                    </a>
                                </div>
                                <div class="col-sm-8 padding-5">
                                    <h3 class="art-title">
                                        <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                           title="<?php echo show_meta($art); ?>">
                                            <?php echo $art->$GLOBALS['title']; ?>
                                        </a>
                                    </h3>
                                    <p class="art-date">
                                        <i class="fa fa-clock-o"></i> <?php echo rear('date') . ' ' . date('d/m/Y', strtotime($art->date_create)); ?>
                                    </p>
                                    <div class="dev-art">
                                        <?php echo $art->$GLOBALS['intro']; ?>
                                    </div>
                                    <p class="more-art text-right">
                                        <a href="<?php echo base_url() . $art->$GLOBALS['alias']; ?>"
                                           title="<?php echo show_meta($art); ?>">
                                            <?php echo rear('btn_more'); ?>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    <?php }
                } ?>
                <div id="paging">
                    <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                </div>
            <?php } ?>

        </div>
    </div>
<?php } ?>