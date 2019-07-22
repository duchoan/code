<section class="body-content">
    <div class="container">
        <div class="post-page">
            <div class="content-post-info-user">
                <div class="icon-cart">
                    <div class="cart-active" style="width: 85%">
                        <span></span>
                    </div>
                </div>
                <div class="pay">
                    <div class="row">
                        <div class="col-sm-8">
                            <h1 class="title-head cat">
                                <a><?php echo rear('info_cart'); ?></a>
                            </h1>
                            <?php if (empty($_SESSION['member'])) { ?>
                                <div class="user-cart">
                                    <p class="note-user">
                                        <?php echo rear('info_user'); ?>
                                    </p>
                                    <form id="form-login">
                                        <div class="row justify-content-center" >
                                            <div id="err-login">

                                            </div>
                                            <div class="col-sm-8 ">
                                                <div class="form-group row">
                                                    <label for="user-email" class="col-sm-3 col-form-label">Email <span>(*)</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="user-email"
                                                               name="username" placeholder="email@example.com"
                                                               data-validation="required,email">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword"
                                                           class="col-sm-3 col-form-label"><?php echo rear('password'); ?>
                                                        <span>(*)</span></label>
                                                    <div class="col-sm-9">
                                                        <input type="password" class="form-control" id="inputPassword"
                                                               name="password" placeholder="Password"
                                                               data-validation="required">
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                                                    <div class="col-sm-9 ">
                                                        <button type="submit"
                                                                class="btn btn-primary float-right"><?php echo rear('user_login'); ?></button>
                                                    </div>
                                                </div>
                                                <script>
                                                    $(document).ready(function () {
                                                        $.validate({
                                                            form: '#form-login',
                                                            lang: 'vi',
                                                            scrollToTopOnError: !1,
                                                            borderColorOnError: "#ff0000",
                                                            onSuccess: function (data) {
                                                                $.ajax({
                                                                    type: "post",
                                                                    url: '<?php echo base_url() . 'login-cart';?>',
                                                                    data: $('#form-login').serialize(),
                                                                    dataType: 'json',
                                                                    success: function (data) {
                                                                        if (data.mes == 1) {
                                                                            location.reload();
                                                                        } else {
                                                                            $('#err-login').html(data.html);
                                                                        }
                                                                    }
                                                                });
                                                                return false;
                                                            }
                                                        });
                                                    })
                                                </script>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            <?php } else { ?>
                            <?php } ?>
                                <div class="form-order-send">
                                    <p class="note-checkout">
                                        <?php echo rear('note_checkout'); ?>
                                        <a href="javascript: history.go(-1)"><img src="<?php echo base_url('skin/frontend/images/back.png')?>" alt=""></a>
                                    </p>
                                    <form action="<?php echo base_url('dat-hang-thanh-cong'); ?>" method="post"
                                          id="form-validate"
                                          class="form-cart">
                                        <div class="content-post-cart">
                                            <div class="content-post">
                                                <input type="hidden" name="name" value="<?php echo $post['name'];?>">
                                                <input type="hidden" name="email" value="<?php echo $post['email'];?>">
                                                <input type="hidden" name="phone" value="<?php echo $post['phone'];?>">
                                                <input type="hidden" name="content" value="<?php echo $post['content'];?>">
                                                <input type="hidden" name="address" value="<?php echo $post['address'];?>">
                                                <p><?php echo $post['name'];?></p>
                                                <p><?php echo $post['address'];?></p>
                                                <p><?php echo $post['email'];?></p>
                                                <p><?php echo rear('phone').$post['phone'];?></p>
                                                <p><?php echo $post['content'];?></p>
                                            </div>
                                            <label>
                                                <input type="checkbox" class="option-input checkbox"
                                                       name="call_me" <?php if(!empty($post['call_me']) && $post['call_me'] == 'on'){echo 'checked';}?>/>
                                                <?php echo rear('cal_me_now'); ?>
                                            </label>
                                            <div class="select-pay">
                                                <p class="title-select-pay"><?php echo rear('title_select_pay');?></p>
                                                <div class="list-select-pay">
                                                    <div class="row-list-select">
                                                        <div class="row">
                                                            <div class="col-1">
                                                                <label>
                                                                    <input type="radio" class="option-input checkbox" name="pay_now" value="0" <?php if( $post['pay_now'] == '0'){echo 'checked';}?>/>
                                                                </label>
                                                            </div>
                                                            <div class="col-11">
                                                                <div class="box-car">
                                                                    <p class="box-car-trans"><?php echo rear('pay_online');?></p>
                                                                    <p class="box-car-normal"><?php echo rear('pay_online_bank');?></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row-list-select">
                                                        <div class="row">
                                                            <div class="col-1">
                                                                <label>
                                                                    <input type="radio" class="option-input checkbox" name="pay_now" value="1" <?php if( $post['pay_now'] == '1'){echo 'checked';}?>/>
                                                                </label>
                                                            </div>
                                                            <div class="col-11">
                                                                <div class="box-car box-atm">
                                                                    <p class="box-car-trans"><?php echo rear('go_online');?></p>
                                                                    <p class="box-car-normal"><?php echo rear('go_online_bank');?></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="go-me">
                                                    <label>
                                                        <input type="checkbox" class="option-input checkbox" name="type" <?php if(!empty($post['type']) && $post['type'] == 'on'){echo 'checked';}?> data-validation="required"/>
                                                        <?php echo rear('go_me');?>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <script>
                                            $(document).ready(function () {
                                                $.validate({
                                                    form: '#form-validate',
                                                    lang: 'vi'
                                                });
                                            });
                                        </script>
                                        <div class="button-payment">
                                            <div class="form-group row">
                                                <label for="inputPassword"
                                                       class="col-sm-3 col-form-label"></label>
                                                <div class="col-sm-9 ">
                                                    <button type="submit"
                                                            class="btn btn-primary float-right"><?php echo rear('btn_pay'); ?></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                        </div>
                        <div class="col-sm-4">
                            <div class="left-order-send">
                                <div class="content-post-cart">
                                    <div class="title-pay-cart"><?php echo rear('detail_cart'); ?></div>
                                    <table class="list-pay table">
                                        <tbody>
                                        <?php if ($this->cart->contents()) {
                                            foreach ($this->cart->contents() as $item) {
                                                $pro = $this->Common_model->get_one('product', array('id' => $item['id']));
                                                ?>
                                                <tr>
                                                    <td>
                                                        <a class="img-cart" target="_blank"
                                                           href="<?php echo base_url() . $pro->alias; ?>">
                                                            <img alt="<?php echo show_meta($pro); ?>"
                                                                 src="<?php echo $pro->image; ?>">
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <h2 class="name-cart">
                                                            <a href="<?php echo base_url() . $pro->$GLOBALS['alias']; ?>"
                                                               class="name-product-cart"><?php echo $pro->$GLOBALS['title']; ?></a>
                                                        </h2>
                                                        <p>
                                                            <?php echo rear('pro_price'); ?>:
                                                            <?php if ($pro->price_old > 0) { ?>
                                                                <span class="cart-price-old">
                                                                    <?php echo VndDot($pro->price_old); ?> ₫
                                                                </span>
                                                            <?php } ?>
                                                            <span class="cart-price">
                                                                <?php echo VndDot($pro->price); ?> ₫
                                                            </span>
                                                        </p>
                                                    </td>
                                                </tr>
                                            <?php } ?>
                                            <tr>
                                                <td colspan="2">
                                                    <p>

                                                        <span class="title-count"><?php echo rear('title_count'); ?></span>
                                                        <span class="count-cart"><?php echo VndDot($this->cart->total()); ?>
                                                            vnđ</span>
                                                    </p>
                                                </td>
                                            </tr>
                                        <?php } ?>
                                        </tbody>
                                    </table>
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