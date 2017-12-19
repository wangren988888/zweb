/**
 * Created by wangren on 2017/12/13.
 */
import '../../assets/fullpage.js/dist/jquery.fullpage.js'
import '../../assets/fullpage.js/dist/jquery.fullpage.css'
import Mheader from '@/components/header/header.vue'
import Mswiper from '@/components/Mswiper/Mswiper.vue'
import testimg1 from '@/assets/images/banner1.jpg'
import testimg2 from '@/assets/images/banner2.jpg'
import testimg3 from '@/assets/images/banner3.jpg'
export default {
  data() {
    return {
      swiperConfigObj: {
        banners: [{
          title: "banner1",
          src: testimg1
        }, {
          title: "banner2",
          src: testimg2
        }, {
          title: "banner3",
          src: testimg3
        }]
      },
      classifyList:[{
        title:"网页",
        code:"webpage"
      },{
        title:"微信公众号",
        code:"wechat"
      },{
        title:"微信小程序",
        code:"wechatApp"
      },{
        title:"APP",
        code:"appSot"
      },{
        title:"HTML5",
        code:"h5"
      }]
    }
  },
  watch: {},
  computed: {},
  created(){
  },
  mounted(){
    this.$nextTick(() => {
      var _this = this;
      $('#fullpage').fullpage({
        scrollBar: true,
        autoScrolling: false,
        css3: true,
        fitToSection: false,
        verticalCentered: false,
        onLeave(index, nextIndex, direction){
          info(index, nextIndex, direction)
        },
        afterRender(){
          info('初始化完成');
          _this.openParallax({
            _this: _this,
            pageClassName: '.section',
            bgClassName: '.my-bg',
            offset: 40
          })
        }
      });
    })
  },
  methods: {
    find(array, val){
      if (val < Math.min.apply(null, array)) {
        return 0;
      }
      if (val > Math.max.apply(null, array)) {
        return array.length - 1;
      }
      var idx = 0,
        i = 0,
        j = array.length;
      for (; i < j; i++) {
        if (array[i] > val) {
          idx = i;
          break;
        }
      }
      return idx;
    },
    openParallax(obj){
      var sectionList = $(obj.pageClassName);
      //info(sectionList);
      var docHe = sectionList[0].offsetHeight;
      //info(docHe);
      var sectionHeList = [];
      for (let i = 0; i < sectionList.length; i++) {
        sectionHeList.push(docHe * i)
      }
      //info(sectionHeList);
      function scroll(fn) {
        var beforeScrollTop = document.body.scrollTop;
        var fn = fn || function () {
          }
        window.addEventListener("scroll", function () {
          var afterScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          var delta = afterScrollTop - beforeScrollTop;

          if (afterScrollTop == 0) {
            $('.header').removeClass('fixed');
          }
          if (afterScrollTop >= 50) {
            if (!$('.header').hasClass('fixed')) {
              $('.header').addClass('fixed');
            }
          }
          if (delta === 0) return false;
          let isIndex = obj._this.find(sectionHeList, afterScrollTop) - 1;
          //let isIndex = $('.section.active').index() - 1;
          //info($('.section.active').index() - 1);

          // if (delta > 0) {
          //   info('down');
          // } else {
          //   info('up');
          // }

          $(obj.pageClassName).find(obj.bgClassName).css('transform', 'translate3d(0,0,0)');
          $(sectionList[isIndex]).find(obj.bgClassName).css('transform', 'translate3d(0,' + (afterScrollTop - docHe * isIndex) * (obj.offset / 100) + 'px,0)');
          beforeScrollTop = afterScrollTop;
        }, false);
      }

      scroll(function (direction) {
      })
    }
  },
  components: {
    Mheader, Mswiper
  },
}

