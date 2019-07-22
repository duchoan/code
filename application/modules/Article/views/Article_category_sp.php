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
    <div class="body-content box-bg-sp">
        <div class="container">
            <h2 class="main-title"><?php echo $cate->$GLOBALS['title']; ?></h2>
            <div class="box-support">
                <div class="row-support">
                    <div class="row row-5">
                        <div class="col-sm-5 padding-5">
                            <div class="box-line-left">
                                <p>Email: <span><?php echo $supp->email; ?></span></p>
                                <p>Hotline: <span><?php echo $supp->phone; ?></span></p>
                            </div>
                        </div>
                        <div class="col-sm-2 padding-5">
                            <div class="box-img">
                                <img src="<?php echo base_url('skin/frontend/images/logo.png'); ?>" alt="">
                            </div>
                        </div>
                        <div class="col-sm-5 padding-5">
                            <p class="sup-title">INTECHCO.COM.VN</p>
                        </div>
                    </div>
                </div>
                <div class="row-support">
                    <div class="row row-5">
                        <div class="col-sm-5 padding-5">
                            <p class="sup-title-r"><?php echo rear('support'); ?></p>
                        </div>
                        <div class="col-sm-2 padding-5">
                            <div class="box-img">
                                <img src="<?php echo base_url('skin/frontend/images/em-gai-nghe-phone.png'); ?>" alt="">
                            </div>
                        </div>

                        <div class="col-sm-5 padding-5">
                            <div class="box-line-left box-line-right">
                                <?php if (!empty($supp->support)) {
                                    $port = json_decode($supp->support);
                                    if($_SESSION['rear'] =='_en'){
                                        $name = 'skype';
                                    }else{
                                        $name = 'name';
                                    }
                                    foreach ($port as $post) {?>
                                        <p><?php echo $post->$name ;?>: <span><?php echo $post->phone; ?></span></p>
                                    <?php }
                                } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="support-full">
                <?php echo $cate->$GLOBALS['fulltext'] ?>
            </div>
        </div>
    </div>
<?php } ?>