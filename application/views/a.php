<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php
        echo validation_errors();
        ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>admin-direct/add?table=product">
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Thông tin cơ bản</a></li>
        </ul>
    </div>
    <div class="content-add-item">
        <p class="add-title-top">Tạo mới sản phẩm</p>
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="row">
                    <div class="col-xs-8">
                        <div class="add-language"><span style="display: inline-block">Ngôn ngữ</span>
                            <div class="select-box" style="display: inline-block; min-width: 100px">
                                <label>
                                    <select name="language" id="check-language">
                                        <option value="vi" <?php if ($this->session->userdata('language') == 'vi') {
                                            echo 'selected="selected"';
                                        } ?>>Việt Nam
                                        </option>
                                        <option value="en" <?php if ($this->session->userdata('language') == 'en') {
                                            echo 'selected="selected"';
                                        } ?>>English
                                        </option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <!-- end -->
                    </div>
                    <div class="col-xs-4 col-options text-right">
                        <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                        <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                            echo $_SERVER['HTTP_REFERER'];
                        } ?>" class="btn btn-default btn-delete">Hủy</a>
                    </div>
                    <!-- end col option-->
                </div>
                <!-- end -->
                <div class="group-category panel-category">
                    <?php if (!empty($cate)) {
                        $i = 1; ?>
                        <div class="item-group-category">
                            <label>Cấp 1</label>
                            <select name="category[]" class="select-group cate-group" multiple="multiple"
                                    data-level="1">
                                <?php foreach ($cate as $obj) { ?>
                                    <option value="<?php echo $obj->id; ?>"><?php echo $obj->title; ?></option>
                                    <?php $i++;
                                } ?>
                            </select>
                        </div>
                    <?php } ?>
                </div>
                <!-- end group-->
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề(<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input id="title-name" type="text" name="title" class="control-input input-title"
                               value="<?php echo $this->input->post('title'); ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('image'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $this->input->post('image'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePath','views-image')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">File download Catalogue thiết bị</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="download" id="xFilePathdl" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('download'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imagedl" class="zoom-image"
                                         src="<?php echo $this->input->post('download'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathdl','views-imagedl')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-input">
                    <div class="col-xs-2">File download Tài liệu kỹ thuật</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="download2" id="xFilePathdl2" class="control-input" style="width: 100%"
                                       value="<?php echo $this->input->post('download2'); ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imagedl2" class="zoom-image"
                                         src="<?php echo $this->input->post('download2'); ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathdl2','views-imagedl2')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thư viện ảnh</p>
                    <div class="toggle-content">
                        <div class="toggle-gallery">

                        </div>
                        <p>
                            <button class="add-gallery" type="button">Thêm hình ảnh</button>
                        </p>
                    </div>
                    <script>
                        $(document).ready(function () {
                            $('.add-gallery').on('click', function () {

                                var max = 1;
                                if ($('.row-gallery').length > 0) {
                                    var num = $('.row-gallery:last-child').attr('data-id');
                                    max = parseInt(num) + 1;
                                }
                                var html = '<div class="row row-gallery" data-id="' + max + '">' +
                                    '<div class="col-xs-8">' +
                                    '<input type="text" name="img[]" id="xFileGallery' + max + '" class="control-input" style="width: 100%"' +
                                    'value=""/>' +
                                    '</div>' +
                                    '<div class="col-xs-1 box-tooltip-img">' +
                                    '<span class="image-tooltip">' +
                                    '<img id="views-gallery' + max + '" class="zoom-image"' +
                                    'src="">' +
                                    '</span>' +
                                    '</div>' +
                                    '<div class="col-xs-3">' +
                                    '<button type="button" class="btn-browse" onclick="openPopup(\'xFileGallery' + max + '\',\'views-gallery' + max + '\')">' +
                                    'Browse...' +
                                    '</button>' +
                                    '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                                    '</div>' +
                                    '</div>';
                                $('.toggle-gallery').append(html);
                            });
                        });
                        $(document).on('click', '.remove-gallery', function () {
                            $(this).parents('.row-gallery').remove();
                        })
                    </script>
                    <style>
                        .row-gallery {
                            margin-bottom: 10px;
                        }

                        .row-gallery .btn-browse {
                            padding: 3px 10px;
                        }

                        .remove-gallery {
                            background: #ff2222;
                            color: #fff;
                            padding: 5px 10px;
                            margin-left: 10px;
                            font-size: 14px;
                            cursor: pointer;
                        }
                    </style>
                </div>

                <!-- end row-->
                <div  class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thông tin khác</p>
                    <div class="toggle-content">
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Mã sản phẩm</div>
                            <div class="col-xs-8">
                                <input id="title-name" type="text" name="sku" class="control-input input-title"
                                       value="<?php echo $this->input->post('sku'); ?>"/>
                            </div>
                        </div>
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Thông số kỹ thuật</div>
                            <div class="col-xs-8">
                                <input id="title-name" type="text" name="note_3" class="control-input input-title"
                                       value="<?php echo $this->input->post('note_3'); ?>"/>
                            </div>
                        </div>
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Nước sản xuất</div>
                            <div class="col-xs-8">
                                <input id="title-name" type="text" name="country" class="control-input input-title"
                                       value="<?php echo $this->input->post('country'); ?>"/>
                            </div>
                        </div>
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Năm</div>
                            <div class="col-xs-8">
                                <input id="title-name" type="text" name="year" class="control-input input-title"
                                       value="<?php echo $this->input->post('year'); ?>"/>
                            </div>
                        </div>
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Còn hàng</div>
                            <div class="col-xs-8">
                                <div class="col-option">
                                    <div class="item-on-off user-on-off">
                                        <input type="hidden" name="status" value="0" />
                                        <input type="checkbox" name="status"
                                               value="1" checked><label><span></span></label>
                                    </div>
                                </div>
                                <!-- end col-->
                            </div>
                        </div>
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Hiện ngoài trang chủ</div>
                            <div class="col-xs-8">
                                <div class="col-option">
                                    <div class="item-on-off user-on-off">
                                        <input type="hidden" name="show_home" value="0" checked />
                                        <input type="checkbox" name="show_home"
                                               value="1" ><label><span></span></label>
                                    </div>
                                </div>
                                <!-- end col-->
                            </div>
                        </div>

                    </div>
                </div>
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Mô tả ngắn</p>

                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="excerpt_2" class="control-input check-editor" id="full-excerpt22"
                                          style="height: auto"
                                          rows="5"><?php if($this->input->post('excerpt_2')!=''){echo $this->input->post('excerpt_2'); }else{

                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <div style="display:none;" class="toggle-group">
                    <p class="toggle-title toggle-title-up">Giới thiệu sản phẩm</p>

                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="excerpt" class="control-input check-editor" id="full-excerpt"
                                          style="height: auto"
                                          rows="5"><?php if($this->input->post('excerpt')!=''){echo $this->input->post('excerpt'); }else{

                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thông tin chi tiết</p>

                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="fulltext" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="5"><?php if($this->input->post('fulltext')!=''){echo $this->input->post('fulltext'); }else{

                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <div style="display:none;" class="toggle-group">
                    <p class="toggle-title toggle-title-up">Nguyên lý hoạt động</p>

                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="introtext" class="control-input"
                                          style="height: auto"
                                          rows="5"><?php if($this->input->post('introtext')!=''){echo $this->input->post('introtext'); }else{

                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <div style="display:none;" class="toggle-group">
                    <p class="toggle-title toggle-title-up">Tài liệu</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <div class="box-add-content">
                                </div>
                                <button type="button" data-id="2" style="margin-top:10px" class="btn add-tab btn-success"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>&nbsp;&nbsp;Thêm tài liệu</button>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Seo</p>
                    <div class="toggle-content">
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Alias (<span class="count-title">0</span>)</div>
                            <div class="col-xs-12">
                                <input id="alias-title" type="text" name="meta_alias" class="control-input input-title"
                                       value="<?php echo $this->input->post('meta_alias'); ?>"/>
                            </div>
                        </div>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Title (<span class="count-title">0</span>)</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_title" class="control-input input-title"
                                       value="<?php echo $this->input->post('meta_title'); ?>"/>
                            </div>
                        </div>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Description (<span class="count-title">0</span>)</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_des" class="control-input input-title"
                                       value="<?php echo $this->input->post('met_des'); ?>"/>
                            </div>
                        </div>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Keywwords (<span class="count-title">0</span>)</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_key" class="control-input input-title"
                                       value="<?php echo $this->input->post('met_key'); ?>"/>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->
                <div style="display:none" class="row row-input row-margin">
                    <div class="col-option">
                        <div class="option-inner">
                            Nổi bật
                            <div class="item-on-off">
                                <input type="hidden" name="stick" value="0"/>
                                <input type="checkbox" name="stick"
                                       value="1" <?php if ($this->input->post('stick') == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                    <div style="display:none" class="col-option">
                        <div class="option-inner">
                            Hiện cột trái
                            <div class="item-on-off">
                                <input type="hidden" name="show_left" value="0"/>
                                <input type="checkbox" name="show_left"
                                       value="1" <?php if ($this->input->post('show_left') == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>

                    <div class="col-option">
                        <div class="option-inner">
                            Xuất bản ngay
                            <div class="item-on-off">
                                <input type="hidden" name="show" value="0"/>
                                <input type="checkbox" name="show" value="1" checked><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->
            </div>
            <!-- end col information-->
            <div class="col-xs-10 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Tạo mới</button>
                <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                    echo $_SERVER['HTTP_REFERER'];
                } ?> " class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
<script type="text/javascript">
    $(document).ready(function () {
        $('.add-tab').click(function () {
            var idtab=parseInt($(this).attr('data-id'))+1;
            $(this).attr('data-id',idtab);
            var htmltext = '<div class="row row_delte'+idtab+' row-gallery" data-id="' + idtab + '">' +
                '<p><button type="button" onclick="deleteel1(' + idtab + ')" data-in="' + idtab + '"  class="delete btn btn-danger"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> &nbsp;&nbsp;Xóa</button></p>'+
                '<input placeholder="Tiêu đề" type="text" style="margin:10px 0px;height:30px;padding-left:10px;" class="control-input input-title iput_add_title" name="link_file[title][]" />'+
                '<div class="col-xs-9">' +
                '<input type="text" name="link_file[file][]" id="xFileGallery' + idtab + '" class="control-input" style="width: 100%"' +
                'value=""/>' +
                '</div>' +
                '<div class="col-xs-3">' +
                '<button type="button" class="btn-browse" onclick="openPopup2(\'xFileGallery' + idtab + '\')">' +
                'Browse...' +
                '</button>' +
                '<span class="remove-gallery glyphicon glyphicon-remove" ></span>' +
                '</div>' +
                '</div>';
            $('.box-add-content').append(htmltext);
            reloadck(idtab);
        });
    });
    function deleteel1(iddelete) {
        var confirmdel = confirm('Bạn muốn xóa tab');
        if (confirmdel == true) {
            $('.row_delte' + iddelete).remove();
            var active = parseInt(iddelete) - 1;
            $('.elemet_tabs').removeClass('active');
        }
    }
    function addtab() {
        $('.elemet_tabs').on('click', function () {
            var id = $(this).attr('id');
            $('.elemet_tabs').removeClass('active');
            $(this).addClass('active');
            $('.body_tab').removeClass('active_on');
            $('#body_tabss_' + id).addClass('active_on');

        })
    }
</script>
<style>
    .add-tab{
        display:block;
        color:#fff;
        font-weight:bold;
    }
    .iput_add_title{
        margin-left:15px!important;
        width:50%!important;
    }
    .delete{
        display:block;
        cursor: pointer;
        margin-left:15px;
    }
</style>