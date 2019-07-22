<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>admin-direct/add?table=ads">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Tạo mới quảng cáo</p>
        <!-- end row-->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề<span class="user-error">*</span></div>
                    <div class="col-xs-8">
                        <input type="text" name="title" class="control-input input-title"
                               value="<?php echo $this->input->post('title'); ?>"/>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tiêu đề <?php echo $lang->title;?> (<span class="count-title">0</span>)</div>
                            <div class="col-xs-8">
                                <input type="text" name="title<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $this->input->post('title'.$lang->value.''); ?>"/>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end row-->
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Đường dẫn ảnh </div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-4">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('image'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $this->input->post('image'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-2">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePath','views-image')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Thứ tự hiển thị</div>
                    <div class="col-xs-10">
                        <div class="row">
                            <div class="col-xs-2">
                                <input type="number" name="order" class="control-input input-user"
                                       value="<?php echo $this->input->post('order'); ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2"><span>Kiểu</span></div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="type">
                                            <option value="0">Hình ảnh</option>
                                            <option value="1">Video</option>
                                            <option value="2">Báo chí</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Mở trang</span>
                    </div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="type_target">
                                            <option value="_blank">Mở trang mới</option>
                                            <option value="_self">Mở trang hiện tại</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Vị trí</span>
                    </div>
                    <div class="col-xs-2">
                        <div class="row">
                            <div class="post-select" style="margin-bottom: 0">
                                <div class="select-box col-xs-12">
                                    <label>
                                        <select name="position">
                                            <option value="left">Extral left</option>
                                            <option value="middle">Extral center</option>
                                            <option value="right">Extral right</option>
                                            <option value="top">Extral top</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">Hyper link</div>
                    <div class="col-xs-10">
                        <input type="text" name="hyperlink" class="control-input input-user"
                               value="<?php echo $this->input->post('hyperlink'); ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Mô tả</div>
                    <div class="col-xs-10">
                        <textarea style="height: 150px" name="excerpt" class="control-input input-user" rows="5"><?php echo $this->input->post('excerpt'); ?></textarea>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Kích hoạt</div>
                    <div class="col-xs-10">
                        <div class="col-option">
                            <div class="item-on-off user-on-off">
                                <input type="hidden" name="show" value="0"/>
                                <input type="checkbox" name="show"
                                       value="1" checked><label><span></span></label>
                            </div>
                        </div>
                        <!-- end col-->
                    </div>
                </div>
                <!-- end row-->
            </div>
            <!-- end tab info-->
            <div class="row text-left">
                <div class="col-xs-2"></div>
                <div class="col-xs-10">
                    <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                    <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; } ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
