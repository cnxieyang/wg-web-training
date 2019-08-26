<template>
    <div class="navigation">
        <img src="../assets/logo.png"/>
        <h1>前端系列课程培训</h1>
        <router-link to="/firstCourse">课程一实战:tab组件抽取及切换</router-link>
        <router-link to="/secondCourse">课程二实战:布局</router-link>
        <router-link to="/weatherCourse">课程结束:天气预报</router-link>

        <h2>xieyang@wisdomgarden.com</h2>

    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .navigation {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
