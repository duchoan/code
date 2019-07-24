<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_header extends MX_Controller
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
        $data['setting'] =$GLOBALS['sett'];
        return $this->load->view('Header/Header_index', $data);
    }

    public function menu_top()
    {
        $data['supp'] = $GLOBALS['supp'];
        $data['sett'] = $GLOBALS['sett'];
        return $this->load->view('Header/Header_menu_top', $data);
    }

    public function main_menu()
    {
        $data['categories'] = $this->Common_model->get_data('categories', array('main_menu' => 1,'taxonomy'=>'cate_product','show' => 1, 'parentid' => 0), array('order_main', 'asc'));
        $data['cate_child'] = '';
        if (!empty($data['categories'])) {
            foreach ($data['categories'] as $cate) {
                $data['cate_child'][$cate->id] = $this->Common_model->get_data('categories', array( 'show' => 1, 'parentid' => $cate->id), array('order', 'asc'));
            }
        }
        $data['menu_top'] = $this->Common_model->get_data('categories', array('top_menu' => 1,'show' => 1), array('order_top', 'asc'));
        $data['sett'] = $GLOBALS['sett'];
        $data['supp'] = $GLOBALS['supp'];

        if(isset($_COOKIE['rear'])){
            $data['rear'] = $_COOKIE['rear'] ;
        }else{$data['rear'] = '' ;}
        return $this->load->view('Header/Header_main_menu', $data);
    }

    public function menu_bottom()
    {
        $data['categories'] = $this->Common_model->get_data('categories', array('taxonomy' => 'cate_article', 'bottom_menu' => 1, 'show' => 1, 'parentid' => 0), array('order_bottom', 'asc'));
        $alias = $this->Common_model->get_data('alias', array('taxonomy' => 'categories'));
        $data['link'] = '';
        if (!empty($alias)) {
            foreach ($alias as $al) {
                $data['link'][$al->id_field] = $al->value;
            }
        }
        return $this->load->view('Header/Header_menu_bottom', $data);
    }

    public function main_child()
    {
        $data['slide'] = $this->Common_model->get_data('slide',array('show'=>1));
        $data['menu_course'] = $this->Common_model->get_data('categories', array('main_menu' => 1, 'show' => 1, 'parentid' => 0,'taxonomy'=>'cate_product'), array('order_main', 'asc'));
        if(isset($_COOKIE['rear'])){
            $data['rear'] = $_COOKIE['rear'] ;
        }else{$data['rear'] = '' ;}
        $this->load->view('Header/Header_menu_child', $data);
    }
    public function create_child($catid = '', $html =''){
        if(isset($_COOKIE['rear'])){
            $rear = $_COOKIE['rear'] ;
        }else{$rear = '' ;}
        $title = 'title' . $rear;
        if(!empty($catid)){
            $child = $this->Common_model->get_data('categories', array( 'show' => 1, 'parentid' => $catid), array('order_main', 'asc'));
            if(!empty($child)){
                $html .='<ul class="sub-menu">' ;
                foreach ($child as $cd){
                    $html .='<li>';
                    $html .='<a href="'.base_url() . $cd->alias.'"';
                    $html .='title="'.$cd->$title.'">'.$cd->$title.'</a>';
                    $this->create_child($cd->id);
                    $html .='</li>';
                }
                $html .='</ul>' ;
            }
        }
        echo $html;
    }
    public function create_child1($catid = '', $html =''){
        if(isset($_COOKIE['rear'])){
            $rear = $_COOKIE['rear'] ;
        }else{$rear = '' ;}
        $title = 'title' . $rear;
        if(!empty($catid)){
            $child = $this->Common_model->get_data('categories', array( 'show' => 1, 'parentid' => $catid), array('id', 'asc'));
            if(!empty($child)){
                foreach ($child as $cd){
                    $html .='<p class="p-sub"><i class="fa fa-circle-o"></i>';
                    $html .='<a href="'.base_url() . $cd->alias.'"';
                    $html .='title="'.$cd->$title.'">'.$cd->$title.'</a>';
                    $this->create_child($cd->id);
                    $html .='</p>';
                }
            }
        }
        echo $html;
    }
    public function create_sub($id = 0)
    {
        $cate_sub = $this->Common_model->get_data('categories', array('show' => 1, 'parentid' => $id), array('order', 'asc'));
        $html = '';
        if ($cate_sub) {
            $html .= '<ul class="sub-menu">';
            foreach ($cate_sub as $cat) {
                $html .= '<li>';
                $html .= '<a href="' . base_url() . $cat->alias . '" title="' . $cat->title . '">' . $cat->title . '</a>';
                $html .= '</li>';
            }
            $html .= '</ul>';

        }
        return  $html;
    }
}
