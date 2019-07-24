<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_search extends MX_Controller
{
    public $setting = '';
    private $per_page = 24;
    private $total_rows = 6;
    public function __construct()
    {
        parent::__construct();
        $this->setting = $GLOBALS['sett'];
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index()
    {
        $data['cat_pro'] = $this->Common_model->get_one('categories',array('show'=>1,'parentid'=>0,'taxonomy'=>'cate_product'));
        $data['cate_child']  ='';
        $data['cate_baby'] = '';
        if(!empty($data['cat_pro'])){

            $data['cate_child'] = $this->Common_model->get_data('categories',array('show'=>1,'parentid'=>$data['cat_pro']->id));
            $data['cate_baby'] ='';
            if(!empty($data['cate_child'])){
                foreach ($data['cate_child'] as $cat){
                    $data['cate_baby'][$cat->id] = $this->Common_model->get_data('categories',array('show'=>1,'parentid'=>$cat->id));
                }
            }
        }
        $data['pro_hot'] = $this->Common_model->get_data('product',array('show'=>1 ),array('id','desc'),5);


        if (isset($_GET['sortby'])) {
            $val = $_GET['sortby'];
            if ($val == 'default') {
                $orderby = array('id', 'desc');
            } else {
                $val = explode('-', $val);
                $orderby = array($val[0], $val[1]);
            }
        } else {
            $orderby = array('id', 'desc');
        }
        if (isset($_GET['per_page'])) {
            $offset = $_GET['per_page'];
        } else {
            $offset = 0;
        }
        if (isset($_GET['key'])) {
            $this->db->like($GLOBALS['title'],$_GET['key']);
        }
        $data['product'] = $this->Common_model->get_data('product', array('show' => 1),$orderby, array($this->per_page, $offset));
        if (isset($_GET['key'])) {
            $this->db->like($GLOBALS['title'],$_GET['key']);
        }
        $this->total_rows = $this->Common_model->get_total('product',array('show' => 1));
        $this->paging();
        $data['total'] = $this->total_rows ;
        $data['sett'] = $this->setting;
        $data['content'] = $this->load->view('Search/Search_index', $data, true);
        $data['meta_key'] = $this->setting->meta_key;
        $data['meta_des'] = $this->setting->meta_des;
        $data['title'] = $this->setting->title;
        $this->load->view('index', $data);
    }
    function removeqsvar($url, $varname)
    {
        list($urlpart, $qspart) = array_pad(explode('?', $url), 2, '');
        parse_str($qspart, $qsvars);
        unset($qsvars[$varname]);
        $newqs = http_build_query($qsvars);
        return $urlpart . '?' . $newqs;
    }

    public
    function paging()
    {
        $actual_link = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $actual_link = $this->removeqsvar($actual_link, 'per_page');
        if (isset($_COOKIE['rear'])) {
            $next = 'Next';
            $prev = 'Prev';
        } else {
            $next = 'Sau';
            $prev = 'Trước';
        }
        $this->load->library('pagination');
        $config['base_url'] = $actual_link;
        $config['total_rows'] = $this->total_rows;
        $config['per_page'] = $this->per_page;
        $config['page_query_string'] = TRUE;
        $config['uri_segment'] = 2;
        $config['num_links'] = 10;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['full_tag_open'] = '<ul>';
        $config['full_tag_close'] = '</ul>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li><a class="activepage" >';
        $config['cur_tag_close'] = '</a></li>';
        $config['prev_tag_open'] = '<li class="pagination-prev">';
        $config['prev_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="pagination-next">';
        $config['last_tag_close'] = '</li>';
        $config['first_tag_open'] = '<li class="pagination-next">';
        $config['first_tag_close'] = '</li>';
        $config['first_link'] = '|<';
        $config['last_link'] = '>|';
        $config['prev_link'] = $prev;
        $config['next_link'] = $next;
        $config['next_tag_open'] = '<li class="pagination-next">';
        $config['next_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }
}