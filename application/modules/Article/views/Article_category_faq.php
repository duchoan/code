<?php if (!empty($cate)) { ?>
    <section class="body-content">
        <div class="container">
            <div class="banner-home">
                <img src="<?php echo $cate->banner; ?>" alt="<?php echo show_meta($cate); ?>">
            </div>
            <div class="main-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo base_url(); ?>"><?php echo rear('home'); ?></a></li>
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
            <div class="row">
                <div class="col-sm-3">
                    <div class="row">
                        <div class="col-support col-sm-12 text-center" style="margin-bottom: 20px">
                            <img src="<?php echo base_url('skin/frontend/images/phone.png'); ?>" alt="">
                            <p class="sp-name"><?php echo rear('sp_phone'); ?></p>
                            <p class="sp-full-phone">Hotline: <?php echo $GLOBALS['supp']->phone; ?></p>
                        </div>
                        <div class="col-support col-sm-12 text-center" style="margin-bottom: 20px">
                            <img src="<?php echo base_url('skin/frontend/images/clock.png'); ?>" alt="">
                            <p class="sp-name"><?php echo rear('sp_time'); ?></p>
                            <p class="sp-full-time"><?php echo rear('time_line'); ?></p>
                        </div>
                        <div class="col-support col-sm-12 text-center">
                            <img src="<?php echo base_url('skin/frontend/images/letter.png'); ?>" alt="">
                            <p class="sp-name"><?php echo rear('sp_contact'); ?></p>
                            <p class="sp-full-email"><?php echo $GLOBALS['supp']->email; ?></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-9">
                    <h1 class="cate-title-pri"><?php echo $cate->$GLOBALS['title']; ?></h1>
                    <div class="content-faq">
                        <?php if (!empty($article)) {$i=1; ?>
                            <div id="accordion" role="tablist" aria-multiselectable="true">
                                <?php foreach ($article as $art) { ?>
                                    <div class="card">
                                        <div class="card-header <?php if($i==1){echo 'active';}?>" role="tab" id="headingOne">
                                            <h5 class="mb-0">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne<?php echo $art->id;?>"
                                                   aria-expanded="true" aria-controls="collapseOne">
                                                    <?php echo $art->$GLOBALS['title'];?>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseOne<?php echo $art->id;?>" class="panel-collapse collapse <?php if($i==1){echo 'show';}?>" role="tabpanel"
                                             aria-labelledby="headingOne<?php echo $art->id;?>">
                                            <div class="card-block">
                                                <?php echo $art->$GLOBALS['fulltext'];?>
                                            </div>
                                        </div>
                                    </div>
                                    <?php $i++; } ?>
                            </div>
                            <script>
                                $(document).ready(function() {
                                    $('.panel-collapse').on('show.bs.collapse', function () {
                                        $(this).siblings('.card-header').addClass('active');
                                    });

                                    $('.panel-collapse').on('hide.bs.collapse', function () {
                                        $(this).siblings('.card-header').removeClass('active');
                                    });
                                });
                            </script>
                            <div id="paging">
                                <div class="auto pagination"><?php echo $this->pagination->create_links(); ?></div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>