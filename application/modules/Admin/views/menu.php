<?php
    $permission=array();
    if($this->session->userdata('loged')){
        $id=$this->session->userdata('loged');
        $user=$this->Admin_model->getone('users',array('show'=>1,'id'=>$id),array('permission'));
        if(!empty($user)){
            $permission=json_decode($user->permission);
        }
    }else{
        redirect(base_url().'admin-direct');
    }
?>
<div class="main main-menu">
    <div class="container">
        <ul>
            <li class="item-menu"><a onclick="count_visit('home','<?php echo base_url();?>admin-direct');"  class="cusor-ponter <?php if (empty($_GET['table'])) {
                        echo 'active';
                } ?>">Home</a></li>
            <?php if(Check_per_table('article',$id)){?>
            <li class="item-menu">
                <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                    if ($this->input->get('table') == 'article') {
                        echo 'active';
                    }
                } ?>"
                 onclick="count_visit('article','<?php echo base_url(); ?>admin-direct/list?table=article');" >Bài viết</a>
                <ul class="sub-menu">
                    <?php if(Check_per_action('article',$id,1)){?>
                    <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>admin-direct/add?table=article">Thêm
                            bài viết</a></li>
                    <?php }?>
                </ul>
            </li>
            <?php }?>
            <?php if(Check_per_table('product',$id)){?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'product') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('article','<?php echo base_url(); ?>admin-direct/list?table=product');" >Sản phẩm</a>
                    <ul class="sub-menu">
                        <?php if(Check_per_action('product',$id,1)){?>
                            <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>admin-direct/add?table=product">Thêm
                                    sản phẩm</a></li>
                        <?php }?>
                    </ul>
                </li>
            <?php }?>
            <?php if(Check_per_table('categories',$id)){?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'categories') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('categories','<?php echo base_url(); ?>admin-direct/list?table=categories');"
                    >Danh mục</a>
                    <ul class="sub-menu">
                        <?php if(Check_per_action('categories',$id,1)){?>
                            <li><a class="cusor-ponter ajax-list " href="<?php echo base_url(); ?>admin-direct/add?table=categories">Thêm danh mục</a></li>
                        <?php }?>
                    </ul>
                </li>
            <?php }?>
            <?php if(Check_per_table('order',$id)){?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'order') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('order','<?php echo base_url(); ?>admin-direct/list?table=order');" >Đơn hàng</a>
                </li>
            <?php }?>
            <?php if (Check_per_table('office', $id)) { ?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'office') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('office','<?php echo base_url(); ?>admin-direct/list?table=office');"
                    >Văn phòng</a>
                    <ul class="sub-menu">
                        <?php if (Check_per_action('country', $id, 1)) { ?>
                            <li><a class="cusor-ponter ajax-list "
                                   href="<?php echo base_url(); ?>admin-direct/list?table=country">Quốc gia</a></li>
                        <?php } ?>
                        <?php if (Check_per_action('city', $id, 1)) { ?>
                            <li><a class="cusor-ponter ajax-list "
                                   href="<?php echo base_url(); ?>admin-direct/list?table=city">Tỉnh thành</a></li>
                        <?php } ?>
                        <?php if (Check_per_action('district', $id, 1)) { ?>
                            <li><a class="cusor-ponter ajax-list "
                                   href="<?php echo base_url(); ?>admin-direct/list?table=district">Quận huyện</a></li>
                        <?php } ?>
                        <?php if (Check_per_action('office', $id, 1)) { ?>
                            <li><a class="cusor-ponter ajax-list "
                                   href="<?php echo base_url(); ?>admin-direct/add?table=office">Thêm văn phòng</a></li>
                        <?php } ?>
                    </ul>
                </li>
            <?php } ?>
            <?php if(Check_per_table('support',$id)){?>
                <li class="item-menu">
                    <a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'support') {
                            echo 'active';
                        }
                    } ?>"
                       onclick="count_visit('order','<?php echo base_url(); ?>admin-direct/support?table=support');"
                    >Hỗ trợ</a>
                </li>
            <?php }?>
            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                    if ($this->input->get('table') == 'users') {
                        echo 'active';
                    }
                } ?>"
                     onclick="count_visit('users','<?php echo base_url(); ?>admin-direct/list?table=users');"
                     >Thành viên</a>
                <ul class="sub-menu">
                    <li><a class="cusor-ponter ajax-list" href="<?php echo base_url(); ?>admin-direct/add?table=users">Thêm
                            thành viên</a></li>
                </ul>
            </li>
            <?php if(Check_per_table('setting',$id)){?>
                <li class="item-menu">
                    <a href="<?php echo base_url(); ?>admin-direct/setting?table=setting" class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                        if ($this->input->get('table') == 'setting') {
                            echo 'active';
                        }
                    } ?>" >Quản trị hệ thống</a>
                    <ul class="sub-menu">
                        <?php if(Check_per_table('slide',$id)){?>
                            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'slide') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('slide','<?php echo base_url(); ?>admin-direct/list?table=slide');"
                                >Slideshow</a>
                            </li>
                        <?php }?>
                        <?php if(Check_per_table('ads',$id)){?>
                            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'ads') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('ads','<?php echo base_url(); ?>admin-direct/list?table=ads');"
                                >Quảng cáo</a>
                            </li>
                        <?php }?>
                        <?php if(Check_per_table('service',$id)){?>
                            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'service') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('service','<?php echo base_url(); ?>admin-direct/list?table=service');"
                                >Cam kết</a>
                            </li>
                        <?php }?>
                        <?php if(Check_per_table('email',$id)){?>
                            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'email') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('service','<?php echo base_url(); ?>admin-direct/list?table=email');"
                                >Email</a>
                            </li>
                        <?php }?>
                        <?php if(Check_per_table('comment',$id)){?>
                            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'comment') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('comment','<?php echo base_url(); ?>admin-direct/list?table=comment');"
                                >Bình luận</a>
                            </li>
                        <?php }?>
                        <?php if(Check_per_table('contact',$id)){?>
                            <li class="item-menu"><a class="cusor-ponter ajax-list <?php if (!empty($_GET['table'])) {
                                    if ($this->input->get('table') == 'contact') {
                                        echo 'active';
                                    }
                                } ?>"
                                                     onclick="count_visit('contact','<?php echo base_url(); ?>admin-direct/list?table=contact');"
                                >Liên hệ</a>
                            </li>
                        <?php }?>

                    </ul>
                </li>
            <?php }?>
        </ul>
    </div>
</div>