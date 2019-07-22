<?php if (validation_errors()) { ?>
    <div class="validate-form">
        <?php echo validation_errors(); ?>
    </div>
<?php } ?>
<form method="post" action="<?php echo base_url(); ?>admin-direct/edit?table=comment&id=<?php echo $item_post->id ;?>">
    <div class="menu-filter filter-add add-user">
        <ul class="" role="tablist">
            <li role="presentation" class="active"><a href="#user-info" aria-controls="user-info"
                                                      role="tab" data-toggle="tab">Thông tin cơ bản</a>
            </li>
        </ul>
    </div>
    <!-- end tab list-->
    <div class="content-add-item">
        <p class="add-title-top">Xét duyệt bình luận</p>
        <div class="row row-input">
            <div class="col-xs-2">Ngôn ngữ</div>
            <div class="col-xs-10">
                <div class="add-language">
                    <div class="select-box" style="display: inline-block; min-width: 100px">
                        <label>
                            <?php if($this->session->userdata('language')){?>
                                <select name="language" id="check-language">
                                    <option value="vi" <?php if ($this->session->userdata('language') == 'vi') {
                                        echo 'selected="selected"';
                                    } ?>>Việt Nam
                                    </option>
                                </select>
                            <?php }else{?>
                                <select name="language" id="check-language">
                                    <option value="vi" <?php if($item_post->language=='vi'){echo 'selected="selected"';}?>>Việt Nam</option>
                                </select>
                            <?php }?>
                        </label>
                    </div>
                </div>
                <!-- end -->
            </div>
        </div>
        <!-- end row-->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="user-info">
                <div class="row row-input">
                    <div class="col-xs-2">Tên sản phẩm<span class="user-error">*</span></div>
                    <div class="col-xs-10">
                       <?php $article = $this->Admin_model->get_one('product',array('show'=>1,'id'=>$item_post->idpost));
                        if(!empty($article)){?>
                            <a href="<?php echo base_url().$article->alias;?>" target="_blank">
                                <?php echo $article->title;?>
                            </a>
                        <?php }?>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Tên</div>
                    <div class="col-xs-10">
                        <?php echo $item_post->name ;?>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Email</div>
                    <div class="col-xs-10">
                        <?php echo $item_post->email ;?>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Điện thoại</div>
                    <div class="col-xs-10">
                        <?php echo $item_post->phone ;?>
                    </div>
                </div>
                <!-- end row-->
                <div class="row row-input">
                    <div class="col-xs-2">Nội dung bình luận</div>
                    <div class="col-xs-10">
                        <?php echo $item_post->comment ;?>
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
                                       value="1" <?php if ($item_post->show == 1) {
                                    echo 'checked';
                                } ?> ><label><span></span></label>
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
                    <button type="button" class="btn btn-primary  btn-add" data-toggle="modal" data-target="#rep_modal">
                       Trả lời
                    </button>
                    <button class="btn btn-primary btn-add" type="submit">Cập nhập</button>
                    <a href="<?php if(isset($_SERVER['HTTP_REFERER'])){echo $_SERVER['HTTP_REFERER']; } ?>" class="btn btn-default btn-delete">Hủy</a>
                </div>

            </div>
        </div>
        <!-- end tab content-->

    </div>
</form>
<!-- Button trigger modal -->


<!-- Modal -->
<form action="" id="rep-modal">
    <div class="modal fade" id="rep_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Trả lời bình luận</h4>
                </div>
                <div class="modal-body">
                    <input type="hidden" name="parentid" value="<?php echo $item_post->id ;?>">
                    <input type="hidden" name="idpost" value="<?php echo $item_post->idpost ;?>">
                    <div class="row row-input">
                        <div class="col-xs-2">Tên</span></div>
                        <div class="col-xs-10">
                            <input type="text" name="name" class="control-input input-user"
                                   value="Blossomhealth.vn"/>
                        </div>
                    </div>
                    <!-- end row-->
                    <div class="row row-input">
                        <div class="col-xs-2">Nội dung</span></div>
                        <div class="col-xs-10">
                            <textarea type="text" name="comment" rows="3"
                                      class="control-input input-title"
                                      style="height: auto">@<?php echo $item_post->name ;?>:</textarea>
                        </div>
                    </div>
                    <div class="row row-input">
                        <div class="col-xs-2">Kích hoạt</div>
                        <div class="col-xs-10">
                            <div class="col-option">
                                <div class="item-on-off user-on-off">
                                    <input type="hidden" name="show" value="0"/>
                                    <input type="checkbox" name="show"
                                           value="1"><label><span></span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row-->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default " data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary btn-rep">Trả lời</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            $('.btn-rep').on('click',function () {
                $.ajax({
                    type: "post",
                    url: '<?php echo base_url() . 'admin-reply-comment';?>',
                    data: $('#rep-modal').serialize(),
                    success: function (data) {
                        alert('Bạn đã trả lời thành công');
                        $('.close').trigger('click');
                    }
                });
                return false;
            })

        })
    </script>
</form>
