<?php
if(isset($_GET['page'])){
    $page = '&page='.$_GET['page'];
}else{
    $page ='';
}
if (validation_errors()) { ?>
    <script>
        $(document).ready(function(){
            notice_js("Vui lòng nhập đủ các thông tin",'danger');
        })
    </script>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>admin-direct/edit?table=categories&id=<?php echo $item_post->id.$page; ?>">
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
                    <div class="item-group-category">
                        <label>Loại</label>

                        <select name="taxonomy" id="type-cate" class="select-group" multiple="multiple"
                                data-level="0" data-post="<?php echo $item_post->id; ?>" data-name="parentid[]">
                            <option value="cate_article" <?php if ($item_post->taxonomy == 'cate_article') {
                                echo 'selected="selected"';
                            } ?>>Bài viết
                            </option>
                            <option value="cate_product" <?php if ($item_post->taxonomy == 'cate_product') {
                                echo 'selected="selected"';
                            } ?>>Sản phẩm
                            </option>
                        </select>
                    </div>
                    <?php
                    if (!empty($cate)) {
                        echo $cate;
                    }
                    ?>

                </div>
                <!-- end group-->
                <div class="group-category edit-group-category">
                    <div class="row row-input">
                        <div class="col-xs-12">

                            <div class="row-checkbox">
                                <div class="col-xs-4 item-checkbox check-group ">
                                    <label class="title-checkbox" for="menu-primary">Menu chính</label>
                                    <input type="hidden" name="main_menu" value="0"/>
                                    <input type="checkbox" name="main_menu" value="1"
                                           id="menu-primary" <?php if ($item_post->main_menu == '1') {
                                        echo 'checked';
                                    } ?>><label
                                        class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_main" class="control-input"
                                           value="<?php echo $item_post->order_main; ?>"/>
                                </div>
                            </div>
                            <div class="row-checkbox">
                                <div class="col-xs-4 item-checkbox check-group ">
                                    <label class="title-checkbox" for="menu-primary">Cột trái</label>
                                    <input type="hidden" name="show_left" value="0"/>
                                    <input type="checkbox" name="show_left" value="1"
                                           id="menu-top_menu" <?php if ($item_post->show_left == '1') {
                                        echo 'checked';
                                    } ?>><label
                                            class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_left" class="control-input"
                                           value="<?php echo $item_post->order_left; ?>"/>
                                </div>
                            </div>
                            <div class="row-checkbox">
                                <div class="col-xs-3 item-checkbox check-group ">
                                    <label class="title-checkbox" for="home-primary">Trang chủ</label>
                                    <input type="hidden" name="show_home" value="0"/>
                                    <input type="checkbox" name="show_home" value="1" <?php if ($item_post->show_home == '1') {
                                        echo 'checked';
                                    } ?>><label
                                        class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_home" class="control-input"
                                           value="<?php echo $item_post->order_home; ?>"/>
                                </div>
                                <div class="col-xs-5">
                                    <label class="title-checkbox">Vị trí</label>
                                    <div class="select-box" style="display: inline-block; min-width: 100px">
                                        <label>
                                            <select name="type_home">
                                                <option value="1" <?php if ($item_post->type_home == 1) {
                                                    echo 'selected="selected"';
                                                } ?>>Danh mục
                                                </option>
                                                <option value="2" <?php if ($item_post->type_home == 2) {
                                                    echo 'selected="selected"';
                                                } ?>>Tin
                                                </option>
                                                <option value="3" <?php if ($item_post->type_home == 3) {
                                                    echo 'selected="selected"';
                                                } ?>>Video
                                                </option>
                                                <option value="4" <?php if ($item_post->type_home == 4) {
                                                    echo 'selected="selected"';
                                                } ?>>Đánh giá
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <!-- end row-->
                            <div class="row-checkbox">
                                <div class="col-xs-4 item-checkbox check-group">
                                    <label class="title-checkbox" for="menu-primary">Menu chân trang</label>
                                    <input type="hidden" name="bottom_menu" value="0"/>
                                    <input type="checkbox" name="bottom_menu" value="1"
                                           id="menu-primary" <?php if ($item_post->bottom_menu == '1') {
                                        echo 'checked';
                                    } ?>><label
                                        class="check-lable"><span></span></label>
                                </div>

                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_bottom" class="control-input"
                                           value="<?php echo $item_post->order_bottom; ?>"/>
                                </div>
                            </div>
                            <!-- end row-->
                            <div class="row-checkbox">
                                <div class="col-xs-4 item-checkbox check-group ">
                                    <label class="title-checkbox" for="menu-primary">Menu slide</label>
                                    <input type="hidden" name="top_menu" value="0"/>
                                    <input type="checkbox" name="top_menu" value="1" <?php if ($item_post->top_menu == '1') {
                                        echo 'checked';
                                    } ?>><label
                                            class="check-lable"><span></span></label>
                                </div>
                                <div class="col-xs-4 box-order">
                                    <label class="title-checkbox">Thứ tự</label>
                                    <input type="number" name="order_top" class="control-input" value="<?php echo $item_post->order_top; ?>"/>
                                </div>
                            </div>
                            <!-- end row-->
                            <div class="row-checkbox edit-width">
                                <div class="col-xs-3">
                                    <div class="row">
                                        <div class="col-xs-5">Thứ tự sắp xếp</div>
                                        <div class="col-xs-2">
                                            <div class="select-box" style="display: inline-block; min-width: 80px">
                                                <input type="number" name="order" class="control-input"
                                                       value="<?php echo $item_post->order; ?>" style="text-align: right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    Kiểu hiển thị danh mục
                                </div>
                                <div class="col-xs-2"><div class="select-box" style="display: inline-block; min-width: 150px">
                                        <label>
                                            <select name="type_categories">
                                                <option value="0" <?php if ($item_post->type_categories == 0) {
                                                    echo 'selected="selected"';
                                                } ?>>KIỂU BÀI VIÊT
                                                </option>
                                                <option value="1" <?php if ($item_post->type_categories == 1) {
                                                    echo 'selected="selected"';
                                                } ?>>KIỂU VIDEO
                                                </option>
                                                <option value="2" <?php if ($item_post->type_categories == 2) {
                                                    echo 'selected="selected"';
                                                } ?>>KIỂU GIỚI THIỆU
                                                </option>
                                                <option value="3" <?php if ($item_post->type_categories == 3) {
                                                    echo 'selected="selected"';
                                                } ?>>KIỂU TIN TỨC
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-xs-5">
                                    <div class="row">
                                        <div class="col-xs-6">Số bài / sản phẩm 1 trang</div>
                                        <div class="col-xs-4">
                                            <div class="select-box" style="display: inline-block; min-width: 80px">
                                                <input type="number" name="number_post" class="control-input"
                                                       value="<?php echo $item_post->number_post; ?>" style="text-align: right"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end group-->
                <div class="row row-input">
                    <div class="col-xs-2">Tiêu đề(<span class="count-title">0</span>)</div>
                    <div class="col-xs-8">
                        <input id="title-name" data-id="alias-title" type="text" name="title" class="control-input input-title"
                               value="<?php echo $item_post->title; ?>"/>
                    </div>
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
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Ảnh đại diện</div>
                    <div class="col-xs-9">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="image" id="xFilePath" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->image; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image" class="zoom-image" src="<?php echo $item_post->image; ?>">
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
                <!-- end -->
                <div class="row row-input">
                    <div class="col-xs-2">Banner</div>
                    <div class="col-xs-9">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="banner" id="xFilePath1" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->banner; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-image1" class="zoom-image" src="<?php echo $item_post->banner; ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePath1','views-image1')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end -->
                <div class="row row-input">
                    <div class="col-xs-2">Icon</div>
                    <div class="col-xs-9">
                        <div class="row">
                            <div class="col-xs-8">
                                <input type="text" name="icon" id="xFilePathicon" class="control-input" style="width: 100%"
                                       value="<?php echo $item_post->icon; ?>"/>
                            </div>
                            <div class="col-xs-1 box-tooltip-img">
                                <span class="image-tooltip">
                                    <img id="views-imageicon" class="zoom-image" src="<?php echo $item_post->icon; ?>">
                                </span>
                            </div>
                            <div class="col-xs-3">
                                <button type="button" class="btn-browse" onclick="openPopup('xFilePathicon','views-imageicon')">
                                    Browse...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end -->
                <div class="row row-input">
                    <div class="col-xs-2"><span>Tên khác</span>
                    </div>
                    <div class="col-xs-8">

                            <input  name="color" type="text" value="<?php echo $item_post->color; ?>"
                                   class="control-input input-title"/>
                    </div>
                </div>
                <!-- end row-->
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
                    <p class="toggle-title toggle-title-up">Nội dung</p>

                    <div class="toggle-content">
                        <div class="row row-input row-ck">
                            <div class="col-xs-11">
                                <textarea name="content_text" class="control-input check-editor" id="full-2"
                                          style="height: auto" rows="5"><?php echo $item_post->content_text; ?></textarea>
                            </div>
                        </div>
                        <!-- end row-->
                    </div>
                </div>
                <?php if(!empty($language)){?>
                    <?php foreach($language as $lang){?>
                        <?php $full='content_text'.$lang->value;?>
                        <div class="toggle-group">
                            <p class="toggle-title toggle-title-up">Nội dung <?php echo $lang->title;?></p>

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
                <div class="row row-input">
                    <div class="col-xs-2">Hyper link</div>
                    <div class="col-xs-10">
                        <input type="text" name="hyperlink" class="control-input input-user"
                               value="<?php echo $item_post->hyperlink ; ?>"/>
                    </div>
                </div>
                <!-- end row-->
                <?php if (!empty($language)) { ?>
                    <?php foreach ($language as $lang) {
                        $ti = 'hyperlink'.$lang->value;
                        ?>
                        <div class="row row-input">
                            <div class="col-xs-2">Hyperlink <?php echo $lang->title; ?></div>
                            <div class="col-xs-10">
                                <input type="text" name="hyperlink<?php echo $lang->value; ?>" class="control-input input-user"
                                       value="<?php echo $item_post->$ti; ?>"/>
                            </div>
                        </div>
                    <?php }}?>
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
                    <div class="row row-input row-margin">
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
                </div>
                <!-- end -->
            </div>
            <!-- end col information-->
            <div class="col-xs-12 col-options col-action-bottom text-right">
                <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                <a href="<?php if (isset($_SERVER['HTTP_REFERER'])) {
                    echo $_SERVER['HTTP_REFERER'];
                } ?> " class="btn btn-default btn-delete">Hủy</a>
            </div>
            <!-- end col option-->
        </div>
    </div>
</form>
