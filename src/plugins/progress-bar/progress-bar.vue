<template>
  <transition name="fade">
    <div class='progress-bar' v-show="isShow">
      <p></p>
    </div>
  </transition>
</template>
<script>
import {animate} from './animate'

export default {
  name: 'progress-bar',
  data() {
    return {
      val: 0, // 进度值
      started : false
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: -100
    },
    initVal: {
      type: Number,
      default: 0
    },
    stopVal: {
      type: Number,
      default: 80
    },
    isOk: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    // this.run();
  },
  methods: {
    move(from, to){
      return animate(this.$el, 'translateX', {
        from,
        to,
        unit: '%',
        method: 'ease-in',
        duration: .25
      })
    },
    start(){
      this.started = true;
      this.step = -100;
      this.isShow = true;
      return this.next(25);
    },
    next(add){
      if(this.step + add >= 0 || !this.started){
        return this.end();
      }
      let promise = this.move(this.step, this.step += add);
      promise.then(() => {
        if(this.started){
          this.clock();
        }
      })
      return promise;
    },
    clock(){
      this.next(1);
    },
    end(){
      if(this.started){
        this.started = false;
        return this.move(this.step, this.step = 0).then(() => {
          this.step = -100;
          setTimeout(()=>{this.isShow = false}, 200);
        })
      }else{
        return new Promise(resolve => resolve());
      }
    },
    run(){
      this.val = this.initVal;
      let step = this.step;
      let timer = setInterval(()=>{
        this.val = this.val + step;
        this.$el.style.transform = `translate3d(${this.val},0,0)`;
        if(this.val >= this.stopVal){
          clearInterval(timer);
          return
        }
      },10)
    }
  },
  watch: {

  }
}
</script>
<style lang='scss' scoped>
.progress-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 999;
  // background-image: linear-gradient(left, #ffffff, #00ff00);
  // background-image: -webkit-linear-gradient(left, #ffffff, #00ff00);
  pointer-events: none;
  background: #fe0000; // 需要自己改变颜色
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  p{
    height: 100%;
    width: 30px;
    background-color: rgba(254,0,0,.4);
    -webkit-box-shadow: 2px 0 3px rgba(254,0,0,.4);
    -mozbox-shadow: 2px 0 3px rgba(254,0,0,.4);
    box-shadow: 2px 0 3px rgba(254,0,0,.4);
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
    float: right;
  }
}
.fade {
    &-enter-active, &-leave-active {
      transition: all .3s
    }
    &-enter, &-leave-active {
      opacity: 0
    }
}
</style>
