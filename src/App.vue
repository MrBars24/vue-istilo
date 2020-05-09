<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Vue Istilo Docs"/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',

    components: {
        HelloWorld,
    },
};
</script>

<style lang="scss">
    @import './scss/app.scss';

    #app {
        font-family: 'Avenir', 'Helvetica', 'Arial', sans-serif;
        text-align: center;
        color: #2C3E50;
        margin-top: 60px;
    }
</style>
