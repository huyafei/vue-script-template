const template=`
<div>
  <Navbar leftText="返回" :title="title" rightText="确定" @click-left="handlerLeft"  @click-right="handlerRight"></Navbar>
     <el-button @click="jumpPage('/login')">去登录</el-button>
  </div>
`
export default {
  template,
  data: function () {
    return {
      title: "首页",
    }
  },
  mounted() {
  },
  methods: {
    jumpPage(url){
      this.$router.push(url)
    },
    handlerLeft(){
      this.$message.info('点击了返回按钮');
      this.$router.go(-1)
    },
    handlerRight(){
      this.$message.info('点击了确定按钮');
    }
  }
}
