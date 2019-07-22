<template>
    <div class="tab">
        <h2>访问分析</h2>
        <title-tab title_num="30920" title_name="总访问量"></title-tab>
        <title-tab title_num="1069" title_name="总访客数"></title-tab>
        <title-tab title_num="755:27:11" title_name="总访问时长"></title-tab>

    </div>
</template>

<script>
    import TitleTab from './TitleTab.vue'

    export default {
        components: {
            'title-tab': TitleTab
        }
    }
</script>
<style lang="scss">
    .tab {
        color: #f4f4f4;
        width: 100%;
        float: left;
        position: relative;
    }
</style>
