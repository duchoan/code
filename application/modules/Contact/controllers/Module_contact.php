<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Module_contact extends MX_Controller
{
    public $setting = '';
    private $success = 0;

    public function __construct()
    {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->helper(array('form', 'url'));
        $this->setting = $GLOBALS['sett'];
        if ($_SESSION['rear'] == '_en') {
            $this->lang->load('atta_lang', 'en');
        } else {
            $this->lang->load('atta_lang', 'vn');
        }
    }

    public function index()
    {

        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        $data['show_sl'] = 1;
        $data['capt2'] = 0;
        $data['sett'] = $this->setting;
        $data['office'] = $this->Common_model->get_data('office', array('show'));
        $this->load->library('form_validation');
        $this->form_validation->set_rules('name', 'Họ tên', 'trim|required');
        $this->form_validation->set_rules('address', 'Họ tên', 'trim|required');
        $this->form_validation->set_rules('phone', 'Điện thoại', 'trim|numeric|min_length[9]|max_length[15]|required');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_rules('content', 'Nội dung', 'trim|required');
        $this->form_validation->set_error_delimiters('<span class="error">', '</span>');
        $api_url = 'https://www.google.com/recaptcha/api/siteverify';
        $site_key = '6LdVBDYUAAAAANGYVrnye8Vh9sxfDle-76E9Bgub';
        $secret_key = '6LdVBDYUAAAAAIppAYW-5P-p0CnzC_qF49fd-r3S';
        if ($this->form_validation->run() == FALSE) {
        } else {
            $site_key_post = $_POST['g-recaptcha-response'];

            //lấy IP của khach
            if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
                $remoteip = $_SERVER['HTTP_CLIENT_IP'];
            } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
                $remoteip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            } else {
                $remoteip = $_SERVER['REMOTE_ADDR'];
            }

            //tạo link kết nối
            $api_url = $api_url . '?secret=' . $secret_key . '&response=' . $site_key_post . '&remoteip=' . $remoteip;
            //lấy kết quả trả về từ google

            $response = file_get_contents($api_url);
            //dữ liệu trả về dạng json
            $response = json_decode($response);
            if (!isset($response->success)) {
            }
            if ($response->success == true) {
                if (!isset($_COOKIE['contact'])) {
                    $array = array(
                        'name' => $this->input->post('name'),
                        'email' => $this->input->post('email'),
                        'phone' => $this->input->post('phone'),
                        'address' => $this->input->post('address'),
                        'content' => $this->input->post('content'),
                    );
                    $this->db->insert('contact', $array);
                    unset($_POST);
                    $data['success'] = 1;
                    setcookie('contact_done', 'success', time() + 300);
                }
            }

        }
        if (isset($_COOKIE['rear'])) {
            $data['rear'] = $_COOKIE['rear'];
        } else {
            $data['rear'] = '';
        }
        $data['office'] = $this->Common_model->get_data('office', array('show' => 1));
        $data['content'] = $this->load->view('Contact/Contact_index', $data, true);
        $data['meta_key'] = $this->setting->meta_key;
        $data['meta_des'] = $this->setting->meta_des;
        $data['title'] = $this->setting->title;
        $this->load->view('index', $data);
    }

    public function doctor()
    {
        $this->load->library('form_validation');
        $this->form_validation->set_rules('name', 'Họ tên', 'trim|required');
        $this->form_validation->set_rules('phone', 'Điện thoại', 'trim|numeric|min_length[9]|max_length[15]|required');
        $this->form_validation->set_rules('content', 'Nội dung', 'trim|required');
        $this->form_validation->set_error_delimiters('<span class="error">', '</span>');
        if ($this->form_validation->run() == FALSE) {
                $output = array('mes'=>3, 'view' => $this->load->view('Contact/Contact_err1','',true));
                $output = json_encode($output);
                echo $output;
        } else {
            $data['capt2'] = 0;
            if (!isset($_COOKIE['doctor_done'])) {
                $array = array(
                    'name' => $this->input->post('name'),
                    'email' => $this->input->post('email'),
                    'phone' => $this->input->post('phone'),
                    'ip' => $this->input->post('curl'),
                    'content' => $this->input->post('content'),
                );
                $this->db->insert('contact', $array);
                setcookie('doctor_done', 'success', time() + 300);
                $output = array('mes'=>1, 'view' => $this->load->view('Contact/Contact_success','',true));
                $output = json_encode($output);
                echo $output;
            }else{
                $output = array('mes'=>2, 'view' => $this->load->view('Contact/Contact_err','',true));
                $output = json_encode($output);
                echo $output;
            }

        }
    }
}
