<template>
  <div class="header clear">
    <router-link to="/"><img src="../../assets/images/logo.png" class="logo" alt=""></router-link>
    <ul class="navBox clear">
      <li v-for="item in navList">
        <router-link :to="item.url" :class="currRouterName==item.name?'active':''">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navList: [{
          title: 'Home',
          url: '/',
          name: 'index'
        }, {
          title: 'Design',
          url: '/design',
          name: 'design'
        }, {
          title: 'About',
          url: '/about',
          name: 'about'
        }],
        currRouterName: 'index'
      }
    },
    watch: {},
    computed: {},
    created(){
    },
    mounted(){
      this.$nextTick(() => {
        //获取渲染后的内容高度并给滚动容器赋值高度
        this.currRouterName = this.$store.state.routerName;
      })
    },
    methods: {},
    components: {},
  }
</script>
<style scoped lang="scss">
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    padding-top: 20px;
    box-sizing: content-box;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    .logo {
      height: 40px;
      margin-top: 5px;
      margin-left: 20px;
      transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .navBox {
      float: right;
      margin-right: 20px;
      li {
        padding: 0 20px 10px 20px;
        width: auto;
        height: 50px;
        line-height: 40px;
        float: left;
        position: relative;
        transition: all ease .3s;
        a {
          color: #231815;
        }
        a:active, a:hover, a.active {
          color: #848282;
        }
      }
      li:last-child {
        padding-right: 0;
      }
    }
  }

  .header.fixed {
    padding-top: 10px;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    .logo {
      margin-top: 0;
    }
    .navBox {
      li {
        a {
          color: #848282;
        }
        a:active, a:hover, a.active {
          color: #231815;
        }
      }
    }
  }
</style>
