<?php if (!empty($slide)) { ?>
    <div class="header-static-slideshow">
        <div class="container">
            <div class="row">
                <ul class="xoxo">
                    <li id="text-25" class="widget-container widget_text">
                        <div class="textwidget">
                            <div class="">
                                <div style="max-width: 100%;" class="ml-slider-3-7-2 metaslider metaslider-nivo metaslider-7368 ml-slider">
                                    <div id="metaslider_container_7368">
                                        <div class='slider-wrapper theme-default'>
                                            <div class='ribbon'></div>
                                            <div id='metaslider_7368' class='nivoSlider'>
                                                <?php foreach ($slide as $sl) { ?>
                                                    <div class="item">
                                                        <a href="<?php echo $sl->hyperlink; ?>">
                                                            <img src="<?php echo $sl->image; ?>" height="300" width="100%" class="slider-7368 slide-<?php echo $sl->id; ?>" alt="<?php echo $sl->title; ?>">
                                                        </a>
                                                    </div>
                                                <?php } ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
<?php } ?>