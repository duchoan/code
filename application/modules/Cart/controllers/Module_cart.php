<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_cart extends MX_Controller
{
    public $rear = 'vi';
    private $per_page = 9;
    private $total_rows = 6;

    public function __construct()
    {
        parent::__construct();
        if ($this->session->userdata('lang') != '') {
            $this->rear = $this->session->userdata('lang');
        }
        $this->load->library(array('security', 'cart'));
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index()
    {
        $action = $this->uri->segment(2);
        switch ($action) {
            case 'add':
                $this->add_cart();
                break;
            case 'add-ajax':
                $this->add_cart_ajax();
                break;
            case 'update':
                $this->update_cart();
                break;
            case 'delete':
                $this->delete_cart();
                break;
            case 'gio-hang':
                $this->display_cart();
                break;
            default:
                break;
        }
    }

    function add_cart_ajax()
    {
        if (isset($_POST)) {
            $id = $_POST['id'];
            $number = $_POST['qty'];
            $this->cart->product_name_rules = '\.\:\-_ a-z0-9áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọơớờởỡợôốồổỗộúùủũụưứừửữựíìỉĩịýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴĐ()';
            $product = $this->Common_model->get_one('product', array('id' => $id, 'show' => 1));
            if (!empty($product)) {
                $arr = array(
                    'id' => $product->id,
                    'qty' => $number,
                    'price' => $product->price,
                    'size' => $product->price,
                    'name' => $product->title,
                    'image' => $product->image,
                    'total' => $product->price * $number
                );
                $this->cart->insert($arr);
                $output = array('mess' =>1,'views'=>$this->cart->total_items(),'tex'=>rear('notify'));
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mess' =>0,'views'=>$this->cart->total_items(),'tex'=>rear('notify_err'));
                $output = json_encode($output);
                echo $output;
            }
        }
    }

    function load_cart()
    {
        $this->load->view('Cart/Cart_load');
    }

    function display_cart()
    {
        $data['sett'] = $GLOBALS['sett'];
        if ($this->cart->contents() != '') {
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
//            $data['art_hot'] = $this->Common_model->get_data('article',array('show'=>1,'stick '=>1),array('id','desc'),5);
            $data['content'] = $this->load->view('Cart/Cart_index', $data, true);
            $data['meta_key'] = 'Giỏ hàng';
            $data['meta_des'] = 'Giỏ hàng';
            $data['title'] = 'Giỏ hàng';
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }
    }

    public function add_cart()
    {
        if (isset($_POST)) {

            $id = $_POST['id'];
            $number = 1;
            $this->cart->product_name_rules = '\.\:\-_ a-z0-9áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọơớờởỡợôốồổỗộúùủũụưứừửữựíìỉĩịýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴĐ()';
            $product = $this->Common_model->get_one('product', array('id' => $id, 'show' => 1));

            if (!empty($product)) {
                $arr = array(
                    'id' => $product->id,
                    'qty' => $number,
                    'price' => $product->price,
                    'size' => $product->price,
                    'name' => $product->title,
                    'image' => $product->image,
                    'total' => $product->price * $number
                );
                $this->cart->insert($arr);

                $output = array('mess' =>'success','views'=>base_url($GLOBALS['alias_cart'] ));
                $output = json_encode($output);
                echo $output;
            }
        }
    }
    public function update_cart_j()
    {
        if (!empty($_POST)) {
            $qty = $_POST['qty'];
            $rowid = $_POST['rowid'];
            if (count($this->cart->contents()) > 0) {
                foreach ($this->cart->contents() as $item) {
                    if ($item['rowid'] == $rowid && $qty > 0) {
                        $arr = array(
                            'qty' => $qty,
                            'rowid' => $item['rowid'],
                        );
                        $this->cart->update($arr);
                    }
                }
            }
            $output = array('mess' => 'success', 'views' => $this->load->view('Cart/Cart_ajax', '', true));
            $output = json_encode($output);
            echo $output;
        }
    }

    public function delete_cart_j()
    {
        if (!empty($_POST)) {
            $rowid = $_POST['rowid'];
            if (count($this->cart->contents()) > 0) {
                foreach ($this->cart->contents() as $item) {
                    if ($item['rowid'] == $rowid) {
                        $arr = array(
                            'qty' => 0,
                            'rowid' => $item['rowid'],
                        );
                        $this->cart->update($arr);
                    }
                }
            }
            $output = array('mess' => 'success', 'views' => $this->load->view('Cart/Cart_ajax', '', true));
            $output = json_encode($output);
            echo $output;
        }
    }
    public function update_cart()
    {
        if (!empty($_POST)) {
            $data = $this->security->xss_clean($_POST);
            foreach ($this->cart->contents() as $item) {
                $data2 = $this->Common_model->get_one('product', array('id' => $item['id'],'show' => 1));
                $qty = $data[$data2->id];
                $price = $data2->price;
                $arr = array(
                    'id' => $data2->id,
                    'qty' => $qty,
                    'price' => $price,
                    'name' => $data2->title,
                    'image' => $data2->image,
                    'total' => $price * $qty,
                    'rowid' => $item['rowid'],
                );
                $this->cart->product_name_rules = '\.\:\-_ a-z0-9áàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọơớờởỡợôốồổỗộúùủũụưứừửữựíìỉĩịýỳỷỹỵđÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘÚÙỦŨỤƯỨỪỬỮỰÍÌỈĨỊÝỲỶỸỴĐ()';
                $this->cart->update($arr);
            }
            redirect(base_url($GLOBALS['alias_cart'] ));
        }
    }
    public function delete_cart()
    {
        $id = $this->security->xss_clean($this->uri->segment(3, 0));
        if ($this->cart->total_items()) {
            foreach ($this->cart->contents() as $item) {
                if ($item['id'] == $id) {
                    $data['rowid'] = $item['rowid'];
                    $data['qty'] = 0;
                    $this->cart->update($data);
                    break;
                }
            }
        }
        redirect(base_url() . 'cart/gio-hang');
    }

    function checkout_load()
    {
        $data['setting'] = $this->Common_model->get_one('setting', array('language' => $this->rear));
        if ($this->cart->contents()) {
            $this->load->view('Cart/Cart_check_load', $data);
        } else {
            redirect(base_url());
        }
    }
    function RandomString()
    {
        $characters = '0123456789';
        $randstring = '';
        for ($i = 0; $i<10; $i++)
        {
            $randstring .= mt_rand(0,9);
        }
        return '#ID'.$randstring;
    }
    public function checkout()
    {
        if ($this->cart->total_items()) {
            $dat['cart_item'] = $this->cart->contents();
            $dat['setting'] = $GLOBALS['sett'];
            $data['content'] = $this->load->view('Cart/Checkout', $dat, true);
            $this->load->view('index', $data);
        } else {
            redirect(base_url());
        }
    }
    function checkout_info(){
        if ($this->cart->total_items()) {
            $dat['cart_item'] = $this->cart->contents();
            $dat['post'] = $_POST;
            $dat['setting'] = $GLOBALS['sett'];
            $data['content'] = $this->load->view('Cart/Cart_check_load', $dat, true);
            $this->load->view('index', $data);
        } else {
            redirect(base_url());
        }
    }
    function checkout_success(){
        $dat['setting'] = $GLOBALS['sett'];
        if ($this->cart->total_items()) {
            $dat['cart_item'] = $this->cart->contents();
            $this->load->library('form_validation');
            $this->form_validation->set_rules('email', 'email', 'required');
            if ($this->form_validation->run() == FALSE) {
            } else {
                if(!empty($_COOKIE['done_order'])){
                    $dat['err'] = 1;
                }else{
                    $hoten = $this->input->post('name');
                    $content = $this->input->post('content');
                    $add = $this->input->post('address');
                    $phone = $this->input->post('phone');
                    $email = $this->input->post('email');
                    if(!empty($this->input->post('call_me')) && $this->input->post('call_me')=='on'){
                        $call_me = 1;
                    }else{
                        $call_me = 0;
                    }

                    $pay_now = $this->input->post('pay_now');
                    if(!empty($this->input->post('call_me')) && $this->input->post('call_me')=='on'){
                        $type = 1;
                    }else{
                        $type = 0;
                    }
                    if ($this->cart->contents()) {
                        $this->db->insert('order', array('name' => $hoten, 'address' => $add, 'content' => $content, 'email' => $email, 'phone' => $phone,'type'=>$type, 'call_me'=>$call_me,'pay_now'=>$pay_now,'total' => $this->cart->total()));
                    }
                    $id_order = $this->db->insert_id('order', 'id');
                    if ($this->cart->contents()) {
                        $ip = $this->input->ip_address();
                        foreach ($this->cart->contents() as $item) {
                            $id_sp = $item['id'];
                            $price = $item['price'];
                            $qty = $item['qty'];
                            $data = array(
                                'id_order' => $id_order,
                                'ip' => $ip,
                                'qty' => $qty,
                                'id_sp' => $id_sp,
                                'price' => $price
                            );
                            $this->db->insert('order_details', $data);
                        }
                    }
                    $dat['order'] = $this->Common_model->get_one('order', array('id' => $id_order));
                    $dat['order_detail'] = $this->Common_model->get_data('order_details', array('id_order' => $id_order));
                    $dat['post_item'] = $_POST;
                    $content_cus = $this->load->view('Cart/mail_customer', $dat, true);
                    $content_admin = $this->load->view('Cart/mail_admin', $dat, true);
                    $subject = 'Thông tin đặt hàng - ' . $hoten;
//                    $this->Common_model->send_mail($subject, $this->input->post('name'), $this->input->post('email'), $GLOBALS['supp']->email, $content_admin, $GLOBALS['supp']->email_send, $GLOBALS['supp']->password);
//                    $this->Common_model->send_mail($subject, $this->input->post('name'), $GLOBALS['supp']->email, $this->input->post('email'), $content_cus, $GLOBALS['supp']->email_send, $GLOBALS['supp']->password);
                    $this->cart->destroy();
                    setcookie('email',$email,time()+3600);
                    setcookie('name',$hoten,time()+3600);
                    setcookie('done_order','done',time()+60);
                    $dat['success'] =1;
                }

            }

            $data['content'] = $this->load->view('Cart/Checkout_success', $dat, true);
            $this->load->view('index', $data);
        } else {
            redirect(base_url());
        }
    }
    function order_detail()
    {
        $id = $this->uri->segment(2);
        $order = $this->Common_model->get_one('order', array('id' => $id));
        if (!empty($order)) {
            $dat['sett'] = $this->Common_model->get_one('setting', array('language' => $this->rear));
            $dat['order'] = $order;
            $dat['order_detail'] = $this->Common_model->get_data('order_details', array('id_order' => $id));
            $data['content'] = $this->load->view('Cart/Cart_order_detail', $dat, true);
            $this->load->view('index', $data);
        } else {
            echo Modules::run('Module_404/Module_error/index');
        }

    }
}