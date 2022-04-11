
<template>
  <div class="progress">
      <div class="data" :style="getProgressStyle(data)"></div>
  </div>
</template>

<script >
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props: ['data'],
    setup() {
        const getProgressStyle = (data) => {
                const rate = data / 100;
                const width = rate * 140;
                const bg = rate >= 0.8 ? '#19D386' : rate < 0.6 ? '#FD2E58' : '#FF9B00'
                return `width:${width}px;background-color:${bg}`
        }
        return {
            getProgressStyle
        }
    }
})
</script>

<style scoped lang="scss">
.progress{
    width: 140px;
    height: 14px;
    background-color: #DBDDE1;
    border-radius: 10px;
    overflow: hidden;
    .data{
        height: 100%;
        border-radius: 10px;
        background-color: bisque;
    }
}
</style>