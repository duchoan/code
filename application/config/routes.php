<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'Home';
$route['language-vi']='Language/Module_lang/lang_vi';
$route['language-en']='Language/Module_lang/lang_en';
$route['register-download']='Products/Module_product/register';
//ACTION FRONTEND

$route['post-comment']='Article/Module_article/comment';

//ACTION FRONTEND
//ACTION ALL
$route['admin/action_all']='Admin/action/action_all';
$route['admin/action_publish']='Admin/action/publish_ajax';
$route['admin/action_unpublish']='Admin/action/unpublish_ajax';
$route['admin/action_addorder']='Admin/action/addorder_ajax';
$route['admin/delete_ajax']='Admin/action/delete_ajax';
$route['admin/count_visit']='Admin/action/count_visit';
$route['admin/ajax_order_quick']='Admin/action/ajax_order_quick';

//ACTION ALL
$route['quick-edit']='Admin/Edit/quick_edit';
$route['quick-update-time']='Admin/Edit/quick_update_time';
$route['admin-direct'] = 'Admin/login';
$route['admin-direct/logout'] = 'Admin/login/log_out';
$route['admin-direct/dashboard'] = 'Admin/admin';
$route['admin-direct/ajax-list'] = 'Admin/admin/permission';
$route['admin-direct/get_categories'] = 'Admin/admin/get_cate';
$route['admin-direct/get_cate_child'] = 'Admin/admin/get_child';
$route['admin-direct/forgot-password'] = 'Admin/login/forgot';
$route['admin-direct/create_language'] = 'Admin/admin/create_language';
$route['admin-direct/notice'] = 'Admin/admin/notice';
$route['admin-direct/(:any)'] = 'Admin/admin/check_permission';
$route['support/mail_test'] = 'Admin/support/send';
$route['post-city'] = 'Admin/admin/district';
$route['post-country'] = 'Admin/admin/country';
$route['admin-reply-comment'] = 'Admin/admin/rep_com';
//end router admin
$route['rpc'] = 'Products/Module_product/rpc';
$route['dbc'] = 'Products/Module_product/dbc';

//map

$route['he-thong-phan-phoi']='Content/Content/office';
$route['distribution-system']='Content/Content/office';
$route['ajax-search']='Content/Content/search';
$route['load-map']='Content/Content/load_map';
$route['map-post-district'] = 'Content/Content/district';
$route['map-post-country'] = 'Content/Content/country';


$route['lien-he'] = 'Contact/Module_contact/index';
$route['contact-us'] = 'Contact/Module_contact/index';
$route['contact'] = 'Contact/Module_contact/index';
$route['payment'] = 'Article/Module_article/payments';
$route['payment-order'] = 'Article/Module_article/payment_order';
$route['payment-now'] = 'Article/Module_article/payment_now';
$route['payment-vnpay'] = 'Article/Module_article/payment_vnpay';

$route['gio-hang'] = 'Cart/Module_cart/display_cart';
$route['checkout'] = 'Cart/Module_cart/checkout';
$route['cart/checkout'] = 'Cart/Module_cart/checkout';
$route['cart/(:any)'] = 'Cart/Module_cart/index';
$route['cart/(:any)/(:any)'] = 'Cart/Module_cart/index';
$route['update-cart']='Cart/Module_cart/update_cart_j';
$route['delete-cart']='Cart/Module_cart/delete_cart_j';
$route['buy-order']='Products/Module_product/checkout';
$route['thong-tin-dat-hang']='Cart/Module_cart/checkout_info';
$route['dat-hang-thanh-cong']='Cart/Module_cart/checkout_success';

$route['dang-nhap-tai-khoan']='User/Module_user/index';
$route['login-account']='User/Module_user/index';
$route['dang-xuat-tai-khoan']='User/Module_user/logout';
$route['logout']='User/Module_user/logout';
$route['dang-ky-tai-khoan']='User/Module_user/register_office';
$route['register-account']='User/Module_user/register_office';
$route['tai-khoan-cua-toi']='User/Module_user/account';
$route['account-info']='User/Module_user/account';
$route['sua-thong-tin-tai-khoan']='User/Module_user/edit_account';
$route['edit-account']='User/Module_user/edit_account';
$route['register-online']='User/Module_user/register_dl';

$route['login-cart']='User/Module_user/login_cart';
$route['register-office-one']='Content/Content/register_office';
$route['comment-primary']='Comment/Comment/comment_post';
$route['comment-reply-parent']='Comment/Comment/add_rep_parent';
$route['add-like']='Products/Module_product/add_like';






$route['search'] = 'Search/Module_search/index';
$route['search/(:any)'] = 'Search/Module_search/index/$';
$route['tim-kiem/(:any)'] = 'Search/Module_search/index/$1';
$route['tim-kiem'] = 'Search/Module_search/index';

$route['(:any)'] = 'Rewrite/index';
$route['(:any)/(:any)'] = 'Rewrite/index';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;