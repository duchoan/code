<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Common extends CI_Hooks
{
    private $rear = '';

    function __construct()
    {
        parent::__construct();
        $CI = get_instance();

    }

    public function Get_setting()
    {
        $CI = get_instance();
        $GLOBALS['sett'] = $CI->Common_model->get_one('setting');
        $GLOBALS['supp'] = $CI->Common_model->get_one('support');
        $rou = $CI->uri->segment(1);
        if(!empty($rou)){
            $rou1 = $CI->Common_model->get_one('alias', array('value' => $rou));
            if (!empty($rou1)) {
                $GLOBALS['alias_cart'] ='gio-hang';
                $_SESSION['rear'] = '';

            }else{
                $rou1 = $CI->Common_model->get_one('alias', array('value_en' =>$rou));
                if (!empty($rou1)) {
                    $_SESSION['rear'] = '_en';
                    $GLOBALS['alias_cart'] ='list-cart';
                }else{
                    if ($rou == 'contact-us' || $rou=='language-en'|| $rou=='search' || $rou=='contact' || $rou=='distribution-system' || $rou=='excellent-paintings'){
                        $_SESSION['rear'] = '_en';
                        $GLOBALS['alias_cart'] ='list-cart';
                    }else {
                        $_SESSION['rear'] = '';
                        $GLOBALS['alias_cart'] ='gio-hang';
                    }
                }
            }
        }else{
            if(empty($_SESSION['rear'])){
                $_SESSION['rear'] = '';
                $GLOBALS['alias_cart'] ='gio-hang';
            }
        }
        $GLOBALS['title'] = 'title' . $_SESSION['rear'];
        $GLOBALS['intro'] = 'introtext' . $_SESSION['rear'];
        $GLOBALS['value'] = 'value' . $_SESSION['rear'];
        $GLOBALS['in_value'] = 'in_value' . $_SESSION['rear'];
        $GLOBALS['alias'] = 'alias' . $_SESSION['rear'];
        $GLOBALS['content_text'] = 'content_text' . $_SESSION['rear'];
        $GLOBALS['address'] = 'address' . $_SESSION['rear'];
        $GLOBALS['footer'] = 'footer' . $_SESSION['rear'];
        $GLOBALS['address_contact'] = 'address_contact' . $_SESSION['rear'];
        $GLOBALS['excerpt'] = 'excerpt' . $_SESSION['rear'];
        $GLOBALS['customer'] = 'customer' . $_SESSION['rear'];
        $GLOBALS['title_other'] = 'title_other' . $_SESSION['rear'];
        $GLOBALS['hyperlink'] = 'hyperlink' . $_SESSION['rear'];
    }

}
