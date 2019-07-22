<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="content-language" content="vi">
    <meta name="revisit-after" content="1 days">
    <meta name="robots" content="noodp,index,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0">
    <link rel="icon" href="<?php echo $setting->favicon_icon; ?>" type="image/x-icon"/>
    <title><?php if(!empty($title)){echo $title ;}else{ echo $setting->title;}?></title>
    <meta name="description" content="<?php if(!empty($meta_des)){echo $meta_des ;}else{echo $setting->meta_des;}?>"/>
    <meta name="keywords" content="<?php if(!empty($meta_key)){echo $meta_key ;}else{echo $setting->meta_key;}?>"/>

    <meta property="og:site_name" content="<?php if(!empty($title)){echo $title ;}else{ echo $setting->title;}?>">
    <meta property="og:url" name="og:url" content="<?php echo current_url();?>" data-app>
    <meta property="og:type" name="og:type" content="website" data-app>
    <meta property="og:description" name="og:description" content="<?php if(!empty($meta_des)){echo $meta_des ;}else{echo $setting->meta_des;}?>" data-app>
    <meta property="og:title" name="og:title" content="<?php if(!empty($title)){echo $title ;}else{ echo $setting->title;}?>" data-app>
    <meta property="og:image" name="og:image" content="<?php if(!empty($fb_image)){echo $fb_image ;}?>" data-app>

    <!-- Bootstrap core CSS -->
    <base href="<?php echo base_url();?>">
    <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
    </style>
    <link rel='stylesheet' id='yarppWidgetCss-css'  href='<?php echo base_url();?>skin/frontend/plugins/yet-another-related-posts-plugin/style/widget.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='contact-form-7-css'  href='<?php echo base_url();?>skin/frontend/plugins/contact-form-7/includes/css/styles.css?ver=5.0.2' type='text/css' media='all' />
    <link rel='stylesheet' id='wd_fa_css-css'  href='http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='wd_pp_css-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd-plugin/assests/css/wd-pp.style.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='shop_shortcode-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd_shortcode/css/shop_shortcode.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='blog_shortcode-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd_shortcode/css/blog_shortcode.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd_shortcode/css/bootstrap.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-theme-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd_shortcode/css/bootstrap-theme.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='css.countdown-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd_shortcode/css/jquery.countdown.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='owl.carousel-css'  href='<?php echo base_url();?>skin/frontend/plugins/wd_shortcode/css/owl.carousel.min.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='wcps_style-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce-products-slider/assets/front/css/style.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='wcps_style.themes-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce-products-slider/assets/global/css/style.themes.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce-products-slider/assets/global/css/font-awesome.css?ver=4.9.3' type='text/css' media='all' />
    <style id='font-awesome-inline-css' type='text/css'>
    [data-font="FontAwesome"]:before {font-family: 'FontAwesome' !important;content: attr(data-icon) !important;speak: none !important;font-weight: normal !important;font-variant: normal !important;text-transform: none !important;line-height: 1 !important;font-style: normal !important;-webkit-font-smoothing: antialiased !important;-moz-osx-font-smoothing: grayscale !important;}
    </style>
    <link rel='stylesheet' id='woocommerce-layout-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce/assets/css/woocommerce-layout.css?ver=3.4.1' type='text/css' media='all' />
    <link rel='stylesheet' id='woocommerce-smallscreen-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce/assets/css/woocommerce-smallscreen.css?ver=3.4.1' type='text/css' media='only screen and (max-width: 768px)' />
    <link rel='stylesheet' id='woocommerce-general-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce/assets/css/woocommerce.css?ver=3.4.1' type='text/css' media='all' />
    <style id='woocommerce-inline-inline-css' type='text/css'>
    .woocommerce form .form-row .required { visibility: visible; }
    </style>
    <link rel='stylesheet' id='wp-pagenavi-css'  href='<?php echo base_url();?>skin/frontend/plugins/wp-pagenavi/pagenavi-css.css?ver=2.70' type='text/css' media='all' />
    <link rel='stylesheet' id='default-quicksand-css'  href='http://fonts.googleapis.com/css?family=Quicksand%3A400%2C300%2C700&#038;ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='default-lato-css'  href='http://fonts.googleapis.com/css?family=Lato%3A400%2C100%2C100italic%2C300%2C300italic%2C400italic%2C700%2C700italic%2C900%2C900italic&#038;ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='default-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/style.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='reset-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/reset.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='flexslider-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/flexslider.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='colorpicker-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/colorpicker.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='fancybox_css-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/jquery.fancybox.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='base-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/base.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='wd-widget-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/widget.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='select2-css'  href='<?php echo base_url();?>skin/frontend/plugins/woocommerce/assets/css/select2.css?ver=3.4.1' type='text/css' media='all' />
    <link rel='stylesheet' id='nivo-slider-css-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/nivo-slider.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='cs-animate-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/cs-animate.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='responsive-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/responsive.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='css.prettyPhoto-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/prettyPhoto.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='css_wd_menu_frontend-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/css/wd_menu_front.css?ver=4.9.3' type='text/css' media='all' />
    <link rel='stylesheet' id='custom-style-css'  href='<?php echo base_url();?>skin/frontend/themes/wp_glory/cache_theme/custom.css?ver=4.9.3' type='text/css' media='all' />
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/include/js/jquery/jquery.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/include/js/jquery/jquery-migrate.min.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/plugins/wd-plugin/assests/js/wd_search_font.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/plugins/wd-plugin/assests/js/jquery.bpopup.min.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/plugins/wd-plugin/assests/js/wd-popup.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/plugins/woocommerce-products-slider/assets/front/js/scripts.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/plugins/woocommerce-products-slider/assets/front/js/owl.carousel.min.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/themes/wp_glory/js/jquery.flexslider-min.js'></script>
    <script type='text/javascript'>
    /* <![CDATA[ */
    var wd_object_name = {"wd_vertical_menu":"shop by departments"};
    /* ]]> */
    </script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/themes/wp_glory/js/wd_menu_front.js'></script>
    <script type='text/javascript' src='<?php echo base_url();?>skin/frontend/themes/wp_glory/js/jquery.hoverIntent.js'></script>
    <style type="text/css">div.socialicons{float:left;display:block;margin-right: 10px;line-height: 1;}div.socialiconsv{line-height: 1;}div.socialicons p{margin-bottom: 0px !important;margin-top: 0px !important;padding-bottom: 0px !important;padding-top: 0px !important;}div.social4iv{background: none repeat scroll 0 0 #FFFFFF;border: 1px solid #aaa;border-radius: 3px 3px 3px 3px;box-shadow: 3px 3px 3px #DDDDDD;padding: 3px;position: fixed;text-align: center;top: 55px;width: 68px;display:none;}div.socialiconsv{padding-bottom: 5px;}</style>
	<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
    <style type="text/css" id="custom-background-css">
        body.custom-background { background-color: #fbfbfb; }
    </style>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,400italic,700,700italic&subset=vietnamese' rel='stylesheet' type='text/css'>
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.10&appId=1737394069857918";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <?php echo $setting->analytics ;?>
</head>