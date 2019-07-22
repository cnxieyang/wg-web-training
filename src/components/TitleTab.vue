<template>
    <div class="tabs">
        <div class="title_tab">
            <span>{{title_name}}</span>
        </div>
        <div class="title_num">
            {{title_num}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title_num', 'title_name'],

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
    }

    .tabs {
        display: inline-block;
        width: 25%;
        color: #737373;
        padding: 2.1rem 2.4rem;
        margin: 0;
        min-width: 10rem;
        line-height: 1;
    }


</style>
