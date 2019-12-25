 <template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick">
    <el-tab-pane label="快递单打印"
                 name="first">
      <div class="print_box"
           :style="{'display':(istrue?'block':'none'),'padding':'10px'}">
        <div class="select_box">
          <span class="select"
                :style="{'display':(this.liList_chuKu.length>=5?'none':'')}">
            <i class="iconfont icon-jia"></i>
            <b>请选择打印的快递单</b>
            <b>仅限于jpg/png/pdf</b>
            <input type="file"
                   accept="image/pdf,image/jpeg,image/png,image/jpg"
                   name="image"
                   class="getImgUrl_file"
                   @change="uploader_chuKudan($event)">
          </span>
          <div class="ul_box"
               style="margin-top:20px;">
            <ul class="el-upload-list el-upload-list--picture">
              <li tabindex="0"
                  class="el-upload-list__item is-success"
                  v-for="(item,index) in liList_chuKu"
                  :key="index">
                <img :src="(item.type == 'pdf'?img:item.url)"
                     alt=""
                     class="el-upload-list__item-thumbnail" />

                <a class="el-upload-list__item-name"
                   style="position:relative;">
                  <i class="el-icon-document"></i><span style="width: 100px;display: inline-block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item.name}}</span>
                  <el-button type="primary"
                             style="position:absolute;top:15px;right:0;"
                             @click="print_conver(num,item.url,item.type)">打印</el-button>

                </a>
                <label class="el-upload-list__item-status-label">
                  <i class="el-icon-upload-success el-icon-check"></i>
                </label>
                <i class="el-icon-close"
                   @click="delImg_chukudan(index)"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="打印信息预览"
                 name="second">
      <div class="block"
           style="padding:10px;">
        <el-image :src="src"
                  :preview-src-list="srcList"
                  style="height:172px;width:100%;">
          <div :slot="slot_err">
            <img src="../Home/null.jpg"
                 style="height:172px;width:100%;" />

          </div>
        </el-image>
      </div>
      <div class="info">
        <div>
          <span class="message">打印成功次数:</span><span class="number"
                style="color:#13988c;">{{successTime}}次</span>
        </div>
        <div>
          <span class="message">打印失败次数:</span><span class="number"
                style="color:red;"> {{failTime}}次</span>
        </div>
        <div>
          <span class="message"> 打印时长:</span><span class="number"
                style="color:#263e3c;"> {{time}}秒</span>
        </div>
        <div>
          <span class="message">打印设备编号:</span><span class="number"
                style="color:#FF5722;"> {{num}}</span>
        </div>
        <div>
          <span class="message">打印文件:</span><span class="number">{{imgName_chuKu}}</span>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
import { printStatus, print_c, print, Simulation } from "../../api/index"
import Axios from 'axios';
export default {
  name: 'invoice',
  mounted () {
    this.getNum()
  },
  data () {
    return {
      message: '电子发票',
      num: '',
      src: '',
      imgName_chuKu: '',
      srcList: [],
      istrue: true,
      liList_chuKu: [],
      imgurlList: [],
      successTime: 0,
      failTime: 0,
      time: 0,
      slot_err: 'error',
      endtTime: '',
      startTime: '',
      activeName: 'first',
      img: 'data:image/jpeg;base64,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',


    }
  },
  methods: {
    uploader_chuKudan ($event) {
      const file = $event.srcElement.files[0]
      const name = event.target.files[0].name
      const type = event.target.files[0].type.split('/')[1]
      this.index_chuKu += 1;
      this.imgName_chuKu = name
      this.limitNum()
      let reader = new FileReader();
      reader.onload = ($event) => {
        let result = $event.target.result
        const liItem = { url: result, name: name, key: this.index, file: file, type: type }
        if (this.liList_chuKu.length <= 4) {
          console.log(this.liList_chuKu.length)
          this.liList_chuKu.push(liItem)
          this.imgurlList.push(result)
        } else {
          return
        }


        //预览
        this.src = result
        this.srcList.push(this.src)

      }
      reader.readAsDataURL(file);
    },
    print_conver (number, file, type) {
      if (type == 'pdf') { //pdf
        const base64 = file.split(',')[1]
        console.log(base64)
        const data = JSON.stringify({
          type: 'pdf',
          printdata: 'FZ',
          instruction: 'ZPL',
          threshold: 178,
          dpi: 203,
          paperWidth: '4.2',
          concentration: 6,
          conver: base64,

        })
        Simulation(data).then((res) => {
          console.log(res)
          const data = res.data
          this.printf(number, data)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        const base64 = file.split(',')[1]
        const data = {
          conver: base64,
          type: 'photo',
          printdata: 'FZ',
          instruction: 'ZPL',
          dpi: 203,
          paperWidth: 4.2
        }
        print_c(data).then((res) => {
          const data = res.data
          if (res.code == 0) {
            this.printf(number, data)
          } else {
            console.log("转换数据失败")
          }
        }).catch((err) => {
          console.log(err)
        })
      }


    },
    // 打印
    printf (number, data) {
      this.getStartTime();
      const data_p = {
        number: number,
        data: data
      }
      print(data_p).then((res) => {
        if (res.code == 0) {
          this.$notify({
            title: '成功',
            message: res.data,
            type: 'success'
          });
          this.successTime += 1;
          this.getEndTime()
          this.timeDifference(this.startTime, this.endTime)

        } else {
          // this.$notify.error({
          //   title: '错误',
          //   message: res.data
          // });
          // this.failTime += 1;
        }
      }).catch((err) => {
        this.$notify.error({
          title: '错误',
          message: err.data
        });
        this.failTime += 1;

      })
    },
    getNum () {
      console.log(this.$route.params.num)
      this.num = this.$route.params.num
    },
    getStartTime () {
      var myDate = new Date(); //实例一个时间对象；
      // let startTime = myDate.getSeconds()
      console.log(myDate)
      this.startTime = myDate
    },
    getEndTime () {
      var myDate = new Date(); //实例一个时间对象；
      // let endTime = myDate.getSeconds()
      console.log(myDate)
      this.endTime = myDate
    },
    //时间差
    timeDifference (startTime, endTime) { //可以传日期时间或时间戳
      const times = (endTime - startTime) / 1000
      this.time = times
    },
    //删除
    delImg_chukudan (i) {
      this.liList_chuKu.splice(i, 1)
      this.src = ''
    },
    handleClick (tab, event) {

      // if (this.liList_chuKu.length == 0) {
      //   this.$notify.error({
      //     title: '错误',
      //     message: '请先添加打印的文件'
      //   });
      // } else {
      //   this.slot_err = 'placeholder'

      // }
    },
    //限制打印的张数5张
    limitNum () {
      if (this.liList_chuKu.length >= 5) {
        this.$notify.error({
          title: '警告',
          message: '最多只能添加5张'
        });
      } else {
        return
      }
    }
  },
  components: {

  }
}
</script>
<style >
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  width: 50%;
  padding: 0;
  text-align: center;
}
.el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 10px;
}
</style>
<style scoped>
.drag_file {
  margin-top: 15px;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 212px;
  height: 48px;
  border-radius: 3px;
  border: dashed 1px #eef0eb;
  font-size: 12px;
  color: #999999;
  position: relative;
  justify-content: center;
}
.drag_file input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
.select {
  /* width: 200px; */
  height: 100px;
  border-style: dotted;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
}
.select b {
  display: inline-block;
}
.select input {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 100px;
  display: inline-block;
}
.el-breadcrumb span {
  height: 100%;
  display: inline-block;
  text-align: center;
  line-height: 60px;
  font-size: 19px;
  padding-left: 20px;
}
.info {
  padding: 10px;
  display: flex;
  align-items: right;
  flex-direction: column;
}
.info div {
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  height: 25px;
}
.info div .message {
  flex: 1;
}
.info div .number {
  flex: 1.5;
}
/* .info span {
  line-height: 20px;
  font-size: 18px;
} */
</style>
