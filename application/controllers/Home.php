<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MX_Controller {
    public function __construct()
    {
        parent::__construct();
    }
    public function index()
    {
        $data['content'] =  Modules::run('Content/Content/index');
        $data['show_sl'] = 1;
        $this->load->view('index',$data);
    }
    function data_bk(){
        // Load the DB utility class
        $this->load->dbutil();

// Backup your entire database and assign it to a variable
        $prefs = array(
            'ignore'        => array(),                     // List of tables to omit from the backup
            'format'        => 'txt',                       // gzip, zip, txt
            'filename'      => 'mybackup.sql',              // File name - NEEDED ONLY WITH ZIP FILES
            'add_drop'      => TRUE,                        // Whether to add DROP TABLE statements to backup file
            'add_insert'    => TRUE,                        // Whether to add INSERT data to backup file
            'newline'       => "\n"                         // Newline character used in backup file
        );

        $backup =& $this->dbutil->backup($prefs);

// Load the file helper and write the file to your server

        $this->load->helper('file');

        write_file(base_url().'mybackup.sql', $backup);

// Load the download helper and send the file to your desktop

        $this->load->helper('download');

        force_download('mybackup.sql', $backup);
    }
}
