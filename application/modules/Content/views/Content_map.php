<?php
if (!empty($rear)) {
    $title = 'title' . $rear;
    $excerpt = 'excerpt' . $rear;
    $fulltext = 'fulltext' . $rear;
    $contact = 'address_contact' . $rear;
} else {
    $title = 'title';
    $excerpt = 'excerpt';
    $fulltext = 'fulltext';
    $contact = 'address_contact';
}
?>
<script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdxcneam-kYuGNura-MnmDxyRYiS6LBCs&libraries=places,geometry"></script>
<script src="<?php echo base_url(); ?>skin/frontend/js/marker.js"></script>
<script src="<?php echo base_url(); ?>skin/frontend/js/map.js"></script>

<div class="body-content">
    <div class="container">
        <div class="wrapper">
            <div class="box_mid">
                <div class="map-box-title">
                    <?php echo rear('map_title'); ?>
                </div>
                <div class="mid-content">
                    <div class="formSystem">
                        <form name="modSearch" id="modSearch" method="post" action="" onsubmit="return Search();">
                            <div class="row row-5">
                                <div class="col-md-12 padding-5">
                                    <div class="row row-input row-5">
                                        <div class="col-sm-4 padding-5">
                                            <select name="country" class="form-control" id="store_select_region"
                                                    tabindex="2" aria-hidden="true">
                                                <option value="" selected="">--- <?php echo rear('chose_country')?> ---</option>
                                                <?php if (!empty($country)) {
                                                    foreach ($country as $ci) { ?>
                                                        <option <?php if (isset($_GET['iRegion']) && !empty($_GET['iRegion']) && $_GET['iRegion'] == $ci->id) {
                                                            echo 'selected';
                                                        } ?> value="<?php echo $ci->id; ?>"><?php echo $ci->title; ?></option>
                                                    <?php }
                                                } ?>
                                            </select>
                                        </div>
                                        <script>
                                            $(document).ready(function () {
                                                $('#store_select_region').on('change', function () {
                                                    var id = $(this).val();
                                                    var url = '<?php echo base_url();?>map-post-country';
                                                    $.ajax({
                                                        type: "POST",
                                                        url: url,
                                                        data: {id: id},
                                                        success: function (data, status) {
                                                            $('#store_select_city').html(data);
                                                        }
                                                    })
                                                })
                                            })
                                        </script>
                                        <div class="col-sm-4 padding-5">
                                            <select id="store_select_city" class="form-control" tabindex="3"
                                                    aria-hidden="true"
                                                    onchange="loadDistrict()">
                                                <option value="" selected="">--- <?php echo rear('chose_city')?> ---</option>
                                                <?php if (!empty($list_city)) {
                                                    foreach ($list_city as $ci) {
                                                        ?>
                                                        <option <?php if (isset($_GET['iCit']) && !empty($_GET['iCit']) && $_GET['iCit'] == $ci->id) {
                                                            echo 'selected';
                                                        } ?> value="<?php echo $ci->id; ?>"><?php echo $ci->title; ?></option>
                                                    <?php }
                                                } ?>
                                            </select>
                                            <script>
                                                $(document).ready(function () {
                                                    $('#store_select_district').on('change', function () {
                                                        var id = $(this).val();
                                                        var url = '<?php echo base_url();?>map-post-district';
                                                        $.ajax({
                                                            type: "POST",
                                                            url: url,
                                                            data: {id: id},
                                                            success: function (data, status) {
                                                                $('#store_select_district').html(data);
                                                            }
                                                        })
                                                    })
                                                })
                                            </script>
                                        </div>

                                        <div class="col-sm-4 padding-5">
                                            <select id="store_select_district" class="form-control" tabindex="3"
                                                    aria-hidden="true" onchange="loadDistrictStore()">
                                                <option value="" selected="">--- <?php echo rear('chose_dist')?> ---</option>
                                                <?php if (!empty($list_district)) {
                                                    foreach ($list_district as $ci) {
                                                        ?>
                                                        <option <?php if (isset($_GET['iDistrict']) && !empty($_GET['iDistrict']) && $_GET['iDistrict'] == $ci->id) {
                                                            echo 'selected';
                                                        } ?> value="<?php echo $ci->id; ?>"><?php echo $ci->title; ?></option>
                                                    <?php }
                                                } ?>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div class="distribution-map ">
                    <div class="row">
                        <div class="col-sm-4  range">
                            <div class="result address-wrapper">
                                <ul class="address-list custom-scroll">
                                    <?php $i = 1;
                                    foreach ($office as $off) {
                                        $lang = explode(',', $off->location)
                                        ?>
                                        <li class="">
                                            <a class="inner-location" href="javascript:void(0);"
                                               data-lat="<?php echo $lang[0]; ?>" data-lng="<?php echo $lang[1]; ?>"
                                               data-title="<?php echo $off->$GLOBALS['title']; ?>"
                                               data-image="<?php echo $off->image; ?>"
                                               data-phone="<?php echo $off->phone; ?>"
                                               data-content="<?php echo $off->$GLOBALS['title']; ?>"
                                               data-city_id="<?php echo $off->id_city; ?>"
                                               data-district_id="<?php echo $off->district; ?>">
                                                <address>
                                                    <img src="<?php echo base_url('skin/frontend/images/office-add.png')?>" alt="">
                                                    <?php echo $off->$GLOBALS['title'].':'.$off->$GLOBALS['address'].'( <i class="fa fa-phone"></i>'.$off->phone.' )'; ?>
                                                </address>
                                            </a>
                                        </li>
                                        <?php $i++;
                                    } ?>

                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-8 map-wrapper">
                            <div id="map-canvas"
                                 style="position: relative; overflow: hidden;width: 100%; height: 505px;"></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <script type="text/javascript">
            var view_on_map = 'Xem đường đi';
            $(document).ready(function () {
                $(".custom-scroll").mCustomScrollbar({
                    theme: "3d-thick-dark"
                });
                $.distribution.init();
            })
        </script>
        <script type="text/javascript">
            function loadDistrict(div_city, div_district, current) {
                var iRegion = $("#store_select_region").val();
                var iCit = parseInt($("#store_select_city").val());
                var url = '<?php echo base_url().rear('daily_url');?>?iRegion=' + iRegion + '&iCit=' + iCit;
                window.location.href = url;
            }
            function loadDistrictStore() {
                var iRegion = $("#store_select_region").val();
                var iCit = parseInt($("#store_select_city").val());
                var iDistrict = parseInt($("#store_select_district").val());
                var url = '<?php echo base_url().rear('daily_url');?>?iRegion=' + iRegion + '&iDistrict=' + iDistrict + '&iCit=' + iCit;
                window.location.href = url;
            }</script>


    </div>
</div>

