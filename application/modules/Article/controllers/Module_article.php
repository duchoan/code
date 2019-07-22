<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_article extends MX_Controller
{

    private $per_page = 9;
    private $total_rows = 6;

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

    }

    public function category()
    {
        $alias = $this->uri->segment(1);
        $obj_alias = $this->Common_model->get_one('alias', array($GLOBALS['value'] => $alias));
        $category = $this->Common_model->get_one('categories', array('id' => $obj_alias->id_field));
        if (!empty($category)) {
            $data['sett'] = $GLOBALS['sett'];
            $arr_cate = $this->Common_model->get_data('categories', array('show' => 1, 'taxonomy' => 'cate_article'));
            $arr_obj = '';
            if (!empty($arr_cate)) {
                foreach ($arr_cate as $cat) {
                    $arr_obj[$cat->parentid][] = $cat;
                }
            }
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $category->id, array());
            $data['cate'] = $category;
            $arr = explode(',', $category->array_cate);
            $data['arr_cate'] = $this->Common_model->get_data_in('categories', array('id', $arr), array('show' => 1), array('parentid', 'asc'));
            if ($category->number_post > 0) {
                $this->per_page = $category->number_post;
            }
            $orderby = array('id', 'desc');
            $page = '';
            if (isset($_GET['per_page']) && !empty($_GET['per_page'])) {
                $offset = ($_GET['per_page'] - 1) * $category->number_post;
                $page = rear('page') . $_GET['per_page'];
            } else {
                $offset = 0;
            }
            if ($category->type_categories == 0) {
                $data['content'] = $this->load->view('Article/Article_category_one', $data, true);
            } else if ($category->type_categories == 1) {
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['article'] = $this->Common_model->get_data('article', array('show' => 1), $orderby, array($this->per_page, $offset));
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $this->total_rows = $this->Common_model->get_total('article', array('show' => 1));
                $this->paging1();
                $data['total'] = $this->total_rows;
                $data['content'] = $this->load->view('Article/Article_category_video', $data, true);
            } else if ($category->type_categories == 2) {
                $data['content'] = $this->load->view('Article/Article_category_about', $data, true);
            } else {

                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['article'] = $this->Common_model->get_data('article', array('show' => 1), $orderby, array($this->per_page, $offset));
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $this->total_rows = $this->Common_model->get_total('article', array('show' => 1));
                $this->paging1();
                $data['total'] = $this->total_rows;
                $data['content'] = $this->load->view('Article/Article_category', $data, true);
            }
            $data['fb_image'] = $category->image;
            $data['meta_key'] = meta_site($category, 'meta_key') . $page;
            $data['meta_des'] = meta_site($category, 'meta_des') . $page;
            $data['title'] = show_meta($category) . $page;
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }

    public function detail()
    {
        $alias = $this->uri->segment(1);
        $obj_alias = $this->Common_model->get_one('alias', array($GLOBALS['value'] => $alias));
        $article = $this->Common_model->get_one('article', array('id' => $obj_alias->id_field));
        $data['supp'] = $GLOBALS['supp'];
        if (!empty($article)) {
            $view = (int)$article->views +1;
            $this->Common_model->update_data('article',array('id'=>$article->id),array('views'=>$view));
            $arr_cate = $this->Common_model->get_data('categories', array('show' => 1, 'taxonomy' => 'cate_article'));
            $arr_obj = '';
            if (!empty($arr_cate)) {
                foreach ($arr_cate as $cat) {
                    $arr_obj[$cat->parentid][] = $cat;
                }
            }
            $data['art'] = $article;

            $category = $this->Common_model->get_one('categories', array('id' => $article->category));
            $arr = explode(',', $category->array_cate);
            $data['arr_cate'] = $this->Common_model->get_data_in('categories', array('id', $arr), array('show' => 1));
            $data['cate'] = $category;
            if ($category->type_categories == 1) {
                $orderby = array('id', 'desc');
                $page = '';
                if (isset($_GET['per_page']) && !empty($_GET['per_page'])) {
                    $offset = ($_GET['per_page'] - 1) * $category->number_post;
                    $page = rear('page') . $_GET['per_page'];
                } else {
                    $offset = 0;
                }
                $arr_category = $this->Common_model->get_all_cat($arr_obj, $article->category, array());
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['article'] = $this->Common_model->get_data('article', array('show' => 1,'id !=' => $article->id), $orderby, array($this->per_page, $offset));
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $this->total_rows = $this->Common_model->get_total('article', array('show' => 1,'id !=' => $article->id));
                $this->paging1();
                $data['content'] = $this->load->view('Article/Article_detail_video', $data, true);
            }  else {
                $arr_category = $this->Common_model->get_all_cat($arr_obj, $article->category, array());
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['more_art'] = $this->Common_model->get_data('article', array('id !=' => $article->id), array('id', 'desc'), 12);
                $data['content'] = $this->load->view('Article/Article_detail', $data, true);
            }
            $data['sett'] = $GLOBALS['sett'];
            $data['fb_image'] = $article->image;
            $data['meta_key'] = meta_site($article, 'meta_key');
            $data['meta_des'] = meta_site($article, 'meta_des');
            $data['title'] = show_meta($article);
            $data['banner'] = $category->banner;
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }
    public function paging()
    {
        if ($this->session->userdata('lang') == 'en') {
            $next = '>>';
            $prev = '<<';
        } else {
            $next = '>>';
            $prev = '<<';
        }
        $this->load->library('pagination');
        $config['base_url'] = base_url() . $this->uri->segment(1);
        $config['total_rows'] = $this->total_rows;
        $config['per_page'] = $this->per_page;
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
        $config['first_link'] = '<';
        $config['last_link'] = '>';
        $config['prev_link'] = $prev;
        $config['next_link'] = $next;
        $config['next_tag_open'] = '<li class="pagination-next">';
        $config['next_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }

    function removeqsvar($url, $varname)
    {
        list($urlpart, $qspart) = array_pad(explode('?', $url), 2, '');
        parse_str($qspart, $qsvars);
        unset($qsvars[$varname]);
        $newqs = http_build_query($qsvars);
        if (!empty($newqs)) {
            return $urlpart . '?' . $newqs;
        } else {
            return $urlpart;
        }

    }

    public
    function paging1()
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
        $config['use_page_numbers'] = TRUE;
        $config['first_tag_open'] = '<li>';
        $config['first_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li>';
        $config['last_tag_close'] = '</li>';
        $config['full_tag_open'] = '<ul>';
        $config['full_tag_close'] = '</ul>';
        $config['num_tag_open'] = '<li>';
        $config['num_tag_close'] = '</li>';
        $config['cur_tag_open'] = '<li><a class="active" >';
        $config['cur_tag_close'] = '</a></li>';
        $config['prev_tag_open'] = '<li class="pagination-prev">';
        $config['prev_tag_close'] = '</li>';
        $config['last_tag_open'] = '<li class="pagination-next">';
        $config['last_tag_close'] = '</li>';
        $config['first_tag_open'] = '<li class="pagination-next">';
        $config['first_tag_close'] = '</li>';
        $config['first_link'] = '|<';
        $config['last_link'] = '>|';
        $config['prev_link'] = '<i class="fa fa-angle-left"></i>';
        $config['next_link'] = '<i class="fa fa-angle-right"></i>';
        $config['next_tag_open'] = '<li class="pagination-next">';
        $config['next_tag_close'] = '</li>';
        $this->pagination->initialize($config);
    }
}
