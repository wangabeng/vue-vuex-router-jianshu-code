<template>
<div class="container">

  <!-- 侧边栏开始 -->
  <div class="sidebar" v-if="$route.name!=='Bonus' "><!--参见：https://segmentfault.com/q/1010000007977631?_ea=1510832-->
    <ul class="dropdown">
      <li>
        <router-link to='/home/article' @click.native='leftBarTab("home")'  :class='{active:leftBar=="home"}'><i class="fa fa-home"></i><span>&nbsp;&nbsp;&nbsp;首页</span></router-link>
      </li>
      <li>
        <router-link to='/topic' @click.native='leftBarTab("topic")'  :class='{active:leftBar=="topic"}'><i class="fa fa-th"></i><span>&nbsp;&nbsp;&nbsp;专题</span></router-link>
      </li>
      <li><router-link to="/download" @click.native='leftBarTab("download")'  :class='{active:leftBar=="download"}'><i class="fa fa-mobile"></i><span>&nbsp;&nbsp;&nbsp;&nbsp;下载手机应用</span></router-link></li>
    </ul>

    <ul class="nav-user">
      <li><router-link to='/home/article'><i class="fa fa-font"></i><span>&nbsp;&nbsp;&nbsp;显示模式</span></router-link></li>

      <li><router-link to='/login'><i class="fa fa-sign-in"></i><span>&nbsp;&nbsp;&nbsp;登录</span></router-link></li>
    </ul>
  </div>
  <!-- 侧边栏结束 -->

  <!-- 动态展示区域 -->
  <div class='home'>
    <router-view></router-view>
  </div>
  <!-- 动态展示区域 -->

  <!-- 右侧导航开始 -->
  <div class="rightbar" v-show='hideandshow'>
    <nav>
      <router-link to='/login' @click.native='tablogin("login")'><i class="fa fa-sign-in"></i>登录</router-link>
      <router-link to='/login' @click.native='tablogin("register")'><i class="fa fa-user"></i>注册</router-link>
    </nav>

  </div>
  <!-- 右侧导航结束 -->

</div>


</template>

<script>
  import router from './main.js'
  import {mapGetters,mapActions} from 'vuex'

  const {toggleBar,tablogin}=mapActions([
      'toggleBar','tablogin'
  ]);

  export default {
    computed:mapGetters([
      'hideandshow'//是个函数,
    ]),

    //原本是这样写 可是如果想自己添加方法怎么办？用到解构
    //例如const {c}=mapActions(['c']) 解析：mapActions(['c'])生成一个对象{函数名称'c'}，c可以在此组件中直接使用的。用解构方法const {c}=mapActions(['c']) 相当于c(const {c}此处的c就不是个对象了)就是对象{函数名称'c'}内的'c'　
    
    /*
    methods:mapActions([
      'toggleBar'
    ]),*/

    //methods的解构写法
    methods:{
      toggleBar,
      tablogin,
      leftBarTab(str){
        this.leftBar=str;
      }
    },

    //数据
    data(){
    return {
      leftBar:'home'
    }
    /*methods:{
      leftBarTab:function(){
        alert(1);
      } //自己还想写方法 怎么办？？？用解构方法
    }*/
  },

  }
</script>

<style scoped>
  /*@import 'http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css';也可添加到index的样式表里*/

  /*最好不要用选择器通配符 没遇到一个html标签 就会执行一次 消耗内存*/
  *{
    margin:0;
    padding:0;
  }
  .container{
    height: 100%;
   
  }
  .sidebar{
    position:fixed;
    width:40px;
    height:100%;
    background-color:#2a2a2a;
    overflow:hidden;
  }
  .sidebar .dropdown{
    overflow:hidden;
  }
  .sidebar .dropdown li{
    width:80px;
    margin-bottom:1px;
    overflow:hidden;
  }
  .sidebar a{
    color:#ffffff;
    float:left;
    height:80px;
    line-height:80px;
   }
  .dropdown .active,.dropdown a:hover{
    background-color:#e78170;
  }
  .fa{
    font-size:24px;
    text-indent:8px;
  }
  .fa-mobile{
    font-size:34px;
  }

  .sidebar .nav-user{
    width:40px;
    overflow:hidden;
    margin-top:30px;
  }
  .sidebar .nav-user li{
    width:120px;
    height:60px;
    line-height:60px;
  }
  .sidebar .nav-user li a{
     color:#999999;
  }



  .rightbar{
    position:fixed;
    width:140px;
    padding-left:20px;
    right:0;
    top:20px;
    z-index:2;
  }
  .rightbar a{
    float:left;
    font-size:14px;
    width:50px;
    height:16px;
    padding-right:10px;
  }
  .rightbar i{
    font-size:12px;
    text-indent:0;
    padding-right:4px;
  }

  .home{
    width:820px;
    margin-left:40px;
    margin-right:160px;
  }
</style>