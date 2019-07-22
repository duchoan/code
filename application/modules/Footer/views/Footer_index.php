<?php if (!empty($ads)) {
    if (current_url() != base_url()) {
        ?>
        <div class="ads-f">
            <div class="container">
                <img src="<?php echo $ads->image; ?>" alt="">
            </div>
        </div>
    <?php }
} ?>
<footer>
    <div class="container">

        <div class="row">
            <div class="col-sm-6">
                <?php echo $GLOBALS['sett']->$GLOBALS['footer']; ?>
            </div>
            <div class="col-sm-3">
                <p class="title-footer">Like FB - cập nhật mẫu mới</p>
                <div class="fb-page" data-href="<?php echo $GLOBALS['sett']->facebook; ?>" data-tabs="timeline"
                     data-height="260" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="<?php echo $GLOBALS['sett']->facebook; ?>" class="fb-xfbml-parse-ignore"><a
                                href="<?php echo $GLOBALS['sett']->facebook; ?>"></a></blockquote>
                </div>
            </div>
            <div class="col-sm-3">
                <p class="title-footer">Danh mục</p>
                <?php if (!empty($cate_bottom)) { ?>
                    <div class="link-bottom">
                        <ul>
                            <li>
                                <a href="<?php echo base_url() ; ?>">
                                    <i class="fa fa-angle-right"></i> <?php echo rear('home'); ?>
                                </a>
                            </li>
                            <?php foreach ($cate_bottom as $link) { ?>
                                <li>
                                    <a href="<?php  echo base_url() . $link->$GLOBALS['alias']; ?>">
                                        <i class="fa fa-angle-right"></i> <?php echo $link->$GLOBALS['title']; ?>
                                    </a>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</footer>
<div class="copy_right text-center">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <a href="<?php echo $GLOBALS['sett']->facebook; ?>">
                    <img src="<?php echo base_url('skin/frontend/images/face.png'); ?>" alt="">
                </a>
                <a href="<?php echo $GLOBALS['sett']->youtube; ?>">
                    <img src="<?php echo base_url('skin/frontend/images/youtube.png'); ?>" alt="">
                </a>
                <a href="<?php echo $GLOBALS['sett']->twitter; ?>">
                    <img src="<?php echo base_url('skin/frontend/images/tw.png'); ?>" alt="">
                </a>

            </div>

        </div>
    </div>
</div>
<div class="right-share">
    <ul>
        <li>
            <a href="<?php echo $GLOBALS['sett']->facebook; ?>">
                <img src="<?php echo base_url('skin/frontend/images/r-face.jpg'); ?>" alt="">
            </a>


        </li>
        <li>
            <a href="<?php echo $GLOBALS['sett']->google_plus; ?>">
                <img src="<?php echo base_url('skin/frontend/images/r-googleplus.jpg'); ?>" alt="">
            </a>
        </li>
        <li>
            <a href="<?php echo $GLOBALS['sett']->twitter; ?>">
                <img src="<?php echo base_url('skin/frontend/images/r-tw.jpg'); ?>" alt="">
            </a>
        </li>
        <li>
            <a href="<?php echo $GLOBALS['sett']->youtube; ?>">
                <img src="<?php echo base_url('skin/frontend/images/r-you.jpg'); ?>" alt="">
            </a>
        </li>


    </ul>
</div>