<template>
    <div class="skill">
        <div class="name">{{skill.name}}</div>
        <div class="score">
            <progressVue :data="skill.score"></progressVue>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import progressVue from "./progress.vue";
export default defineComponent({
    components: {
        progressVue,
    },
    props: ['skill'],
})
</script>

<style scoped lang="scss">
.skill{
    margin: 10px 0;
    display: flex;
    .name{
        font-size: 14px;
        line-height: 14px;
        text-align: right;
        flex: 1;
    }
    .score{
        padding-left: 8px;
        flex: 2;
        overflow: hidden;
    }
}
</style>