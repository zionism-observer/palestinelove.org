<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PopUp from "@/components/PopUp.vue";
</script>

<template>
    <Header />
    <RouterView />
    <Footer />
    <PopUp />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
