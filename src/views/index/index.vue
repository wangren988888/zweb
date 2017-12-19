<template>
  <div class="Page indexPage">
    <div id="fullpage">
      <Mheader></Mheader>
      <div class="section section1">
          <Mswiper :swiperConfigObj="swiperConfigObj" class="my-bg threeD"></Mswiper>
      </div>
      <div class="section section2">
        <div class="my-bg threeD"></div>
        <div class="sectionCon">

          <div class="titleBox">
            <h3 class="title">DESIGN</h3>
            <p>our project</p>
          </div>
          <div class="classify">
            <ul class="clear">
              <li class="left" v-for="typeItem in classifyList">{{typeItem.title}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section section3">
        <div class="my-bg threeD"></div>
      </div>
      <div class="section section4">
        <div class="my-bg threeD"></div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped lang="scss" src="./index.scss"></style>

