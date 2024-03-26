<template>
    <Header />
    <div class="main-container">
        <img :src="img.src" :alt="img.alt" />
        <RouterView />
    </div>
    <Footer />
    <div v-if="isReportFormOpen" class="report-form-popup">
        <div>
            <ResourceForm :isNew="false" />
        </div>
    </div>
    <PopUp label="This is an open-source directory. We neither vet nor endorse the resources in the database. Always conduct your own research before trusting any resource." />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import PopUp from "@/components/PopUp.vue"
import {getRandomImage} from "@/utils/utils"
import ResourceForm from "@/components/ResourceForm.vue"
import {isReportFormOpen, resourceBeingReported} from "@/store/isReportFormOpen"
import {watch} from "@vue/runtime-core"

const img = getRandomImage()

watch(isReportFormOpen, (value, oldValue) => {
    if ((!value) && oldValue) resourceBeingReported.value = { name: '', url: '' }
    document.documentElement.classList.toggle("no-scroll")
})
</script>

<style>
.report-form-popup {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    overflow: auto;
    position: fixed;
    width: 100vw;
    z-index: 100;
}

.report-form-popup > div > div {
    background-color: var(--color-white);
    padding: 24px;
}

@media (min-width: 768px) {
    .report-form-popup > div {
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 64px;
        padding-top: 64px;
    }

    .report-form-popup form {
        max-width: 568px;
    }

    .report-form-popup > div > div {
        border-radius: 10px;
        padding: 28px; /* original: 24px */
        width: fit-content;
    }
}
</style>
