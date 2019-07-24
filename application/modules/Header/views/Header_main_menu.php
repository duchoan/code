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
                                        <?php if(!empty($cate_child[$cate->id])){?>
                                            <ul class="sub-menu">
                                                <?php foreach($cate_child[$cate->id] as $cat){?>
                                                    <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-<?= $cat->id;?> menu-item-level1 wd-fly-menu">
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>