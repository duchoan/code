<!DOCTYPE html>
<html lang="vi" xmlns="http://www.w3.org/1999/xhtml">
<?php echo Modules::run('Header/Module_header/index'); ?>
<body data-base="<?php echo base_url(); ?>" class="home blog custom-background woocommerce-no-js" >
    <div id="template-wrapper" class="hfeed site" style="">
        <?php echo $content??''; ?>
        <?php echo Modules::run('Footer/Module_footer/index'); ?>
    </div>
</body>
</html>