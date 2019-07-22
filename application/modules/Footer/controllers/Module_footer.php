<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_footer extends MX_Controller
{

    public function __construct()
    {
        parent::__construct();
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index()
    {
        $data['cate_bottom'] = $this->Common_model->get_data('categories',array('show'=>1,'bottom_menu'=>1),array('order_bottom','asc'));
        $data['ads'] = $this->Common_model->get_one('ads',array('show'=>1,'position'=>'middle'));
        $data['sett'] = $GLOBALS['sett'];
        $data['supp'] = $GLOBALS['supp'];
        return $this->load->view('Footer/Footer_index', $data);
    }
}
