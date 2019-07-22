<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php
        echo validation_errors();
        ?>
    </div>
<?php } ?>
<form id="support-all" method="post" action="<?php echo base_url(); ?>admin-direct/support?table=support">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#support-live" aria-controls="support-live"
                                                      role="tab" data-toggle="tab">Hỗ trợ trực tuyến</a>
            </li>
            <li role="presentation"><a href="#support-other" aria-controls="support-other"
                                       role="tab" data-toggle="tab">Thông tin khác</a></li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="support-live">
                <p class="info-support add-support">Hệ thống sẽ tự động loại bỏ các phần có Tên hỗ trợ bỏ trống</p>
                <div class="row-th ">
                    <div class="cell-8 text-center">
                        STT
                    </div>
                    <div class="cell-12">
                        Tên hỗ trợ
                    </div>
<!--                    <div class="cell-12">-->
<!--                        Yahoo-->
<!--                    </div>-->
                    <div class="cell-12">
                        Tên hỗ trợ EN
                    </div>
                    <div class="cell-12">
                        Di động
                    </div>
<!--                    <div class="cell-12">-->
<!--                        Cố định-->
<!--                    </div>-->
<!--                    <div class="cell-12">-->
<!--                        Email-->
<!--                    </div>-->
<!--                    <div class="cell-12">-->
<!--                        Sắp xếp-->
<!--                    </div>-->
                    <div class="cell-8">

                    </div>
                </div>
                <!-- end row th -->
                <div class="row-tb-body">
                    <?php if (!empty($arr_support->support)) {
                        $i = 1;
                        $obj_support = json_decode($arr_support->support);
                        if (!empty($obj_support)){
                            foreach ($obj_support as $key => $value) {
                                ?>
                                <div class="row-support">
                                    <div class="cell-8 text-center">
                                        <span class="number-order-sup"><?php echo $i; ?></span>
                                        <span class="remove-support"></span>
                                    </div>
                                    <div class="cell-12">
                                        <input type="text" name="support[<?php echo $i; ?>][name]"
                                               value="<?php echo $value->name; ?>">
                                    </div>
<!--                                    <div class="cell-12">-->
<!--                                        <input type="text" name="support[--><?php //echo $i; ?><!--][yahoo]"-->
<!--                                               value="--><?php //echo $value->yahoo; ?><!--">-->
<!--                                    </div>-->
                                    <div class="cell-12">
                                        <input type="text" name="support[<?php echo $i; ?>][skype]"
                                               value="<?php echo $value->skype; ?>">
                                    </div>
                                    <div class="cell-12">
                                        <input type="text" name="support[<?php echo $i; ?>][phone]"
                                               value="<?php echo $value->phone; ?>">
                                    </div>
<!--                                    <div class="cell-12">-->
<!--                                        <input type="text" name="support[--><?php //echo $i; ?><!--][home_phone]"-->
<!--                                               value="--><?php //echo $value->home_phone; ?><!--">-->
<!--                                    </div>-->
<!--                                    <div class="cell-12">-->
<!--                                        <input type="text" name="support[--><?php //echo $i; ?><!--][email]"-->
<!--                                               value="--><?php //echo $value->email; ?><!--">-->
<!--                                    </div>-->
<!--                                    <div class="cell-12">-->
<!--                                        <input type="text" name="support[--><?php //echo $i; ?><!--][sup_order]"-->
<!--                                               value="--><?php //echo $value->sup_order; ?><!--">-->
<!--                                    </div>-->
                                    <div class="cell-8">
                                        <span class="add-support add-item-sp"></span>
                                    </div>
                                </div>
                                <?php $i++;
                            }
                        }
                    } ?>
                </div>
            </div>
            <!-- end tab info-->
            <div role="tabpanel" class="tab-pane" id="support-other">
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">VNPAY ACCOUNT</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="text" name="vnpay_account" class="control-input input-user"
                               value="<?php echo $arr_support->vnpay_account; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">VNPAY SERECT</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="text" name="vnpay_serect" class="control-input input-user"
                               value="<?php echo $arr_support->vnpay_serect; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">VNPAY URL</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="text" name="vnpay_url" class="control-input input-user"
                               value="<?php echo $arr_support->vnpay_url; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Hotline</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="text" name="phone" class="control-input input-user"
                               value="<?php echo $arr_support->phone; ?>"/>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Fax</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="text" name="fax" class="control-input input-user"
                               value="<?php echo $arr_support->fax; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Email nhận dịch vụ</span>
                    </div>
                    <div class="col-xs-10">
                        <input type="text" name="email" class="control-input input-user"
                               value="<?php echo $arr_support->email; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2 user-bold">Email gửi liên hệ</span>
                    </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-3">
                                <input type="text" name="email_send" class="control-input"
                                       value="<?php echo $arr_support->email_send; ?>"/>
                            </div>
                            <div class="col-xs-1 user-bold">Mật khẩu</span></div>
                            <div class="col-xs-2">
                                <input type="password" name="password" class="control-input "
                                       value="<?php echo $arr_support->password; ?>"/>
                            </div>
                            <div class="col-xs-2">
                                <button type="button" class="check_email">Gửi email test</button>
                            </div>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
                <!-- end row-->
                <div class="clear"></div>
                <div class="col-xs-10 notice_test">

                </div>
                <!-- end tab contact-->
            </div>
            <div class="row text-left">
                <div class="col-xs-2"></div>
                <div class="col-xs-10">
                    <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
