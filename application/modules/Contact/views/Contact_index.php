<div class="body-content">
    <div class="container">
        <link href="<?php echo base_url(); ?>skin/frontend/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
        <script src="<?php echo base_url(); ?>skin/frontend/js/bootstrap-datepicker.min.js"></script>
        <div class="row">
            <div class="col-sm-12">
                <div class="address-contact">
                    <?php
                    echo $GLOBALS['sett']->google_map;
                    ?>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="body-contact">
                    <div class="row">
                        <div class="col-sm-6">
                            <?php
                            echo $GLOBALS['sett']->$GLOBALS['address_contact'];
                            ?>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-contact">
                                <div class="row">
                                    <div class="col-md-12">
                                        <?php if (!isset($_COOKIE['contact_done'])) {
                                        if (!empty($success)) { ?>
                                            <div class="note-success">
                                                <?php echo rear('con_success'); ?>
                                            </div>
                                        <?php } else { ?>
                                            <form id="form-contact" method="post" action="<?php echo current_url(); ?>">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label><?php echo rear('full_name');?>(*)</label>
                                                            <input type="text" class="form-control" name="name"
                                                                   data-validation="required">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label><?php echo rear('phone');?>(*)</label>
                                                            <input type="text" class="form-control" name="phone"
                                                                   data-validation="required,length,number"
                                                                   data-validation-allowing="float"
                                                                   data-validation-length="10-20">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label>Email(*)</label>
                                                            <input type="text" class="form-control" name="email"
                                                                   data-validation="required,email">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group">
                                                            <label><?php echo rear('content_ct');?>(*)</label>
                                                            <textarea class="form-control" rows="3" name="content"
                                                                      data-validation="required"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <script src='https://www.google.com/recaptcha/api.js'></script>
                                                                <div class="g-recaptcha"
                                                                     data-sitekey="6LdVBDYUAAAAANGYVrnye8Vh9sxfDle-76E9Bgub"></div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-sm-12 text-left">
                                                                <button type="submit" class="btn btn-danger btn-send"
                                                                        style="cursor: pointer">
                                                                    <?php echo rear('btn_sent');?>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <script>
                                                $(document).ready(function () {
                                                    $.validate({
                                                        form: '#form-contact',
                                                        lang: 'vi',
                                                        scrollToTopOnError: false

                                                    });
                                                })
                                            </script>
                                        <?php }
                                        }else { ?>
                                            <div class="note-success">
                                                <?php echo rear('cookie_ct'); ?>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

