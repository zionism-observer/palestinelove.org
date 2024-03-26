<template>
    <div>
        <h1>Websites</h1>
        <div class="breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <div class="icon-container"><Chevron /></div>
            <RouterLink :to="`/social-media/${processUrl(route.path)}`">{{ processUrl(route.path) }}</RouterLink>
        </div>
        <div v-if="websiteLinks.data" class="links">
            <div v-if="getWebsites(websiteLinks.data).length > 0" v-for="link in getWebsites(websiteLinks.data)">
                <div>
                    <a :href="link.url" target="_blank">{{ link.name }}</a>
                    <button @click="reportResource({ name: link.name, url: link.url })">Report</button>
                </div>
                <p v-if="link.description">{{ link.description }}</p>
                <p v-else>No description.</p>
            </div>
            <p v-else>No entries has been added for this category yet.</p>
        </div>
        <div v-else-if="websiteLinks.error" class="error">
            <p>{{ websiteLinks.error }}</p>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script setup lang="ts">
import Chevron from "@/components/icons/Chevron.vue"
import {useRoute} from "vue-router"
import fetchWebsites from "@/store/website"
import {isReportFormOpen, resourceBeingReported} from "@/store/isReportFormOpen"

const route = useRoute()
const websiteLinks = fetchWebsites()

function processUrl(url: string) {
    return url
        .replace("/websites/", "")
        .replace(/%20/g, " ")
}

function getWebsites(websites) {
    return websites.filter(link => {
        return link.categories.some(c => {
            return c.toLowerCase() === processUrl(route.path).toLowerCase()
        })
    })
}

function reportResource(obj: { name: string, url: string }) {
    isReportFormOpen.value = !isReportFormOpen.value
    resourceBeingReported.value = obj
}
</script>

<style scoped>
h1 {
    display: none;
    font-size: 24px;
    margin-bottom: 12px;
}

.breadcrumb {
    align-items: center;
    column-gap: 4px;
    flex-direction: row;
    margin-bottom: 24px;
}

.breadcrumb a {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
}

.breadcrumb a:nth-of-type(1) {
    color: var(--color-gray-2);
}

.breadcrumb a:nth-of-type(2) {
    text-transform: capitalize;
}

.breadcrumb svg {
    fill: var(--color-gray-1);
    transform: rotate(270deg);
    width: 7px;
}

.links {
    display: grid;
    grid-gap: 24px;
}

.links > div {
    row-gap: 8px;
}

.links > div > div {
    flex-direction: row;
    justify-content: space-between;
}

.links a {
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
}

.links button {
    color: var(--color-gray-2);
    font-size: 10px;
    line-height: 16px;
}

.links p {
    color: var(--color-gray-0);
    font-size: 12px;
    line-height: 16px;
}

@media (min-width: 768px) {
    h1 {
        display: flex;
    }

    .links {
        grid-template-columns: repeat(2, 1fr);
    }

    .links > div {
        max-width: 215px;
    }
}

@media (min-width: 1024px) {
    .links {
        grid-template-columns: auto;
    }

    .links > div {
        max-width: none;
    }
}

@media (min-width: 1366px) {
    .links {
        grid-template-columns: repeat(2, 1fr);
    }

    .links > div {
        max-width: 215px;
    }
}
</style>