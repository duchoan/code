<?php
$title = 'title' . $rear;
$excerpt = 'excerpt' . $rear;
$fulltext = 'fulltext' . $rear;
?>

<div class="uk-container uk-container-center" xmlns="http://www.w3.org/1999/html">
    <div class="uk-grid">
        <div class="uk-width-medium-1-1">
            <div class="link">
                <a href="<?php echo base_url(); ?>">Trang chủ</a>
                <?php if (!empty($arr_cate)) {
                    foreach ($arr_cate as $cat) {
                        ?>
                        >> <a href="<?php echo base_url() . $cat->alias; ?>"
                              title="<?php echo show_meta($cat); ?>"><?php echo $cat->title; ?></a>
                    <?php }
                } ?>
            </div>
        </div>
    </div>
</div>
<div class="uk-container uk-container-center">
    <div class="uk-grid">
        <div class="uk-width-medium-7-10">
            <div class="title_trangcon">
                <p>Tổ chức du lịch kết hợp tổ chức sự kiện</p>
            </div>
            <div class="article">
                THƯ NGỎ

                Kính chào quý Khách hàng và Quý đối tác! Công ty Cổ phần Du Lịch Thương Mại Và Đầu Tư Hà Nội (Hanotours) xin gửi tới Quý khách và Quý đối tác lời chào trân trọng và kính chúc sức khỏe, thành công.

                Kính thưa Quý khách, trong xu thế hội nhập kinh tế Quốc tế, nền kinh tế của Việt Nam nói chung và mức sống của người dân Việt Nam nói riêng đã được cải thiện rõ ràng và ngày một nâng cao. Để có được điều đó, chắc hẳn mỗi chúng ta đã phải làm việc và lao động một cách nghiêm túc và chăm chỉ. Do đó một kì nghỉ cùng gia đình và bạn bè, người thân sẽ giúp chúng ta lấy lại thăng bằng cho cuộc sống, giữ cho tinh thần luôn tràn đầy năng lượng. Hơn thế nữa, các chuyến đi xa hay kì nghỉ thực sự sẽ mang lại nguồn cảm hứng bất tận để chúng ta lại sẵn sàng đón nhận những thách thức mới trong công việc.

                Hanotours mong muốn sớm được phục vụ Quý khách.

                TẦM NHÌN SỨ MỆNH

                TẦM NHÌN: Xây dựng doanh nghiệp trở thành một trong những Công Ty Du Lịch Và Thương Mại hàng đầu của Miền Bắc Việt Nam.

                SỨ MỆNH: Không ngừng sáng tạo ra những sản phẩm, dịch vụ … mang lại sự thỏa mãn cao nhất cho khách hàng. Hiệu quả hoạt động với tôn chỉ dành lợi ích cao nhất cho cổ đông. Tích cực tham gia các hoạt động xã hội nhằm tạo ra nhiều lợi ích chung cho cộng đồng và toàn xã hội.

                + Cung cấp cho khách hàng những sản phẩm, dịch vụ tốt nhất trong ngành du lịch...

                + Xây dựng một môi trường làm việc năng động, hiệu quả, tạo điều kiện phát triển năng lực của các cán bộ, nhân viên trong Công ty.

                TRIẾT LÝ KINH DOANH: Sự thỏa mãn cua quý khách hàng là nguồn máu nuôi sống chúng tôi.
            </div>
        </div>
        <div class="uk-width-medium-3-10">
            <div class="title_menu_doc">
                <p>dịch vụ du lịch</p>
            </div>
            <div class="menuvertical">
                <ul>
                    <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Giới thiệu về Hanoitour </a></li>
                    <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Giải thưởng và vinh danh </a></li>
                    <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Hoạt động nội bộ </a></li>
                </ul>
            </div>
            <div class="title_menu_doc">
                <p>tour hot</p>
            </div>
            <div class="tour_hot">
                <div class="box_tour_hot">
                    <div class="uk-grid">
                        <div class="uk-width-medium-1-3">
                            <div class="img_box_tour_hot">
                                <a href=""><img src="img/img1.png" width="100%" alt=""></a>
                                <div class="sale">
                                    30%
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-2-3">
                            <div class="title_box_tour_hot">
                                <a href="">Du lịch Singapore - Malaysia - Thailand</a>
                            </div>
                            <div class="price_box_tour_hot">25.000.000</div>
                        </div>
                    </div>
                </div>
                <div class="box_tour_hot">
                    <div class="uk-grid">
                        <div class="uk-width-medium-1-3">
                            <div class="img_box_tour_hot">
                                <a href=""><img src="img/img1.png" width="100%" alt=""></a>
                                <div class="sale">
                                    30%
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-2-3">
                            <div class="title_box_tour_hot">
                                <a href="">Du lịch Singapore - Malaysia - Thailand</a>
                            </div>
                            <div class="price_box_tour_hot">25.000.000</div>
                        </div>
                    </div>
                </div>
                <div class="box_tour_hot">
                    <div class="uk-grid">
                        <div class="uk-width-medium-1-3">
                            <div class="img_box_tour_hot">
                                <a href=""><img src="img/img1.png" width="100%" alt=""></a>
                                <div class="sale">
                                    30%
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-2-3">
                            <div class="title_box_tour_hot">
                                <a href="">Du lịch Singapore - Malaysia - Thailand</a>
                            </div>
                            <div class="price_box_tour_hot">25.000.000</div>
                        </div>
                    </div>
                </div>
                <div class="box_tour_hot">
                    <div class="uk-grid">
                        <div class="uk-width-medium-1-3">
                            <div class="img_box_tour_hot">
                                <a href=""><img src="img/img1.png" width="100%" alt=""></a>
                                <div class="sale">
                                    30%
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium-2-3">
                            <div class="title_box_tour_hot">
                                <a href="">Du lịch Singapore - Malaysia - Thailand</a>
                            </div>
                            <div class="price_box_tour_hot">25.000.000</div>
                        </div>
                    </div>
                </div>
                <div class="more_box_tour_hot">
                    <a href="">Xem thêm</a>
                </div>
            </div>
        </div>
    </div>
</div>





