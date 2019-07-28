<template>
    <div>
        <div class="tab">
            <title-tab title_num="30920" title_name="总访问量" rate="-11%" @click.native="showTab1"
                       :is_select="show_first"></title-tab>
            <title-tab title_num="1069" title_name="总访客数" rate="30%" @click.native="showTab2"
                       :is_select="show_second"></title-tab>
            <title-tab title_num="755:27:11" title_name="总访问时长" rate="120%" @click.native="showTab3"
                       :is_select="show_third"></title-tab>
        </div>
        <div style="display: flex;width: 200px">
            <tab-chart :image_index="image_index"/>
        </div>
    </div>

</template>

<script>
    import TitleTab from './TitleTab.vue'
    import TabChart from './TabChart.vue'

    export default {
        data() {
            return {
                "show_first": true,
                "show_second": false,
                "show_third": false,
                "image_index": 0

            }
        },

        components: {
            'title-tab': TitleTab,
            'tab-chart': TabChart
        },
        methods: {
            showTab1() {
                this.show_first = true
                this.show_second = false
                this.show_third = false
                this.image_index = 0

            },
            showTab2() {
                this.show_first = false
                this.show_second = true
                this.show_third = false
                this.image_index = 1

            },
            showTab3() {
                this.show_first = false
                this.show_second = false
                this.show_third = true
                this.image_index = 2
            },

        }
    }
</script>
<style lang="scss">
    .tab {
        color: #f4f4f4;
        background-color: gray;
        display: flex;
        border: red;
        justify-content: flex-start;

    }
</style>
