 <template>
  <div class="home">
    <div class="top">
      <div class="block">
        <el-image :src="src"
                  :preview-src-list="srcList"
                  style="height:172px;">
          <div slot="placeholder"
               class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
    </div>
    <div class="bot">
      <router-link :to="{name:'invoice',params:{num:num}}">
        <div class="locaUp">
          <img src="../Home/invoice.jpg"
               class="bendi" />
          <p class="btn_txt">电子发票打印</p>
          <p class="btn_cont"><span>请选择所需的电子发票进行打印</span></p>
          <div class="btn_img">
            <div class='left'
                 style="display: flex;margin-left:5px;">
              <img class="btn_pdf"
                   src='../Home/50_20190916015.png' />
              <span class="btn_rig">PDF</span>
            </div>
            <div class='right'
                 style="margin-left:5px;">
              <img class="btn_tu"
                   src='../Home/50_20190916015.png' />
              <span class="btn_tu">图片</span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link :to="{name:'kuaidi',params:{num:num}}">
        <div class="locaUp">
          <img src="../Home/2.jpg"
               class="bendi" />
          <p class="btn_txt">快递单打印</p>
          <p class="btn_cont"><span>请选择所需的快递单进行打印</span></p>
          <div class="btn_img">
            <div class='
                     left'>
              <img class="btn_pdf"
                   src='../Home/50_20190916015.png' />
              <span class="btn_rig">PDF</span>
            </div>
            <div class='right'>
              <image class="btn_pdf"
                     src='../Home/50_20190916015.png'></image>
              <span class="btn_tu">图片</span>
            </div>
          </div>
        </div>

      </router-link>

      <router-link :to="{name:'chuku',params:{num:num}}">
        <div class="locaUp">
          <img src="../Home/3.jpg"
               class="bendi" />
          <p class="btn_txt">出库单打印</p>
          <p class="btn_cont"><span>请选择所需的出库单进行打印</span></p>
          <div class="btn_img">
            <div class='left'>
              <img class="btn_pdf"
                   :src="require('../Home/50_20190916015.png')" />
              <span class="btn_rig">PDF</span>
            </div>
            <div class='right'>
              <image class="btn_pdf"
                     :src="require('../Home/50_20190916015.png')"></image>
              <span class="btn_tu">图片</span>
            </div>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'homet',
  mounted () {
    this.getNum()
  },
  data () {
    return {
      message: 'homet',
      num: '',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      srcList: [
        'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      ]
    }
  },
  methods: {
    getNum () {
      this.num = this.$route.params.num
    }
  },
  components: {

  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home .top {
  flex: 2;
  width: 100%;
  padding: 5px;
}
.home .bot {
  flex: 3;
  width: 100%;
}
.locaUp {
  position: relative;
  width: 80%;
  height: 107px;
  border-radius: 7.5px;
  margin: 36px auto;
  border: 1px solid rgba(222, 222, 222, 1);
  box-shadow: 7px 7px 14px 0px rgba(66, 66, 66, 0.1);
}
.locaUp .bendi {
  content: "";
  width: 105px;
  height: 105px;
  position: absolute;
  top: -25px;
  left: 5%;
  margin-left: -11px;
  /* border-radius: 50%; */
}
.locaUp .btn_rig {
  line-height: 24px;
  margin-left: 3px;
}
.btn_txt {
  position: absolute;
  top: 9%;
  right: 0;
  width: 168.75px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  letter-spacing: 8px;
}
.btn_cont {
  position: absolute;
  top: 33%;
  right: 0;
  width: 168.75px;
  font-size: 12px;
  font-weight: bold;
  color: #666;
}
.btn_cont span {
  display: inline-block;
  line-height: 37.5px;
  border-bottom: 0.75px solid #999;
}
.btn_img {
  position: absolute;
  top: 68%;
  right: 0;
  width: 168.75px;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}
.btn_img .left {
  margin-left: 5px;
}
.btn_img .right {
  margin-right: 5px;
}
.btn_img .left,
.right {
  display: flex;
}
.left img,
.right img {
  height: 16px;
  width: 16px;
}
.btn_img .left span,
.btn_img .right span {
  line-height: 16px;
  margin-left: 3px;
}
</style>