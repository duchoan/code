<div class="menu-filter">
    <ul>
        <li>
            <a href="<?php echo base_url(); ?>admin-direct/list?table=<?php echo $table; ?>" <?php if (!isset($_GET['show'])) {
                echo 'class="active"';
            } ?> >Tất cả</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>admin-direct/list?table=<?php echo $table; ?>&show=1" <?php if (!empty($_GET['show'])) {
                if ($_GET['show'] == 1) {
                    echo 'class="active"';
                }
            } ?> >Đã xem</a>
        </li>
        <li>
            <a href="<?php echo base_url(); ?>admin-direct/list?table=<?php echo $table; ?>&show=0" <?php if (isset($_GET['show'])) {
                if ($_GET['show'] == 0) {
                    echo 'class="active"';
                }
            } ?> >Chưa xem</a></li>
    </ul>
</div>
<div class="menu-option">
    <ul>
        <li class="option-item item-list-status action-all-buttom">
            <a class="option-status"><span>Thay đổi trạng thái</span></a>
            <ul class="ul-list">
                <?php
                    if(Check_per_action($table,$iduser,4)){
                ?>
                <li><span data-action="delete" class="tick-delete action_all_item">Xoá</span></li>
                <?php }?>
            </ul>
        </li>
        <li class="option-item item-list-status"><a
                class="option-show-col"><span>Hiển thị cột </span></a>
            <ul class="ul-list cookie-name" cookie_name="content_list_contact" catid="allsearch_text"
                product_group="" mode="all" id="change_column_of_list">
                <li><span class="tick-active">Chọn</span></li>
                <li><span class="tick-active">ID</span></li>
                <li><span class="tick-active">Chức năng</span></li>
                <li><span class="tick-active">Tiêu đề</span></li>
                <li><span class="tick-active">Nội dung</span></li>
                <li><span class="tick-active">Gửi lúc</span></li>
                <li><span class="tick-active">Loại</span></li>
            </ul>
        </li>
        <li class="option-item">
            <div class="admin-search">
                <input class="search-keyword" type="text" name="keyword" placeholder="Lọc theo tên"
                       value="<?php echo $keyword; ?>"/>
                <input class="search-submit" value="" type="button"/>
            </div>
        </li>
    </ul>
</div>
<?php if (!empty($object_item)) { ?>
    <div class="list-item">
        <table class="table table-contact table-list">
            <thead>
            <tr>
                <th class="item-checkbox"><input type="checkbox" name="checkbox-all"
                                                 class="check-all"><label><span></span></label></th>
                <th class="text-center">ID</th>
                <th></th>
                <th>Tiêu đề</th>
                <th>Nội dung</th>
                <th class="text-center">Gửi lúc</th>
                <th class="text-center">Kiểu</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($object_item as $obj) { ?>
                <tr>
                    <td class="item-checkbox">
                        <input type="checkbox" class="case" name="checkbox-id[]" value="<?php echo $obj->id; ?>"><label><span></span></label>
                        <span class="<?php if ($obj->show == 1) {
                            echo 'item-status';
                        } else {
                            echo 'item-status-deactive';
                        } ?>"></span>
                    </td>
                    <td class="text-center"><?php echo $obj->id; ?></td>
                    <td style="min-width: 80px">
                        <?php if(Check_per_action($table,$iduser,2)){;?>
                            <a href="<?php echo base_url(); ?>admin-direct/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?>"
                               class="add-item"></a>
                        <?php }?>
                        <?php if(Check_per_action($table,$iduser,3)){;?>
                            <?php if($obj->show==1){?>
                                <span title="Chưa xem" data-id="<?php echo $obj->id;?>" class="publish-item publish-on"></span>
                            <?php }else{?>
                                <span title="Đã xem" data-id="<?php echo $obj->id;?>" class="publish-item publish-off"></span>
                            <?php }?>
                        <?php }?>
                        <?php if(Check_per_action($table,$iduser,4)){;?>
                            <span data-id="<?php echo $obj->id;?>" class="delete-item"></span>
                        <?php }?>
                    </td>
                    <td>
                        <a href="<?php if(Check_per_action($table,$iduser,2)){;?><?php echo base_url(); ?>admin-direct/edit?table=<?php echo $this->input->get('table'); ?>&id=<?php echo $obj->id; ?><?php }else{echo 'javascript:void(0);'; }?>"
                           class="list-name"><?php echo $obj->title; ?></a>
                    </td>
                    <td>
                        <?php echo $obj->content; ?>
                    </td>
                    <td class="text-center"><?php echo $this->Admin_model->time_ago(strtotime($obj->date_create));?></td>
                    <td class="text-center"><?php if($obj->type==0){echo 'Liên hệ';}else{echo 'Tu vấn - báo giá';}?></td>
                </tr>
                <!-- end row item-->
            <?php } ?>
            </tbody>
        </table>
        <div class="admin-pagination">
            <div class="navbar-left">
                <label>Trang</label><?php echo $this->pagination->create_links(); ?>
            </div>
            <!-- pagination-->
            <div class="navbar-right">
                <span style="display: inline-block">Hiển thị hàng </span>

                <div class="select-box" style="display: inline-block">
                    <label>
                        <select class="action_selecte" name="perpage">
                            <?php
                            for ($i = 10; $i < 200; $i) {
                                ?>
                                <option <?php if (isset($_GET['perpage'])) {
                                    if ($_GET['perpage'] == $i) {
                                        echo 'selected';
                                    }
                                } ?> value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php
                                if ($i < 50) {
                                    $i = $i + 10;
                                } else {
                                    $i = $i + 50;
                                }
                            } ?>
                        </select>
                    </label>
                </div>
                <span style="display: inline-block"><?php if (!empty($notice_page)) {
                        echo $notice_page;
                    } ?></span>
            </div>
        </div>
    </div>
<?php } ?>
