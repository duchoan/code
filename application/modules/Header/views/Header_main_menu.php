<div class="header-bottom hidden-xs" style="float:none;" id="header-bottom">
    <div class="header-bottom-content">
        <div class="container">
            <div class="row">
                <div class="nav wd_mega_menu_wrapper">
                    <div class="main-menu pc-menu wd-mega-menu-wrapper">
                        <ul id="menu-menu-san-pham-1" class="menu">
                            <li class="menu-item-0 menu-item-level-0 menu-dropdown" id="wd-menu-item-dropdown" style="display:none;"><span class="menu-text">Menu</span><span class="menu-icon"></span></li>
                            <?php if(!empty($categories)){?>
                                <?php foreach($categories as $cate){?>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7935 menu-item-level0 first have-child wd-fly-menu">
                                        <a href="">
                                            <span class='menu-label-level-0'><?= $cate->title;?></span>
                                        </a> <span class="menu-drop-icon drop-icon-lv0"></span>
                                        <?php if(!empty($cate_child[$cata->id])){?>
                                            <ul class="sub-menu">
                                                <?php foreach($cate_child[$cate->id] as $cat){?>
                                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7855 menu-item-level1 wd-fly-menu">
                                                        <a href="">
                                                            <span class='menu-label-level-1'><?= $cat->title;?></span>
                                                        </a>
                                                    </li>
                                                <?php }?>
                                            </ul>
                                        <?php }?>
                                    </li>
                                <?php }?>
                            <?php }?>
                            
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7859 menu-item-level0 have-child wd-fly-menu">
                                <a href="/danh-muc-san-pham/phong-bep/">
                                    <span class='menu-label-level-0'>Phòng bếp</span>
                                </a> <span class="menu-drop-icon drop-icon-lv0"></span>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7860 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-bep/ban-ghe-an/">
                                            <span class='menu-label-level-1'>Bàn ghế ăn</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7861 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-bep/quay-bar/">
                                            <span class='menu-label-level-1'>Quầy bar</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7862 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-bep/tu-bep/">
                                            <span class='menu-label-level-1'>Tủ bếp</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7863 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-bep/vach-ngan/">
                                            <span class='menu-label-level-1'>Vách ngăn</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7864 menu-item-level0 have-child wd-fly-menu">
                                <a href="/danh-muc-san-pham/phong-ngu/">
                                    <span class='menu-label-level-0'>Phòng Ngủ</span>
                                </a> <span class="menu-drop-icon drop-icon-lv0"></span>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7865 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-ngu/ban-lam-viec/">
                                            <span class='menu-label-level-1'>Bàn làm việc</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7866 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-ngu/ban-trang-diem/">
                                            <span class='menu-label-level-1'>Bàn trang điểm</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7867 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-ngu/gia-sach/">
                                            <span class='menu-label-level-1'>Giá sách</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7868 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-ngu/giuong-ngu/">
                                            <span class='menu-label-level-1'>Giường ngủ</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7869 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-ngu/tu-ao/">
                                            <span class='menu-label-level-1'>Tủ áo</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-7870 menu-item-level0 have-child wd-fly-menu">
                                <a href="/danh-muc-san-pham/phong-tre-em/">
                                    <span class='menu-label-level-0'>Phòng trẻ em</span>
                                </a> <span class="menu-drop-icon drop-icon-lv0"></span>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7871 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-tre-em/ban-hoc-tre-em/">
                                            <span class='menu-label-level-1'>Bàn học trẻ em</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7872 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-tre-em/giuong-ngu-phong-tre-em/">
                                            <span class='menu-label-level-1'>Giường ngủ trẻ em</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7873 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-tre-em/noi-that-tre-em/">
                                            <span class='menu-label-level-1'>Nội thất trẻ em</span>
                                        </a>
                                    </li>
                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7874 menu-item-level1 wd-fly-menu">
                                        <a href="/danh-muc-san-pham/phong-tre-em/tu-ao-phong-tre-em/">
                                            <span class='menu-label-level-1'>Tủ áo trẻ em</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>