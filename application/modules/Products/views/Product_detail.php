<?php if (!empty($cate)) { ?>
    <link href="<?php echo base_url();?>skin/frontend/css/magnific-popup.css" rel="stylesheet"/>


    <script src="<?php echo base_url();?>skin/frontend/js/jquery.magnific-popup.min.js" ></script>
    <div class="body-content">
        <div class="container">
            <div class="row row-25">
                <?php echo Modules::run('Left/Module_left/left_pro'); ?>
                <div class="col-sm-9 padding-25">
                    <?php if (!empty($pro)) { ?>
                        <div class="product-detail">
                            <div class="row row-10">
                                <div class="col-sm-6 padding-10">
                                    <?php if(!empty($pro->img)){
                                        $gallery = json_decode($pro->img);
                                        ?>
                                    <div id="bigPic" class="bigPic">
                                        <?php foreach ($gallery as $gl){ ?>
                                        <img title="" href="<?php echo $gl;?>" src="<?php echo $gl;?>" alt="" />
                                        <?php } ?>
                                        <div class="like-and-show">
                                            <?php
                                            $ip =$this->input->ip_address();
                                            if(!empty($pro->idpr)){
                                                $arr_likes = explode(',',$pro->idpr);
                                                if(in_array($ip,$arr_likes)==true){
                                                    $output ='<i class="fa fa-heart"></i>';
                                                }else{
                                                    $output ='<i class="fa fa-heart-o"></i>';
                                                }
                                            }else{
                                                $output ='<i class="fa fa-heart-o"></i>';
                                            }
                                            ?>
                                            <span class="like-pro" onclick="add_like(<?php echo $pro->id ;?>)">
                                                <?php echo $output;?>
                                            </span>
                                            <span class="light-pro">
                                                <i class="fa fa-search"></i>

                                            </span>
                                        </div>
                                    </div>


                                    <ul id="thumbs" class="row row-5">
                                        <?php $i=1; foreach ($gallery as $gl){ ?>
                                            <li class='col-xl-3 padding-5 <?php if($i==1){echo 'active';}?>' rel='<?php echo $i;?>'><img src="<?php echo $gl;?>" alt="" /></li>
                                        <?php  $i++;} ?>
                                    </ul>
                                    <script type="text/javascript">
                                        var currentImage;
                                        var currentIndex = -1;
                                        var interval;
                                        function showImage(index){
                                            if(index < $('#bigPic img').length){
                                                var indexImage = $('#bigPic img')[index]
                                                if(currentImage){
                                                    if(currentImage != indexImage ){
                                                        $(currentImage).css('z-index',2);
                                                        clearTimeout(myTimer);
                                                        $(currentImage).fadeOut(250, function() {
                                                            myTimer = setTimeout("showNext()", 3000);
                                                            $(this).css({'display':'none','z-index':1})
                                                        });
                                                    }
                                                }
                                                $(indexImage).css({'display':'block', 'opacity':1});
                                                currentImage = indexImage;
                                                currentIndex = index;
                                                $('#thumbs li').removeClass('active');
                                                $($('#thumbs li')[index]).addClass('active');
                                            }
                                        }

                                        function showNext(){
                                            var len = $('#bigPic img').length;
                                            var next = currentIndex < (len-1) ? currentIndex + 1 : 0;
                                            showImage(next);
                                        }

                                        var myTimer;

                                        $(document).ready(function() {
                                            myTimer = setTimeout("showNext()", 3000);
                                            showNext(); //loads first image
                                            $('#thumbs li').bind('click',function(e){
                                                var count = $(this).attr('rel');
                                                showImage(parseInt(count)-1);
                                            });
                                        });


                                    </script>
                                    <?php }else{?>
                                    <div class="bigPic">
                                        <img title="<?php echo $pro->image ;?>" src="<?php echo $pro->image ;?>" alt="<?php echo $pro->image ;?>" />
                                    </div>
                                   <?php  } ?>
                                </div>
                                <div class="col-sm-6 padding-10">
                                    <h1 class="name-product"><?php echo $pro->$GLOBALS['title']; ?></h1>
                                    <div class="intro-product">
                                        <?php echo $pro->$GLOBALS['intro']; ?>
                                    </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="quantity">
                                                    <label><?php echo rear('quantity');?></label><input  id="qty_pro" type="number" name="qty" min="1" max="9" step="1" value="1">
                                                </div>
                                            </div>

                                            <script>
                                                jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
                                                jQuery('.quantity').each(function () {
                                                    var spinner = jQuery(this),
                                                        input = spinner.find('input[type="number"]'),
                                                        btnUp = spinner.find('.quantity-up'),
                                                        btnDown = spinner.find('.quantity-down'),
                                                        min = input.attr('min'),
                                                        max = input.attr('max');

                                                    btnUp.click(function () {
                                                        var oldValue = parseFloat(input.val());
                                                        if (oldValue >= max) {
                                                            var newVal = oldValue;
                                                        } else {
                                                            var newVal = oldValue + 1;
                                                        }
                                                        spinner.find("input").val(newVal);
                                                        spinner.find("input").trigger("change");
                                                    });

                                                    btnDown.click(function () {
                                                        var oldValue = parseFloat(input.val());
                                                        if (oldValue <= min) {
                                                            var newVal = oldValue;
                                                        } else {
                                                            var newVal = oldValue - 1;
                                                        }
                                                        spinner.find("input").val(newVal);
                                                        spinner.find("input").trigger("change");
                                                    });

                                                });
                                            </script>
                                            <div class="col-sm-12">
                                                <div class="button-detail">
                                                    <div class="row row-5">
                                                        <div class="col-6 padding-5">
                                                            <button class="btn btn-success btn-add-cart" type="button" onclick="on_add_ajax(<?php echo $pro->id; ?>)" style="width: 100%"><?php echo  rear('add_cart');?></button>
                                                        </div>
                                                        <div class="col-6 padding-5">
                                                            <button class="btn btn-primary btn-buy-now" type="button" onclick="on_load_ajax(<?php echo $pro->id; ?>)" style="width: 100%"><?php echo  rear('buy_now');?></button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <script src="https://apis.google.com/js/platform.js" async defer></script>
                                                <div class="row row-5">
                                                    <div class="col-4 padding-5">
                                                        <div class="fb-like"
                                                             data-href="<?php echo current_url(); ?>"
                                                             data-layout="button_count" data-action="like"
                                                             data-size="small" data-show-faces="false"
                                                             data-share="true"></div>
                                                    </div>
                                                    <div class="col-3 padding-5" style="padding-top: 3px">
                                                        <g:plusone data-href="<?php echo current_url(); ?>"  data-size="small"></g:plusone>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="group-tab">
                                <ul>
                                    <li class="active">
                                        <?php echo rear('detail')?>
                                    </li>
                                    <li>
                                        <a onclick="loadScolltop();" style="cursor: pointer"><?php echo rear('comment')?><span><?php echo $comment;?></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="content-tour-tab">
                                <div class="tour-tab">
                                    <?php echo $pro->$GLOBALS['content_text']; ?>
                                </div>
                            </div>
                            <?php echo Modules::run('Comment/Comment/index',$pro);?>
                            <div id="comment-face">
                                <div style="width: 100%; margin: 10px 0">
                                    <div class="fb-comments" data-href="<?php echo current_url(); ?>" data-width="100%"
                                         data-numposts="5"></div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <?php if(!empty($more_pro)){ ?>
                    <div class="more-pro">
                        <p class="title-more-pro">
                            <?php echo rear('more_pro')?>
                        </p>
                        <div class="list-product">
                            <div class="row row-10">
                                <?php foreach ($more_pro as $pro) { ?>
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
                                                    <?php echo $pro->$GLOBALS['title']; ?>
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
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>
<script type="text/javascript">
    $(document).ready(function() {
        $( ".light-pro i" ).click(function() {
            $('#bigPic img').click();
        });
            $('#bigPic').magnificPopup({
                delegate: 'img',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title') + '<small></small>';
                    }
                }
            });

    });
</script>
