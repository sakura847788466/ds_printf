<template>
  <div class='list'>
    <transition enter-active-class='animated slideInLeft'
                leave-active-class='animated slideOutLeft'>
      <ul v-show="show">
        <li v-for="(item,index) in name"
            :key=index>{{item}} <i class="fa fa-angle-right"></i></li>
      </ul>
    </transition>

    <div class="zhezhaoceng"
         v-show="show"></div>

  </div>
</template>
<script>
export default {//前端抛出  组件的配置 data  prop methods  生命周期。。。。。
  name: 'List',
  props: ['show'],
  data () {
    return {
      name: ['首页', '电子发票', '出库单']
    }
  },

}

</script>
<style lang="less"  scoped>
@import url("../../style/main.less");
.list {
  ul {
    position: fixed;
    .top(50);
    left: 0px;
    .right(110);
    bottom: 0px;
    background: @bg-header;
    z-index: 999;
    li {
      display: flex;
      .h(50);
      justify-content: space-between;
      color: @color-nav;
      .padding(0, 16, 0, 16);
      .fs(14);
      align-items: center;
      border-bottom: 1px dotted #333;
    }

    .fa-angle-right {
      float: right;
      .fs(14);
    }
  }
  .zhezhaoceng {
    .top(50);
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
  }
}
</style>
