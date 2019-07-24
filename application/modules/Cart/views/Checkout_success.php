<section class="body-content">
    <div class="container">
        <div class="post-page">
            <div class="content-post-info-user">
                <div class="icon-cart">
                    <div class="cart-active" style="width: 100%">
                        <span></span>
                    </div>
                </div>
                <div class="pay">
                    <div class="row">
                        <div class="col-sm-12">
                            <h1 class="title-head cat">
                                <a><?php echo rear('done_pay'); ?></a>
                            </h1>
                            <div class="success-pay">
                                <?php if (!empty($_SESSION['rear'])) { ?>

                                <?php } else { ?>
                                    <h6>CHÚC MỪNG BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG</h6>
                                    <p>Cám ơn quý khách đã đặt hàng.</p>
                                    <p>Bộ phận Chăm Sóc Khách Hàng của chúng tôi sẽ liên lạc với quý khách để xác nhận thông
                                        tin giao dịch.</p>
                                    <p>Khi đơn hàng được xác nhận, chúng tôi sẽ giao hàng cho quý khách.</p>
                                    <p>Nếu quý khách cần hỗ trợ, vui lòng liên hệ với chúng tôi qua hotline: <span>1900 1234</span></p>
                                    <p> Cảm ơn quý khách đã mua hàng tại Blossomhealth.vn</p>
                                    <p><strong> Trận trọng!</strong></p>
                                <?php } ?>
                                <div class="back-to-home">
                                    <a class="btn btn-primary" href="<?php echo base_url();?>"><?php echo rear('back_home');?></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<style>
    .form-error {
        display: none;
    }
</style>