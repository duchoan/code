<?php if (!empty($item_post)) {
    if ($item_post->show == 0) {
        $this->Common_model->update_data('order', array('id' => $item_post->id), array('show' => 1));
    }
    $product = $this->Common_model->get_data('product');
    foreach ($product as $ur) {
        $object[$ur->id] = $ur;
    }
    $detail_order = $this->Common_model->get_data('order_details', array('id_order' => $item_post->id));
    if (isset($_GET['page'])) {
        $page = '&page=' . $_GET['page'];
    } else {
        $page = '';
    }
    ?>
    <form method="post"
          action="<?php echo base_url(); ?>admin-direct/edit?table=order&id=<?php echo $item_post->id . $page; ?>">
        <div class="menu-filter filter-add add-user">
            <ul class="" role="tablist">
                <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                          role="tab" data-toggle="tab">Thông tin đơn hàng</a>
                </li>
            </ul>
        </div>
        <!-- end tab list-->
        <div class="content-add-item">
            <p class="add-title-top">Thông tin chi tiết</p>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="user-info">
                    <div class="row row-input">
                        <div class="col-xs-2">Họ tên</div>
                        <div class="col-xs-8">
                            <input type="text" name="name" class="control-input input-title"
                                   value="<?php echo $item_post->name; ?>"/>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Điện thoại</div>
                        <div class="col-xs-8">
                            <input type="text" name="phone" class="control-input input-title"
                                   value="<?php echo $item_post->phone; ?>"/>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Email</div>
                        <div class="col-xs-8">
                            <input type="text" name="email" class="control-input input-title"
                                   value="<?php echo $item_post->email; ?>"/>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Địa chỉ</div>
                        <div class="col-xs-8">
                            <input type="text" name="address" class="control-input input-title"
                                   value="<?php echo $item_post->address; ?>"/>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Tổng tiền</div>
                        <div class="col-xs-8">
                            <input type="text" name="total" class="control-input input-title"
                                   value="<?php echo $item_post->total; ?>"/>
                        </div>
                    </div>
                    <div class="toggle-group">
                        <p class="toggle-title toggle-title-up">Nội dung</p>
                        <div class="toggle-content">
                            <div class="row row-input row-ck">
                                <div class="col-xs-12">
                                <textarea name="content" class="control-input check-editor" id="full-2"
                                          style="height: auto"
                                          rows="5"><?php echo $item_post->content; ?></textarea>
                                </div>
                            </div>
                            <!-- end row-->
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Ngày đặt hàng</div>
                        <div class="col-xs-10">
                            <?php echo date('d-m-Y', strtotime($item_post->date_create)); ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Sản phẩm</div>
                        <div class="col-xs-10">
                            <?php
                            $pro_or = $this->Common_model->get_data('order_details', array('id_order' => $item_post->id));
                            if (!empty($pro_or)) {
                                foreach ($pro_or as $od) {
                                    $pro = $this->Common_model->get_one('product', array('id' => $od->id_sp));
                                    if (!empty($pro)) {
                                        ?>
                                        <p><a href="<?php echo base_url() . $pro->alias; ?>"
                                              target="_blank"><?php echo $pro->title; ?></a> - Số
                                            lượng: <?php echo $od->qty; ?></p>
                                        <?php
                                    }
                                }
                            } ?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Phương thức thanh toán</div>
                        <div class="col-xs-10">
                            <?php if($item_post->pay_now==0){echo 'Đặt hàng online';}else{echo ' Chuyển khoản ngân hàng';}?>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Tình trạng thanh toán</div>
                        <div class="col-xs-10">
                            <?php if ($item_post->type_money == 3) {
                                echo 'Đã hoàn thành"';
                            } else { ?>
                                <div>
                                    <div class="select-box" style="display: inline-block; min-width: 100px">
                                        <label>
                                            <select name="type_money">
                                                <option
                                                        value="0" <?php if ($item_post->type_money == 0) {
                                                    echo 'selected="selected"';
                                                } ?>>Chờ xử lý
                                                </option>
                                                <option
                                                        value="1" <?php if ($item_post->type_money == 1) {
                                                    echo 'selected="selected"';
                                                } ?>>Chờ thanh toán
                                                </option>
                                                <option
                                                        value="3" <?php if ($item_post->type_money == 3) {
                                                    echo 'selected="selected"';
                                                } ?>>Đã hoàn thành
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
                <!-- end tab info-->
                <div class="row text-left">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-10">
                        <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                        <a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" class="btn btn-default btn-delete">Quay
                            lại</a>
                    </div>

                </div>
            </div>
            <!-- end tab content-->

        </div>
    </form>
<?php } ?>