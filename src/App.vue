<script>
import { pr } from '@/config/config'
import { jsPDF } from 'jspdf' 
import html2canvas from 'html2canvas'
import { defineComponent } from '@vue/runtime-core'
import skill from '@/components/skill.vue'
export default defineComponent({
  components: { skill },
  setup(){
    const prefixProtocol = (str) => {
      str = str || ''
      if(str && (str.indexOf('https://') > -1 || str.indexOf('http://') > -1)){
        return str
      }
      return `http://${str}`
    }
    return {
      pr,
      prefixProtocol
    }
  },
  methods: {
    // 将html保存为pdf
    saveAsPDF() {
      const dom = document.getElementById('main')
      html2canvas(dom, {
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        width: 1000,
        height: dom.offsetHeight,
      }).then(canvas => {
        let pageData = new Image();
        pageData.src = canvas.toDataURL('image/png');
        let contentWidth = dom.clientWidth; // 获得该容器的宽
        let contentHeight = dom.clientHeight;
        //一页 pdf 显示 html 页面生成的 canvas高度
        let pageHeight = (contentWidth / 552.28) * 841.89;
        //未生成 pdf 的 html页面高度
        let leftHeight = contentHeight;
        //页面偏移
        let position = 0;
        //a4纸的尺寸[595.28,841.89]，html 页面生成的 canvas 在pdf中图片的宽高
        let imgWidth = 555.28;
        let imgHeight = (imgWidth / contentWidth) * contentHeight;

        const pdf = new jsPDF('', 'pt', 'a4') // 下载尺寸 a4 纸 比例
        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            //避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage()
            }
          }
        }
        pdf.save(`${pr.name}的个人简历`)
      })
    }
  },
  mounted() {
  }
})
</script>

<template>
  <div class="export-con" id="exportCon">
    <button @click="saveAsPDF">导出PDF</button>
  </div>
  <main id="main">
    <div class="right">
      
      <div class="wrapper">
        <div class="title">
          <span>项目经历</span>
        </div>
        <div class="mb30" v-for="(item, index) in pr.project" :key="index">
          <div class="flex-wrapper header">
            <div class="name">{{item.name}}</div>
            <div class="link"><a :href="item.link" target="_blank">{{item.link}}</a></div>
          </div>
          <div class="desc" v-html="item.desc"></div>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>工作经历</span>
        </div>
        <div v-for="(item, index) in pr.works" :key="index">
          <div class="flex-wrapper header">
            <div class="name">{{item.name}}</div>
            <div class="through">{{item.through}}</div>
          </div>
          <div class="desc" v-html="item.desc"></div>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span class="text">教育背景</span>
        </div>
        <div v-for="(item, index) in pr.edu" :key="index">
          <div class="flex-wrapper header">
            <div class="name">{{item.name}}</div>
          </div>
          <div v-for="(time_item, time_index) in item.timeLine" :key="time_index">
            <div class="time">{{time_item.time}}</div>
            <div class="desc" v-html="time_item.desc"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="left">
      <div class="avatar">
        <img  :src="pr.avatar" alt="个人头像">
      </div>
      <div class="name">{{pr.name}}</div>
      <div class="posts">{{pr.posts}}</div>
      <div class="skills">
        <skill :skill="item" v-for="(item, index) in pr.skills" :key="index"></skill>
      </div>
      <div class="address">
        <div class="phone">
          <i class="iconfont icon-phone"></i>
          <div class="link">
            <a :href="'tel:' + pr.phone">{{pr.phone}}</a>
          </div>
        </div>
        <div class="email">
          <i class="iconfont icon-email1"></i>
          <div class="link">
            <a :href="'mailto:' + pr.email">{{pr.email}}</a>
          </div>
        </div>
        <div class="github">
          <i class="iconfont icon-github-fill"></i>
          <div class="link">
            <a :href="prefixProtocol(pr.github)" target="_blank">{{pr.github}}</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.export-con{
  text-align: right;
  position: absolute;
  right: 20px;
  top: 8px;
}
main{
  min-width: 800px;
  display: flex;
  flex-direction: row-reverse;
  .left{
    width: 260px;
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #f5f5f5;
    text-align: center;
    font-size: 24px;
    .name{
      font-weight: bold;
      margin-bottom: 20px;
    }
    .avatar{
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 150px;
      text-align: center;
      margin: 0 auto 15px;
      img{
        width: 100%;
        display:block;
        margin: 0 auto;
      }
    }
    .posts{
      margin-bottom: 20px;
    }
    .address{
      margin-top: 60px;
      font-size: 16px;
      .iconfont{
        font-size: 24px;
      }
    }
    .address > div{
      display: flex;
      padding: 10px 0;
      .link{
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
  .right{
    flex: 1;
    padding: 30px 20px;
    
    .wrapper{
      margin-bottom: 40px;
      .header{
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .title{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 12px;
        overflow: hidden;
        position: relative;
        span{
          padding-right: 30px;
          background-color: #fff;
        }
        &:after{
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: #f5f5f5;
          position: absolute;
          top: 50%;
          margin-top: -1px;
          z-index: -1;
        }
      }
      .name{
        font-size: 20px;
        font-weight: bold;
      }
      .desc{

      }
    }
  }
}
</style>
