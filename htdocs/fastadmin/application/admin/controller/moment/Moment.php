<?php

namespace app\admin\controller\moment;

use app\common\controller\Backend;


/**
 * 分类管理
 *
 * @icon fa fa-list
 * @remark 用于统一管理网站的所有分类,分类可进行无限级分类
 */
class Moment extends Backend
{

    
    public function _initialize()
    {
        parent::_initialize();
    }

    /**
     * 查看
     */
    public function index()
    {
        return $this->view->fetch();
    }
    
}
