<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import PopUp from "@/components/PopUp.vue"
import {getRandomImage} from "@/utils/utils"

const img = getRandomImage()
</script>

<template>
    <Header />
    <div class="main-container">
        <img :src="img.src" :alt="img.alt" />
        <RouterView />
    </div>
    <Footer />
    <PopUp label="This is an open-source directory. We neither vet nor endorse the resources in the database. Always conduct your own research before trusting any resource." />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
