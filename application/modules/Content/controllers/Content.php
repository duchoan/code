<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Content extends MX_Controller
{
    public $setting = '';

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
        $data['sett'] = $GLOBALS['sett'];
        $data['supp'] = $GLOBALS['supp'];
        $arr_cate = $this->Common_model->get_data('categories', array('show' => 1));
        $arr_obj = array();
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
            }
        }
        echo '<pre>';
        print_r($arr_obj);
        echo '</pre>';
        $data['cate_home'] = $this->Common_model->get_data('categories', array('taxonomy' => 'cate_product', 'show' => 1, 'show_home' => 1), array('order_home', 'asc'));
        $data['pro_home']='';
        if(!empty($data['cate_home'])){
            foreach ($data['cate_home'] as $cat){
                $arr_category = $this->Common_model->get_all_cat($arr_obj, $cat->id, array());
                $this->db->group_start();
                foreach ($arr_category as $it) {
                    $this->db->or_like('array_cate', ',' . $it . ',');
                }
                $this->db->group_end();
                $this->db->distinct();
                $data['pro_home'][$cat->id] = $this->Common_model->get_data('product', array('show' => 1, 'show_home' => 1), array('id', 'desc'), 20);
            }
        }
        $data['pro_home_stick'] = $this->Common_model->get_data('product', array('show' => 1,'stick'=>1), array('id', 'desc'),8);
        $data['pro_home_new'] = $this->Common_model->get_data('product', array('show' => 1), array('id', 'desc'), 12);
        $data['cate_art_home'] = $this->Common_model->get_one('categories', array('taxonomy' => 'cate_article', 'show' => 1, 'show_home' => 1, 'type_home' => 2));
        $data['art_home'] = '';
        if (!empty($data['cate_art_home'])) {
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_art_home']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['art_home'] = $this->Common_model->get_data('article', array('show' => 1, 'show_home' => 1), array('id', 'desc'), 4);
        }
        $data['cate_video_home'] = $this->Common_model->get_one('categories', array('taxonomy' => 'cate_article', 'show' => 1, 'show_home' => 1, 'type_home' => 3));
        $data['video'] = '';
        if (!empty($data['cate_video_home'])) {
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_video_home']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['video'] = $this->Common_model->get_data('article', array('show' => 1, 'show_home' => 1), array('id', 'desc'), 4);
        }
        $data['cate_com_home'] = $this->Common_model->get_one('categories', array('taxonomy' => 'cate_article', 'show' => 1, 'show_home' => 1, 'type_home' => 4));
        $data['comment'] = '';
        if (!empty($data['cate_com_home'])) {
            $arr_category = $this->Common_model->get_all_cat($arr_obj, $data['cate_com_home']->id, array());
            $this->db->group_start();
            foreach ($arr_category as $it) {
                $this->db->or_like('array_cate', ',' . $it . ',');
            }
            $this->db->group_end();
            $this->db->distinct();
            $data['comment'] = $this->Common_model->get_data('article', array('show' => 1, 'show_home' => 1), array('id', 'desc'), 4);
        }

        $data['service'] = $this->Common_model->get_data('service', array('show' => 1));
        $data['ads_top'] = $this->Common_model->get_one('ads',array('show'=>1,'position'=>'top'));
        return $this->load->view('Content/Content', $data, true);
    }

    function office()
    {
        $data['country'] = $this->Common_model->get_data('country', array('show' => 1));
        $data['list_city']='';
        if(isset($_GET['iRegion']) && !empty($_GET['iRegion']) && is_numeric($_GET['iRegion']) ){
            $data['list_city'] = $this->Common_model->get_data('city', array('show' => 1, 'country' =>$_GET['iRegion']));
        }
        $data['list_district']='';
        if(isset($_GET['iCit']) && !empty($_GET['iCit']) && is_numeric($_GET['iCit']) ){
            $data['list_district'] = $this->Common_model->get_data('district', array('show' => 1, 'id_city' =>$_GET['iCit']));
        }
        $data['city'] = $this->Common_model->get_one('city', array('show' => 1, 'stick' => 1));
        $data['district'] = '';
        $data['office'] = '';
        if (!empty($data['city'])) {
            $data['district'] = $this->Common_model->get_data('district', array('show' => 1, 'id_city' => $data['city']->id));
            $data['office'] = $this->Common_model->get_data('office', array('show' => 1, 'id_city' => $data['city']->id));
        }
        if(isset($_GET['iCit']) && !empty($_GET['iCit']) && is_numeric($_GET['iCit']) ){
            $data['office'] = $this->Common_model->get_data('office', array('show' => 1, 'id_city' => $_GET['iCit']));
        }
        if(isset($_GET['iCit']) && !empty($_GET['iCit']) && is_numeric($_GET['iCit'])&& isset($_GET['iDistrict']) && !empty($_GET['iDistrict']) && is_numeric($_GET['iDistrict']) ){
            $data['office'] = $this->Common_model->get_data('office', array('show' => 1, 'id_city' => $_GET['iCit'],'district'=>$_GET['iDistrict']));
        }
        $data['content'] = $this->load->view('Content/Content_map', $data, true);
        $data['meta_key'] = '';
        $data['meta_des'] = '';
        $data['title'] = '';
        $this->load->view('index', $data);
    }
    function country()
    {
        $html = '<option value="">--- Chọn tỉnh --- </option>';
        if (!empty($_POST['id'])) {
            $district = $this->Common_model->get_data('city', array('show' => 1, 'country' => $_POST['id']));
            if (!empty($district)) {

                foreach ($district as $pro) {
                    $html .= '<option value="' . $pro->id . '">' . $pro->title . '</option>';
                }
            }
            echo $html;
        }
    }
    function district()
    {
        $html = '<option value="" selected="">--- Chọn Huyện ---</option>';
        if (!empty($_POST['city'])) {
            $district = $this->Common_model->get_data('district', array('show' => 1, 'id_city' => $_POST['city']));
            if (!empty($district)) {
                foreach ($district as $pro) {
                    $html .= '<option value="' . $pro->id . '">' . $pro->title . '</option>';
                }
            }
        }
        echo $html;
    }
    function search()
    {
        $data['location'] = '';
        if (!empty($_POST['city'])) {
            $this->db->where('id_city', $_POST['city']);
        }
        if (!empty($_POST['state'])) {
            $this->db->where('district', $_POST['state']);
        }
        if (!empty($_POST['key'])) {
            $this->db->like('title', $_POST['key']);
        }
        $data['office'] = $this->Common_model->get_data('office', array('show' => 1));
        if (!empty($_POST['city'])) {
            $city = $this->Common_model->get_one('city', array('show' => 1, 'id' => $_POST['city']));
            if (!empty($city)) {
                $data['location'] = $city->location;
            }
        }
        if (!empty($_POST['state'])) {
            $district = $this->Common_model->get_one('district', array('show' => 1, 'id' => $_POST['state']));
            if (!empty($city)) {
                $data['location'] = $district->location;
            }
        }
        if (!empty($data['office'])) {
            $count = 'Tìm được ' . count($data['office']) . ' dữ liệu.';
        } else {
            $count = 'Không tìm thấy dữ liệu';
        }
        $value = array('mess_num' => $count, 'html' => $this->load->view('Content/Content_result', $data, true));
        $output = json_encode($value);
        echo $output;
    }

    function load_map()
    {
        if (!empty($_GET['id'])) {
            $this->db->where('id', $_GET['id']);
        }
        if (!empty($_GET['city'])) {
            $this->db->where('id_city', $_GET['city']);
        }
        if (!empty($_GET['state'])) {
            $this->db->where('district', $_GET['state']);
        }
        if (!empty($_GET['key'])) {
            $this->db->like('title', $_GET['key']);
        }
        $data['office'] = $this->Common_model->get_data('office', array('show' => 1));
        $data['location'] = '';
        $data['zoom'] = 5;
        if (!empty($_GET['city'])) {
            $city = $this->Common_model->get_one('city', array('show' => 1, 'id' => $_GET['city']));
            if (!empty($city)) {
                $data['location'] = $city->location;
                $data['zoom'] = $city->zoom;
            }
        }
        if (!empty($_GET['state'])) {
            $district = $this->Common_model->get_one('district', array('show' => 1, 'id' => $_GET['state']));
            if (!empty($district)) {
                $data['location'] = $district->location;
                $data['zoom'] = $district->zoom;
            }
        }
        if (!empty($_GET['id'])) {
            $item = $this->Common_model->get_one('office', array('show' => 1, 'id' => $_GET['id']));
            if (!empty($item)) {
                $data['location'] = $item->location;
                $data['zoom'] = $item->zoom;
            }
        }
        if (!empty($_GET['key'])) {
            $this->db->like('title', $_GET['key']);
            $item = $this->Common_model->get_one('office', array('show' => 1));
            if (!empty($item)) {
                $data['location'] = $item->location;
                $data['zoom'] = $item->zoom;
            }
        }
        $this->load->view('Content/Load_map', $data);
    }



    function post_ajax()
    {
        $arr_cate = $this->Common_model->get_data('categories', array('show' => 1));
        $arr_obj = '';
        $data['cate_block'] = '';
        if (!empty($arr_cate)) {
            foreach ($arr_cate as $cat) {
                $arr_obj[$cat->parentid][] = $cat;
                $data['cate_block'][$cat->id] = $cat;
            }
        }
        if (!empty($_POST)) {
            if (!empty($_POST['id'])) {
                $arr_category = $this->Common_model->get_all_cat($arr_obj, $_POST['id'], array());
                $data['article'] = $this->Common_model->get_data_in('article', array('category', $arr_category), array('show' => 1, 'show_home' => 1), array('id', 'desc'), array($_POST['page'], $_POST['number']));
                if (!empty($data['article'])) {
                    $data['type'] = $_POST['type'];
                    $this->load->view('Content/Top', $data);
                }
            }
        }
    }

    function booking()
    {
        if (!empty($_COOKIE['book'])) {
            echo 3;
        } else {
            if (!empty($_POST['name'])) {
                $this->Common_model->insert_data('order_course', $_POST);
                setcookie('book', 'done', time() + 300);
                echo 1;
            } else {
                echo 2;
            }
        }
    }

    function create_cate($cate, $html, $select)
    {
        if (!empty($cate)) {
            $cate_child = $this->Common_model->get_data('categories', array('show' => 1, 'taxonomy' => 'cate_product', 'parentid' => $cate->id));
            if (!empty($cate_child)) {
                foreach ($cate_child as $child) {
                    if ($select == $child->id) {
                        $select = 'selected';
                    } else {
                        $select = '';
                    }
                    $s1 = $html . '--';
                    echo '<option value="' . $child->id . '" ' . $select . '>' . $s1 . $child->title . '</option>';
                    $this->create_cate($child, $s1, $select);
                }
            }
        }
    }
    function register_office(){
        if(isset($_POST['office'])){
            $check = $this->Common_model->get_one('email',array('email'=>$_POST['office']));
            if(!empty($check)){
                $output = array('mes' =>0,'html'=>rear('email_err'));
                $output = json_encode($output);
                echo $output;
            }else{
                $this->Common_model->insert_data('email',array('email'=>$_POST['office'],'position'=>$_POST['position']));
                $output = array('mes' =>1,'html'=>rear('email_success'));
                $output = json_encode($output);
                echo $output;
            }
        }
    }
}
