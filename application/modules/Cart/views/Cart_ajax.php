<form method="POST" action="<?php echo base_url(); ?>cart/update">
    <div class="row">
        <div class="col-md-12">
            <table class="table">
                <thead>
                <tr>
                    <th class="text-xs-center"></th>
                    <th class="text-xs-center"><?php echo rear('pro_name');?></th>
                    <th class="text-xs-center"><?php echo rear('pro_price');?></th>
                    <th class="text-xs-center"><?php echo rear('pro_qty');?></th>
                    <th class="text-xs-center"><?php echo rear('pro_mon');?></th>
                </tr>
                </thead>
                <tbody>
                <?php if ($this->cart->contents()) {
                    $i = 0;
                    foreach ($this->cart->contents() as $item) {
                        $i++;
                        $article = $this->Common_model->get_one('product', array('id' => $item['id']));
                        ?>
                        <tr>
                            <td>
                                <a class="img-cart"
                                   href="<?php echo base_url() . $article->$GLOBALS['alias']; ?>"><img
                                            src="<?php echo $article->image; ?>"
                                            alt="<?php echo show_meta($article) ?>"></a>
                            </td>
                            <td>
                                <h2 class="name-cart">
                                    <a href="<?php echo base_url() . $article->$GLOBALS['alias']; ?>"
                                       class="name-product-cart"><?php echo $article->$GLOBALS['title']; ?></a>
                                </h2>
                                <p class="remove-item">
                                    <a style="cursor: pointer"
                                       onclick="delete_cart('<?php echo $item['rowid']; ?>');"
                                       title="Xóa"
                                       class="button remove-item"><i aria-hidden="true"
                                                                     class="fa fa-trash-o"></i> <?php echo rear('remove_cart');?></a>
                                </p>
                            </td>
                            <td>
                                <?php if ($article->price_old > 0) { ?>
                                    <span class="cart-price-old">
                                                        <?php echo VndDot($article->price_old); ?> ₫
                                                    </span>
                                <?php } ?>
                                <span class="cart-price">
                                                        <?php echo VndDot($item['price']); ?> ₫
                                                    </span>
                            </td>
                            <td>
                                <div class="number-input">
                                    <button type="button" class="number-step-down" onclick="step_down(this)" data-id="updates_<?php echo $item['id']; ?>"></button>
                                    <input onchange="update_cart(this,'<?php echo $item['rowid']; ?>')"
                                           type="number" min="1" id="updates_<?php echo $item['id']; ?>"
                                           name="<?php echo $item['id']; ?>"
                                           value="<?php echo $item['qty']; ?>">
                                    <button type="button" class="number-step-up plus" onclick="step_up(this)" data-id="updates_<?php echo $item['id']; ?>"></button>
                                </div>
                            </td>
                            <td><span
                                        class="cart-price"><?php echo VndDot($item['price'] * $item['qty']); ?>
                                    vnđ</span></td>

                        </tr>
                    <?php }
                } ?>
                <tr class="number-total">
                    <td colspan="3">
                        <button onclick="window.location.href='<?php echo base_url(); ?>'"
                                type="button"
                                title="Tiếp tục mua hàng" class="btn btn-danger btn-next-buy">
                            <?php echo rear('next_buy');?>
                        </button>
                    </td>
                    <td colspan="2">
                        <p>
                            <span class="title-count"><?php echo rear('title_count');?></span>
                            <span class="count-cart"><?php echo VndDot($this->cart->total()); ?>
                                vnđ</span>
                        </p>
                        <p class="btn-checkout">
                            <button onclick="window.location.href='<?php echo base_url(); ?>checkout'"
                                    type="button"
                                    title="Tiến hành thanh toán" class="btn btn-success">
                                <span><?php echo rear('pay');?></span>
                            </button>
                        </p>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</form>