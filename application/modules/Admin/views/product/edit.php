<?php if(isset($_GET['page'])){
    $page = '&page='.$_GET['page'];
}else{
    $page ='';
}
?>
<?php if (validation_errors()) { ?>
    <script>
        $(document).ready(function(){
            notice_js("Vui lòng nhập đủ tiêu đề và thêm danh mục",'danger');
        })
    </script>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>admin-direct/edit?table=product&id=<?php echo $item_post->id.$page; ?>">
    <input type="hidden" value="<?php if(!empty($url_referer)) echo $url_referer;?>" name="url_referer"/>
    <div class="menu-filter filter-add">
        <ul>
            <li><a href="" class="active">Chỉnh sửa bản ghi</a></li>
        </ul>
        <div class="btn-top-add">
            <button class="btn btn-add btn-update" data-id="<?php echo $item_post->id;?>" type="button">Tái xuất bản</button>
            <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
            <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; }?>" class="btn btn-default btn-delete">Hủy</a>
        </div>
    </div>
    <div class="content-add-item">
        <div class="row">
            <div class="col-xs-12 col-information">
                <div class="group-category panel-category">
                    <?php if (!empty($cate)) {echo $cate;}?>
                </div>
                <div class="added_category">
                    <?php if(!empty($post_array)){?>
                        <?php $i=0; foreach($post_array as $pa){?>
                            <input id="input_id_element_added_<?php echo $i;?>" type="hidden" value="<?php echo $pa->id;?>" name="id_cate[]"/>
                            <span id="element_added_<?php echo $i;?>" class="element_added element_id_<?php echo $pa->id;?>" ><?php echo $pa->title;;?></span>
                            <?php $i++; }?>
                    <?php }?>
                </div>
                <div class="btn-add-category">
                    <a class="option-add custom-btn-add" href="javascript:void(0);"><i class="fa fa-plus-circle"></i><span>Thêm danh mục</span></a>
                </div>
                <!-- end group-->
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề(<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input id="title-name" data-id="alias-title" type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title; ?>"/>
                    </div>
                    <div class="col-xs-2"><a target="_blank" href="<?php echo links($item_post->id,'art');?>"> <span class="glyphicon glyphicon-eye-open"></span> Xem thử sản phẩm</a></div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $tit='title'.$lang->value;?>
                        <div class="row row-input">
                            <div class="col-xs-2">Tiêu đề <?php echo $lang->title;?> (<span class="count-title">0</span>)</div>
                            <div class="col-xs-8">
                                <input data-id="alias_title<?php echo $lang->value;?>" id="title_name<?php echo $lang->value;?>" type="text" name="title<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $item_post->$tit; ?>"/>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <div class="row row-input">
                    <div class="col-xs-2">Link trên website</div>
                    <div class="col-xs-10">
                        <span class="sp_link_base">
                            <span class="text_base"><?php echo base_url();?></span>
                            <span class="text_alias">
                                <input id="alias-title" type="text" name="alias" class="control-input input-title"
                                       value="<?php echo $item_post->alias; ?>"/>
                            </span>
                        </span>
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $ali='alias'.$lang->value;?>
                        <div class="row row-input">
                            <div class="col-xs-2">Link trên website <?php echo $lang->title;?></div>
                            <div class="col-xs-10">
                        <span class="sp_link_base">
                            <span class="text_base"><?php echo base_url();?></span>
                            <span class="text_alias">
                                <input id="alias_title<?php echo $lang->value;?>" type="text" name="alias<?php echo $lang->value;?>" class="control-input input-title"
                                       value="<?php echo $item_post->$ali; ?>"/>
                            </span>
                        </span>
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end -->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-8">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image"
                                         src="<?php echo $item_post->image; ?>">
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
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Tags</div>
                    <div class="col-xs-8">
                        <input type="text" name="tags" class="control-input" style="width: 200px"
                               value="<?php echo $item_post->tags; ?>" data-role="tagsinput" />
                    </div>
                </div>
                <!-- end row-->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thư viện ảnh</p>
                    <div class="toggle-content">
                        <div class="toggle-gallery">
                            <button type="button" class="btn-browse" onclick="openPopup3('xFilePath','views-image')">
                                Browse...
                            </button>
                            <?php if (!empty($item_post->img)) {
                                $gallery = json_decode($item_post->img);
                                if (!empty($gallery)) {
                                    $max = 1;
                                    foreach ($gallery as $gla) {
                                        ?>
                                        <div class="row row-gallery" data-id="<?php echo $max; ?>">
                                            <div class="col-xs-8">
                                                <input type="text" name="img[]" id="xFileGallery<?php echo $max; ?>"
                                                       class="control-input" style="width: 100%"
                                                       value="<?php echo $gla; ?>"/>
                                            </div>
                                            <div class="col-xs-1 box-tooltip-img">
                                            <span class="image-tooltip">
                                    <img id="views-gallery<?php echo $max; ?>" class="zoom-image"
                                         src="<?php echo $gla; ?>">
                                    </span>
                                            </div>
                                            <div class="col-xs-3">
                                                <button type="button" class="btn-browse"
                                                        onclick="openPopup('xFileGallery<?php echo $max; ?>','views-gallery<?php echo $max; ?>')">
                                                    Browse...
                                                </button>
                                                <span class="remove-gallery glyphicon glyphicon-remove"></span>
                                            </div>
                                        </div>
                                        <?php $max++;
                                    }
                                }
                            } ?>
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

                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thông tin kỹ thuật</p>
                    <div class="toggle-content">
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Giá bán</div>
                            <div class="col-xs-8">
                                <input type="number" name="price" class="control-input input-title"
                                       value="<?php echo $item_post->price; ?>"/>
                            </div>
                        </div>
                        <div class="row row-input">
                            <div class="title-field col-xs-2">Giá cũ</div>
                            <div class="col-xs-8">
                                <input type="number" name="price_old" class="control-input input-title"
                                       value="<?php echo $item_post->price_old; ?>"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Mô tả</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="introtext" class="control-input check-editor" id="full-excerpt22"
                                          style="height: auto"
                                          rows="5"><?php if(!empty($item_post->introtext)){echo $item_post->introtext; }else{
                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->
                <?php if (!empty($language)) { $intro='introtext'.$lang->value; ?>
                    <?php foreach ($language as $lang) { ?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Mô tả <?php echo $lang->title; ?></p>
                            <div class="toggle-content">
                                <div class="row row-input row-ck">
                                    <div class="col-xs-12">
                                <textarea name="introtext<?php echo $lang->value; ?>" class="control-input check-editor"
                                          id="introtext<?php echo $lang->value; ?>"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->$intro; ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                    <?php } ?>
                <?php } ?>
                <!-- end -->
                <div class="toggle-group">
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Thông tin chi tiết</p>
                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-12">
                                <textarea name="content_text" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="5"><?php if(!empty($item_post->content_text)) {echo $item_post->content_text;  }else{

                                    }?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $full='content_text'.$lang->value;?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Thông tin chi tiết <?php echo $lang->title;?></p>

                            <div class="toggle-content">
                                <div class="row row-input">
                                    <div class="col-xs-12">
                                <textarea name="content_text<?php echo $lang->value;?>" class="control-input check-editor" id="full-2<?php echo $lang->value;?>"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->$full; ?></textarea>
                                    </div>
                                </div>
                                <!-- end row-->
                            </div>
                        </div>
                    <?php }?>
                <?php }?>
                <!-- end -->
                <div class="toggle-group">
                    <p class="toggle-title toggle-title-up">Seo</p>
                    <div class="toggle-content">
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Title</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_title" class="control-input input-title"
                                       value="<?php echo $item_post->meta_title; ?>"/>
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){
                                $ti = 'meta_title'.$lang->value;
                                ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Title <?php echo $lang->title;?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_title<?php echo $lang->value;?>" class="control-input input-title"
                                               value="<?php echo $item_post->$ti; ?>"/>
                                    </div>
                                </div>
                            <?php }?>
                        <?php }?>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Description</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_des" class="control-input input-title"
                                       value="<?php echo $item_post->meta_des; ?>"/>
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){
                                $ti = 'meta_des'.$lang->value;
                                ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Description <?php echo $lang->title;?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_des<?php echo $lang->value;?>" class="control-input input-title"
                                               value="<?php echo $item_post->$ti; ?>"/>
                                    </div>
                                </div>
                            <?php }?>
                        <?php }?>
                        <!-- end row-->
                        <div class="row row-input">
                            <div class="col-xs-12">Meta Keywords</div>
                            <div class="col-xs-12">
                                <input type="text" name="meta_key" class="control-input input-title"
                                       value="<?php echo $item_post->meta_key; ?>"/>
                            </div>
                        </div>
                        <?php if(!empty($language)){?>
                            <?php foreach($language as $lang){
                                $ti = 'meta_key'.$lang->value;
                                ?>
                                <div class="row row-input">
                                    <div class="col-xs-12">Meta Keywords <?php echo $lang->title;?></div>
                                    <div class="col-xs-12">
                                        <input type="text" name="meta_key<?php echo $lang->value;?>" class="control-input input-title"
                                               value="<?php echo $item_post->$ti; ?>"/>
                                    </div>
                                </div>
                            <?php }?>
                        <?php }?>
                        <!-- end row-->
                    </div>
                </div>
                <!-- end -->
                <div class="row row-input row-margin">
                    <div  class="col-option">
                        <div class="option-inner">
                            Nổi bật
                            <div class="item-on-off">
                                <input type="hidden" name="stick" value="0"/>
                                <input type="checkbox" name="stick" value="1" <?php if ($item_post->stick == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <div  class="col-option">
                        <div class="option-inner">
                            Hiện ngoài trang chủ
                            <div class="item-on-off">
                                <input type="hidden" name="show_home" value="0"/>
                                <input type="checkbox" name="show_home" value="1" <?php if ($item_post->show_home == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                    <div class="col-option">
                        <div class="option-inner">
                            Hiện cột trái
                            <div class="item-on-off">
                                <input type="hidden" name="show_left" value="0"/>
                                <input type="checkbox" name="show_left"
                                       value="1" <?php if ($item_post->show_left == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                    <div class="col-option">
                        <div class="option-inner">
                            Xuất bản ngay
                            <div class="item-on-off">
                                <input type="hidden" name="show" value="0"/>
                                <input type="checkbox" name="show" value="1" <?php if ($item_post->show == '1') {
                                    echo 'checked';
                                } ?>><label><span></span></label>
                            </div>
                        </div>
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->
            </div>
            <!-- end col information-->
            <div class="col-xs-12 col-options col-action-bottom text-right">
                <button class="btn btn-add btn-update" type="button">Tái xuất bản</button>
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Hủy</a>
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