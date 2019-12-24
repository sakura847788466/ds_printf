<template>
  <div class='header'>
    <div class='contain'>
      <div class='left'>
        <div class='nav-icon'
             @click="navShow()">
          <i class="el-icon-s-unfold "
             aria-hidden="true"></i>
        </div>
        <div class='title'> 得实云打印</div>
      </div>
      <div class='right'>
        <div class='city'>
        </div>
        <div class="user-icon">
          <i class="el-icon-user-solid"
             aria-hidden="true"></i>

        </div>

      </div>
    </div>
    <!-- <List :show="isShow"></List> -->
  </div>
</template>


<script>
import List from '../List/list'

export default {
  name: 'Header',
  data () {
    return { isShow: false }
  },
  components: {
    List
  },
  methods: {
    navShow () {
      this.isShow = !this.isShow
    }
  }
}





</script>

<style lang="less" scoped>
@import url("../../style/main.less");
.header {
  .contain {
    background: @bg-header;
    display: flex;
    .fs(14);
    color: @color-header;
    .w(375);
    .h(50);
    justify-content: space-between;
    text-align: center;
    .lh(50);
    .left,
    .right {
      display: flex;
      .nav-icon {
        .w(48);
        .h(50);
        border-right: 1px solid @border-header;
      }
      .title {
        .w(78);
        .h(50);
      }
      .city {
        .w(56);
        .h(50);
      }
      .user-icon {
        .w(48);
        .h(50);
      }
    }
  }
  .lis {
    .fs(20);
    li {
      float: left;
      list-style: none;
      .w(92);
      text-align: center;
    }
  }
}
</style>
