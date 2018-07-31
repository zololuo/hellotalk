<template>
  <div class="postedList">
    <h3>发布队列<span>({{posted_list.length}})</span></h3>
    <ul>
      <li v-for="(item ,index) in posted_list" @mouseenter="showBtn(index)" @mouseleave="hideBtn(index)">
        <h4>{{item.title}}</h4>
        <p class="editAndDel" v-show="item.flag">
          <span @click="openAlertWindow(item,index)">编辑</span>
          <span @click="delIssueCourse(item.task_id,index)">删除</span></p>
        <p>{{item.time}}</p>
        <p>{{item.type}}</p>
        <h4>发布人：{{item.issuer}}</h4>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import * as msgApi    from './../api'
  import { Message, MessageBox } from 'element-ui'

  export default {
    name: 'postedList',
    props:{
      posted_list: {
        type: Array,
        require: true
      },
    },
    data() {
      return {

      }
    },
    methods: {
      showBtn(i) {
        this.posted_list[i].flag= true
      },
      hideBtn(i) {
        this.posted_list[i].flag= false
      },
      openAlertWindow(item,index) {
        this.$emit('getChildData', {"currentItem":item,"index":index});
      },
      delIssueCourse (taskId,index) {
        var self = this;
        MessageBox.confirm('确认删除此课?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          msgApi.delAutoPubTask({
            task_id: taskId
          }).then(data=>{
            var res = data.data;
            console.log(res);
            if (res&&res.status===0) {
              self.posted_list.splice(index,1);
              this.$emit('updatePostedList',this.posted_list);
              Message({
                message: '删除成功',
                duration: 5 * 1000
              })
            }else{
              Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
              })
            }
          }).catch(err=>{ console.log(err); })
        }).catch(() => {});

      }
    }
  }
</script>
<style scoped>
  .postedList{
    height: 100%;
    min-width: fit-content;
    width:20%;
    border:1px solid #ddd;
    box-sizing: border-box;
    margin-left: 4%;
    color:#1f2d3d;
  }
  .postedList h3{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-bottom: 1px solid #ddd;
  }
  .postedList ul{
    box-sizing: border-box;
    width:100%;
    height: calc(100% - 41px);
    font-size: 14px;
    overflow-y: auto;
  }
  .postedList li{
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .postedList h4{
    float: left;
  }
  .postedList li:after{
    content: '';
    display: block;
    overflow: hidden;
    clear: both;
  }
  .postedList p{
    color:#666;
    line-height: 26px;
    clear: both;
  }
  .postedList .editAndDel{
    float: right;
    clear: none;
    margin-top: -2px;
    font-size: 12px;
    cursor: pointer;
  }
  .editAndDel>span:hover{
    color: #20a0ff;
  }
</style>
