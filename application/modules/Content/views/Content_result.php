<?php if (!empty($office)) { ?>
    <ul class="item-list-map">
        <?php foreach ($office as $off) { ?>
            <li id="item_<?php echo $off->id ;?>" onclick="activeMap('<?php echo $off->id ;?>','','','')">
                <div class="item row row-5">
                    <div class="i-thumbnail col-2 padding-5">
                        <img src="<?php echo $off->image ;?>"
                             alt="<?php echo $off->title ;?>"
                             title="<?php echo $off->title ;?>">
                    </div>
                    <div class="i-description col-10 padding-5">
                        <p class="name"><i class="fa fa-home"></i> : <?php echo $off->title ;?></p>
                        <p class="address"><i class="fa fa-address-card-o"></i> : <?php echo $off->address ;?></p>
                        <p class="phone"><i class="fa fa-phone"></i> : <?php echo $off->phone ;?></p>
                        <p class="email"><i class="fa fa-envelope-o"></i> : <a
                                href="mailto:<?php echo $off->email ;?>"><?php echo $off->email ;?></a></p>
                    </div>
                    <div class="clear"></div>
                </div>
            </li>
        <?php } ?>
    </ul>
<?php } ?>