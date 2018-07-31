// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './permission'
import * as filters from './filters'
import * as i18n    from './api/module/i18n'
// import  'element-ui/lib/theme-chalk/index.css'
Vue.prototype.t  = i18n.t

Vue.config.productionTip = false

import { Pagination,FormItem,Form,Autocomplete,RadioGroup,Collapse,CollapseItem,DatePicker,colorPicker,Radio,Input,Switch,Option,Select,Checkbox, Button, Upload, Table, TableColumn, Progress, Loading, Tooltip, Dropdown, DropdownMenu, DropdownItem, Dialog } from 'element-ui';

Vue.use(Pagination);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Autocomplete);
Vue.use(RadioGroup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Upload);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Progress);
Vue.use(Loading);
Vue.use(Tooltip);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Radio);
Vue.use(colorPicker);
Vue.use(DatePicker);
Vue.use(Switch);
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
