<?php if (!empty($cate)) { ?>
    <div class="body-content">
        <div class="container">
            <div class="row row-25">
                <?php echo Modules::run('Left/Module_left/index'); ?>
                <div class="col-sm-9 padding-25">
                    <?php echo $cate->$GLOBALS['content_text']; ?>
                </div>
            </div>
        </div>
    </div>
<?php } ?>