<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php
        echo validation_errors();
        ?>
    </div>
<?php }
if (!empty($note)) {
    echo ' <div class="validate-form">' . $note . '</div>';
}
?>
<form id="support-all" method="post"
      action="<?php echo base_url(); ?>admin-direct/setting?table=setting">
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Quản trị hệ thống</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
            <a href="<?php echo base_url(); ?>" class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <!-- end tab list-->
    <?php if (isset($_GET['setup'])) {
        $setup = $_GET['setup'];
    } else {
        $setup = '';
    } ?>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="support-live">
                        <div class="toggle-group">
                            <p class="toggle-title <?php if ($setup != 'website') {
                                echo 'toggle-title-up';
                            } ?> ">Thông tin website</p>
                            <div class="toggle-content" <?php if ($setup == 'website') {
                                echo 'style="display:block"';
                            } ?>>
                                <div class="row row-input">
                                    <div class="col-xs-2">Biểu tượng website</div>
                                    <div class="col-xs-10">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <input type="text" name="favicon_icon" id="xFilePath"
                                                       class="control-input"
                                                       style="width: 100%"
                                                       value="<?php if (!empty($arr_setting->favicon_icon)) {
                                                           echo $arr_setting->favicon_icon;
                                                       } else {
                                                           echo $this->input->post('favicon_icon');
                                                       } ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                                <span class="image-tooltip">
                                                    <img id="views-image" class="zoom-image"
                                                         src="">
                                                </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFilePath','views-image')">
                                                    Browse...
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Logo</div>
                                    <div class="col-xs-10">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <input type="text" name="logo" id="xFilePath1" class="control-input"
                                                       style="width: 100%"
                                                       value="<?php if (!empty($arr_setting->logo)) {
                                                           echo $arr_setting->logo;
                                                       } else {
                                                           echo $this->input->post('logo');
                                                       } ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                                <span class="image-tooltip">
                                                    <img id="views-image1" class="zoom-image"
                                                         src="<?php if (!empty($arr_setting->logo)) {
                                                             echo $arr_setting->logo;
                                                         } else {
                                                             echo $this->input->post('logo');
                                                         } ?>">
                                                </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFilePath1','views-image1')">
                                                    Browse...
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Banner</div>
                                    <div class="col-xs-10">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <input type="text" name="banner" id="xFilePath3"
                                                       class="control-input"
                                                       style="width: 100%"
                                                       value="<?php if (!empty($arr_setting->banner)) {
                                                           echo $arr_setting->banner;
                                                       } else {
                                                           echo $this->input->post('banner');
                                                       } ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                                <span class="image-tooltip">
                                                    <img id="views-image3" class="zoom-image"
                                                         src="<?php if (!empty($arr_setting->banner)) {
                                                             echo $arr_setting->banner;
                                                         } else {
                                                             echo $this->input->post('banner');
                                                         } ?>">
                                                </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFilePath3','views-image3')">
                                                    Browse...
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Điện thoại</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="phone" class="control-input" value="<?php if (!empty($arr_setting->phone)) {echo $arr_setting->phone;} else {echo $this->input->post('phone');} ?>"/>
                                    </div>
                                </div>
                                <div class="row row-input">
                                    <div class="col-xs-2">Sologan</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="slogan" class="control-input" value="<?php if (!empty($arr_setting->slogan)) {echo $arr_setting->slogan;} else {echo $this->input->post('slogan');} ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Copyright</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="copy_right" class="control-input"
                                               value="<?php if (!empty($arr_setting->copy_right)) {
                                                   echo $arr_setting->copy_right;
                                               } else {
                                                   echo $this->input->post('copy_right');
                                               } ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                            <!-- end togger content-->
                        </div>
                        <!-- end togger-->

                        <div class="toggle-group">
                            <p class="toggle-title <?php if ($setup != 'social') {
                                echo 'toggle-title-up';
                            } ?>">Mạng xã hội</p>
                            <div class="toggle-content" <?php if ($setup == 'social') {
                                echo 'style="display:block"';
                            } ?>>
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Facebook</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="facebook" class="control-input"
                                               value="<?php if (!empty($arr_setting->facebook)) {
                                                   echo $arr_setting->facebook;
                                               } else {
                                                   echo $this->input->post('facebook');
                                               } ?>"/>
                                    </div>
                                </div>
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Google Plus</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="google_plus" class="control-input"
                                               value="<?php if (!empty($arr_setting->google_plus)) {
                                                   echo $arr_setting->google_plus;
                                               } else {
                                                   echo $this->input->post('google_plus');
                                               } ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Youtube</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="youtube" class="control-input"
                                               value="<?php if (!empty($arr_setting->youtube)) {
                                                   echo $arr_setting->youtube;
                                               } else {
                                                   echo $this->input->post('youtube');
                                               } ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Twitter</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="twitter" class="control-input"
                                               value="<?php if (!empty($arr_setting->twitter)) {
                                                   echo $arr_setting->twitter;
                                               } else {
                                                   echo $this->input->post('twitter');
                                               } ?>"/>
                                    </div>
                                </div>
                                <!-- end row-->
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-2">Link Instagram</div>
                                    <div class="col-xs-8">
                                        <input type="text" name="intagarm" class="control-input"
                                               value="<?php if (!empty($arr_setting->intagarm)) {
                                                   echo $arr_setting->intagarm;
                                               } else {
                                                   echo $this->input->post('intagarm');
                                               } ?>"/>
                                    </div>
                                </div>
                            </div>
                            <!-- end togger content--->
                        </div>
                        <!-- end togger-->
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title <?php if ($setup != 'address') {
                                echo 'toggle-title-up';
                            } ?>">Nội dung cuối trang</p>

                            <div class="toggle-content" <?php if ($setup == 'footer') {
                                echo 'style="display:block"';
                            } ?>>
                                <div class="row row-input">
                                    <div class="col-xs-11">
                                <textarea name="footer" class="control-input check-editor" id="full-1"
                                          style="height: auto"
                                          rows="5"><?php if (!empty($arr_setting->footer)) {
                                        echo $arr_setting->footer;
                                    } else {
                                        echo $this->input->post('footer');
                                    } ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                        <!-- end -->
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){?>
                                <?php $footer='footer'.$lang->value;?>
                                <div class="toggle-group">
                                    <p class="toggle-title toggle-title-up">Nội dung cuối trang <?php echo $lang->title;?></p>
                                    <div class="toggle-content">
                                        <div class="row row-input">
                                            <div class="col-xs-12">
                                                <textarea name="footer<?php echo $lang->value;?>" class="control-input check-editor" id="full-1<?php echo $lang->value;?>"
                                          style="height: auto"
                                          rows="5"><?php if (!empty($arr_setting->$footer)) {
                                        echo $arr_setting->$footer;
                                    } else {
                                        echo $this->input->post($footer);
                                    } ?></textarea>
                                            </div>
                                        </div>
                                        <!-- end row-->
                                    </div>
                                </div>
                                <!-- end -->
                            <?php }?>
                        <?php }?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Nội dung liên hệ</p>

                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-11">
                                <textarea name="address_contact" class="control-input check-editor" id="full-contact"
                                          style="height: auto"
                                          rows="5"><?php if (!empty($arr_setting->address_contact)) {
                                        echo $arr_setting->address_contact;
                                    } else {
                                        echo $this->input->post('address_contact');
                                    } ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){?>
                                <?php $footer='address_contact'.$lang->value;?>
                                <div class="toggle-group">
                                    <p class="toggle-title toggle-title-up">Nội dung liên hệ <?php echo $lang->title;?></p>
                                    <div class="toggle-content">
                                        <div class="row row-input">
                                            <div class="col-xs-12">
                                                <textarea name="address_contact<?php echo $lang->value;?>" class="control-input check-editor" id="full-contact<?php echo $lang->value;?>"
                                                          style="height: auto"
                                                          rows="5"><?php if (!empty($arr_setting->$footer)) {
                                                        echo $arr_setting->$footer;
                                                    } else {
                                                        echo $this->input->post($footer);
                                                    } ?></textarea>
                                            </div>
                                        </div>
                                        <!-- end row-->
                                    </div>
                                </div>
                                <!-- end -->
                            <?php }?>
                        <?php }?>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Bản đồ</p>

                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">
                                <textarea type="text" name="google_map" rows="3"
                                          class="control-input input-title check-editor" id="google_map"
                                          style="height: auto"><?php if (!empty($arr_setting->google_map)) {
                                        echo $arr_setting->google_map;
                                    } else {
                                        echo $this->input->post('google_map');
                                    } ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Thông tin thanh toán</p>
                            <div class="toggle-content">
                                <p>%code% : Mã hóa đơn</p>
                                <div class="row row-input">
                                    <div class="col-xs-11">
                                <textarea name="note" class="control-input check-editor" id="full-note"
                                          style="height: auto"
                                          rows="5"><?php if (!empty($arr_setting->note)) {
                                        echo $arr_setting->note;
                                    } else {
                                        echo $this->input->post('note');
                                    } ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){?>
                                <?php $note='note'.$lang->value;?>
                                <div class="toggle-group">
                                    <p class="toggle-title toggle-title-up">Thông tin thanh toán <?php echo $lang->title;?></p>
                                    <div class="toggle-content">
                                        <p>%code% : Mã hóa đơn</p>
                                        <div class="row row-input">
                                            <div class="col-xs-12">
                                                <textarea name="note<?php echo $lang->value;?>" class="control-input check-editor" id="full-note<?php echo $lang->value;?>"
                                                          style="height: auto"
                                                          rows="5"><?php if (!empty($arr_setting->$note)) {
                                                        echo $arr_setting->$note;
                                                    } else {
                                                        echo $this->input->post($note);
                                                    } ?></textarea>
                                            </div>
                                        </div>
                                        <!-- end row-->
                                    </div>
                                </div>
                                <!-- end -->
                            <?php }?>
                        <?php }?>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Template mail khách hàng nhận</p>

                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-11">
                                        <p>%code%  : Mã đơn hàng</p>
                                        <p>%name%  : Tên người đặt hàng</p>
                                        <p>%email%  : Email người đặt hàng</p>
                                        <p>%phone%  : Điện thoại người đặt hàng</p>
                                        <p>%address%  : Địa chỉ người đặt hàng</p>
                                        <p>%content%  : Nội dung khách hàng gửi</p>

                                        <textarea name="email_sent" class="control-input check-editor" id="full-email_sent "
                                                  style="height: auto"
                                                  rows="5"><?php if (!empty($arr_setting->email_sent )) {
                                                echo $arr_setting->email_sent ;
                                            } else {
                                                echo $this->input->post('email_sent ');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->

                            </div>
                        </div>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Template mail admin nhận</p>

                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-11">
                                        <p>%code%  : Mã đơn hàng</p>
                                        <p>%name%  : Tên người đặt hàng</p>
                                        <p>%email%  : Email người đặt hàng</p>
                                        <p>%phone%  : Điện thoại người đặt hàng</p>
                                        <p>%address%  : Địa chỉ người đặt hàng</p>
                                        <p>%content%  : Nội dung khách hàng gửi</p>
                                        <textarea name="email_from" class="control-input check-editor" id="full-email_from "
                                                  style="height: auto"
                                                  rows="5"><?php if (!empty($arr_setting->email_from )) {
                                                echo $arr_setting->email_from ;
                                            } else {
                                                echo $this->input->post('email_from ');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                        <!-- end -->
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Cấu hình SEO</p>
                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">Tiêu đề website</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="title" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->title)) {
                                                echo $arr_setting->title;
                                            } else {
                                                echo $this->input->post('title');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <?php if(!empty($language)){?>
                                    <?php foreach($language as $lang){
                                        $ti = 'title'.$lang->value;
                                        ?>
                                        <div class="row row-input">
                                            <div class="col-xs-12">Tiêu đề website <?php echo $lang->title;?></div>
                                            <div class="col-xs-12">
                                                <textarea type="text" name="title<?php echo $lang->value;?>" rows="3"
                                                          class="control-input input-title"
                                                          style="height: auto"><?php if (!empty($arr_setting->$ti)) {
                                                        echo $arr_setting->$ti;
                                                    } else {
                                                        echo $this->input->post($ti);
                                                    } ?></textarea>
                                            </div>
                                        </div>
                                    <?php }?>
                                <?php }?>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-12">Mô tả website (<span class="count-title">0</span>)</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="meta_des" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->meta_des)) {
                                                echo $arr_setting->meta_des;
                                            } else {
                                                echo $this->input->post('meta_des');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <?php if(!empty($language)){?>
                                    <?php foreach($language as $lang){
                                        $ti = 'meta_des'.$lang->value;
                                        ?>
                                        <div class="row row-input">
                                            <div class="col-xs-12">Mô tả website <?php echo $lang->title;?></div>
                                            <div class="col-xs-12">
                                                <textarea type="text" name="meta_des<?php echo $lang->value;?>" rows="3"
                                                          class="control-input input-title"
                                                          style="height: auto"><?php if (!empty($arr_setting->$ti)) {
                                                        echo $arr_setting->$ti;
                                                    } else {
                                                        echo $this->input->post($ti);
                                                    } ?></textarea>
                                            </div>
                                        </div>
                                    <?php }?>
                                <?php }?>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-12">Từ khoá website </div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="meta_key" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->meta_key)) {
                                                echo $arr_setting->meta_key;
                                            } else {
                                                echo $this->input->post('meta_key');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <?php if(!empty($language)){?>
                                    <?php foreach($language as $lang){
                                        $ti = 'meta_key'.$lang->value;
                                        ?>
                                        <div class="row row-input">
                                            <div class="col-xs-12">Từ khóa website <?php echo $lang->title;?></div>
                                            <div class="col-xs-12">
                                                <textarea type="text" name="meta_key<?php echo $lang->value;?>" rows="3"
                                                          class="control-input input-title"
                                                          style="height: auto"><?php if (!empty($arr_setting->$ti)) {
                                                        echo $arr_setting->$ti;
                                                    } else {
                                                        echo $this->input->post($ti);
                                                    } ?></textarea>
                                            </div>
                                        </div>
                                    <?php }?>
                                <?php }?>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-12">Địa chỉ đầu trang </div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="customer" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->customer)) {
                                                echo $arr_setting->customer;
                                            } else {
                                                echo $this->input->post('customer');
                                            } ?></textarea>
                                    </div>
                                </div>
                                <?php if(!empty($language)){?>
                                    <?php foreach($language as $lang){
                                        $ti = 'customer'.$lang->value;
                                        ?>
                                        <div class="row row-input">
                                            <div class="col-xs-12">Địa chỉ đầu trang  <?php echo $lang->title;?></div>
                                            <div class="col-xs-12">
                                                <textarea type="text" name="customer<?php echo $lang->value;?>" rows="3"
                                                          class="control-input input-title"
                                                          style="height: auto"><?php if (!empty($arr_setting->$ti)) {
                                                        echo $arr_setting->$ti;
                                                    } else {
                                                        echo $this->input->post($ti);
                                                    } ?></textarea>
                                            </div>
                                        </div>
                                    <?php }?>
                                <?php }?>
                                <!-- end row-->
                                <div class="row row-input">
                                    <div class="col-xs-12">Google Analytic</div>
                                    <div class="col-xs-12">
                                        <textarea type="text" name="analytics" rows="3"
                                                  class="control-input input-title"
                                                  style="height: auto"><?php if (!empty($arr_setting->analytics)) {
                                                echo $arr_setting->analytics;
                                            } else {
                                                echo $this->input->post('analytics');
                                            } ?></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                </div>
                <!-- end tab content-->
            </div>
            <!-- end col content-->
            <div class="col-xs-10 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="" class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
