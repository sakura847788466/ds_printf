 <template>
  <img src="../Home/50_20190916014.png"
       alt=""
       style="width:100%;height:100%;display:inline-block;position:absolute;top:1.33333333rem;left:0;">
</template>

<script>
import { printStatus, print_c, print, Simulation } from "../../api/index"
import Axios from 'axios';
export default {
  name: 'pageone',
  mounted () {
    this.handleClick()
  },
  data () {
    return {
      message: '这里是首页',
      img: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      this.$prompt('请匹配设备型号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[a-zA-Z0-9]{16}$/,
        inputErrorMessage: '型号不正确'
      }).then(({ value }) => {
        printStatus(value).then((res) => {
          const status = res.data.main;
          if (status == '错误') {
            this.$message({
              type: 'error',
              message: res.data.sub
            });
          } else if (status == '正常') {
            this.$router.push({
              path: `/homet${value}`
            })
          } else if (status == '离线') {
            this.$message({
              type: 'error',
              message: "打印机" + res.data.main
            });
          } else {
            return;
          }
        }).catch((err) => {
          this.$message({
            type: 'error',
            message: '请求打印机异常!'
          });
        })


      }).catch((err) => {
        console.log(err)
      });
    },
  },
  components: {

  }
}
</script>
<style >
.el-message-box {
  width: 200px;
}
</style>
<style scoped>
</style>
