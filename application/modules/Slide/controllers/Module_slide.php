<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_slide extends MX_Controller {
    public $lang='vi';
    public function __construct()
    {
        parent::__construct();
        if($this->session->userdata('lang') !=''){
            $this->lang=$this->session->userdata('lang');
        }
    }
    public function index()
    {

        $data['slide'] = $this->Common_model->get_data('slide',array('show'=>1));
        $data['categories_sl'] = $this->Common_model->get_data('categories',array('show'=>1,'top_menu'=>1),array('order_top','asc'));
        $data['supp'] = $this->Common_model->get_one('support');
        return $this->load->view('Slide/Slide_index',$data);
    }
}
