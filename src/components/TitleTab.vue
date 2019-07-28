<template>
    <div class="tabs" :class="{tab_active:is_select}">
        <div class="title_tab">
            <span>{{title_name}}</span>
            <img src="../assets/narrow-up-blue.png"/>
            <span class="rate">{{rate}}</span>
        </div>
        <div class="title_tab">
            <span>{{title_num}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title_num', 'title_name', 'rate', 'is_select'],

    }
</script>

<style lang="scss">
    .title_num {
        font-size: 2.4rem;
        color: #333;
        margin-top: 1.2rem;
    }

    .title_tab {
        font-size: 1.4rem;
        margin-right: 1.2rem;
        color: #737373;
        margin-left: 20px;
        margin-top: 20px;
        font-weight: 500;

    }

    .rate {
        font-size: 1rem;
    }

    .tabs {
        flex: 1;
        color: #737373;
        background-color: #f7f7f7;
        border-right: 1px solid #dfdfdf !important;
        height: 120px;
        font-size: 14px;
        border-top: 1px solid #ffffff;

    }

    .tab_active {
        color: #000000;
        background-color: #ffffff;
        border-bottom: 1px solid #ffffff;
    }


</style>
