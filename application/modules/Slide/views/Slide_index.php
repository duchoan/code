<?php if (!empty($slide)) { ?>
    <div class="slide">
        <div id="owl-one-slide" class="owl-carousel owl-theme">
            <?php foreach ($slide as $sl) { ?>
                <div class="item">
                    <a href="<?php echo $sl->hyperlink; ?>">
                        <img src="<?php echo $sl->image; ?>" alt="<?php echo $sl->title; ?>">
                    </a>
                </div>
            <?php } ?>
        </div>
        <script>
            $(document).ready(function () {
                $("#owl-one-slide").owlCarousel({
                    dots: true,
                    nav: true,
                    navText: ['', ''],
                    autoplay: true,
                    autoplayTimeout: 5000,
                    loop: true,
                    items: true
                });
            });
        </script>
        <?php if (!empty($categories_sl)) { ?>
            <div class="dk-email">
                <div class="container">
                    <div class="menu-slide">
                        <ul>
                            <?php foreach ($categories_sl as $cat) { ?>
                                <li>
                                    <a href="<?php echo base_url($cat->alias );?>"><?php echo $cat->title ;?></a>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
<?php } ?>