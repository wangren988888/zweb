import ProgressBar from './progress-bar.vue'
/**
 *  进度条插件
 * 
 * @author： Hulk
 */

let $vm;
export default {
  install(Vue){
    if(!$vm){
      const Progress = Vue.extend(ProgressBar);      
      $vm = new Progress({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el);      
    }

    const progress = {
      start(options = {}){
        if(typeof options === 'object'){
          Object.assign($vm,options);
        }        
        $vm.start();        
      },
      end(){
        $vm.end();    
      }      
    }
    
    if(!Vue.$hms){
      Vue.$hms = {
        progress
      }
    }else{
     Vue.$hms.progress = progress
    }

    Vue.mixin({
     created() {
       this.$hms = Vue.$hms
     }
    })
  }
}
