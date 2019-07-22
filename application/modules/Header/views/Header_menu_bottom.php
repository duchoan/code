<?php if (!empty($categories)) { ?>
    <div class="main main-menu-bottom text-center">
        <ul>
            <li><a href="<?php echo base_url(); ?>">Trang chủ</a></li>
            <?php foreach ($categories as $cate) { ?>
                <li><a href="<?php echo base_url() . $link[$cate->id]; ?>"><?php echo $cate->title; ?></a></li>
            <?php } ?>
            <li><a href="<?php echo base_url() ;?>lien-he">Liên hệ</a></li>
        </ul>
    </div>
    <!-- end main categories -->
<?php } ?>