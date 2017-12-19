<template>
  <swiper :options="swiperOption" ref="mySwiper" :style="swiperOption.style">
    <!-- slides -->
    <swiper-slide v-for="banner in banners" :key="banner.id"
                  :style="'background-image:url('+banner.src+')'"></swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
  </swiper>
</template>

<script>

  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        banners: [],
        swiperOption: {
          initialSlide: 0,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          effect: 'slide',
          autoplay: 3000,
          observer: true,
          observeParents: true,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          style: {
            height: '700px',
          }
        }
      }
    },
    props: [
      'swiperConfigObj'
    ],
    computed: {
      mySwiper(){
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.$nextTick(() => {
        info('swiperConfigObj:', this.swiperConfigObj);
        this.banners = this.swiperConfigObj.banners;
      })

    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="scss">
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      border-radius: 12px;
      border: 1px solid #ccc;
      background-color: transparent;
      opacity: 1;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      border-color: #848282;
      background-color: #848282;
    }
  }

  .swiper-button-prev, .swiper-button-next {
    width: 50px !important;
    height: 50px !important;
    background-image: url("../../assets/images/left.png") !important;
    background-size: 12px !important;
    background-color: rgba(35, 24, 21, .6);
    border-radius: 50px;
  }

  .swiper-button-next {
    transform: rotate(180deg);
  }

  .swiper-button-prev:hover, .swiper-button-next:hover {
    background-color: #848282;
  }
</style>
