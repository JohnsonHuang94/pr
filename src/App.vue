<script>
import { pr } from '@/config/config'
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
  }
})
</script>

<template>
  <main>
    <div class="right">
      <div class="wrapper">
        <div class="title">
          <span>项目经历</span>
        </div>
        <div v-for="(item, index) in pr.project" :key="index">
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
main{
  min-width: 800px;
  display: flex;
  flex-direction: row-reverse;
  .left{
    width: 300px;
    height: 100%;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    // background: -webkit-linear-gradient(45deg, #3ac7ff, #28e7ff);
    background-color: #f5f5f5;
    color: #1E2430;
    text-align: center;
    font-size: 24px;
    .name{
      font-weight: bold;
      margin-bottom: 20px;
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
      }
    }
  }
  .right{
    flex: 1;
    padding: 30px;
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
