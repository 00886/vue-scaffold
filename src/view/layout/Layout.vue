<template>
    <div class="common-layout">
        <el-container class="layout-outer">
            <Aside />
            <el-container class="layout-inner">
                <Header />
                <Main />
                <Footer />
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.layout-outer {
    height: 100vh;
    width: 100vw;

    .layout-inner {
        display: flex;
        flex-direction: column;
    }
}
</style>
