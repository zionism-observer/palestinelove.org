<template>
    <div>
        <h1>Social Media</h1>
        <div v-if="socialMediaLinks.data" class="container">
            <div class="networks">
                <RouterLink v-for="n in networksWithCount" :to="`/social-media/${n.name}`">
                    <div class="network-name">
                        <span>{{ n.name }}</span>
                        <span> ({{ n.count }})</span>
                    </div>
                    <div class="icon-container"><ArrowRight /></div>
                </RouterLink>
            </div>
            <div class="featured">
                <h2>FEATURED</h2>
                <div>
                    <div v-for="n in socialMediaLinks.data.slice(0, 3)">
                        <h3>{{ n.name }}</h3>
                        <p v-if="n.description" class="line-clamp-2">{{ n.description }}</p>
                        <div class="icons">
                            <a href="#" target="_blank"><YouTube /></a>
                            <a href="#" target="_blank"><Instagram /></a>
                            <a href="#" target="_blank"><Twitter /></a>
                            <a href="#" target="_blank"><Threads /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="socialMediaLinks.error" class="error">
            <p>{{ socialMediaLinks.error }}</p>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script setup lang="ts">
import fetchSocialMediaLinks from "@/store/socialMedia"
import { computed } from "vue"
import ArrowRight from "@/components/icons/ArrowRight.vue"
import YouTube from "@/components/icons/YouTube.vue";
import Instagram from "@/components/icons/Instagram.vue";
import Twitter from "@/components/icons/Twitter.vue";
import Threads from "@/components/icons/Threads.vue";

const socialMediaLinks = fetchSocialMediaLinks()

const networksWithCount = computed(() => {
    const result = []

    // in the data sent by the API, count how many links point to each social media
    socialMediaLinks.data.forEach(sm => {
        const networkInResult = result.find(item => item.name === sm.network)
        if (networkInResult) {
            networkInResult.count++
        } else {
            result.push({
                name: sm.network,
                count: 1
            })
        }
    })

    // sort the resulting array by social media name
    result.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })

    return result
})
</script>

<style scoped>
h1 {
    font-size: 14px;
    margin-bottom: 20px; /* original: 24px */
}

.networks {
    display: grid;
    flex-shrink: 0;
    grid-row-gap: 12px; /* original: 16px */
    grid-template-columns: repeat(2, 1fr);
}

.networks > a {
    align-items: center;
    column-gap: 4px; /* original: 8px */
    flex-direction: row;
    width: fit-content;
}

.network-name {
    display: block;
}

.network-name > span {
    display: inline;
}

.network-name > span:nth-of-type(1) {
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
}

.network-name > span:nth-of-type(2) {
    color: var(--color-gray-0);
    font-size: 12px;
    font-weight: 300;
}

.networks svg {
    fill: var(--color-black);
    height: 11.2px;
}

.featured {
    margin-top: 64px;
}

.featured h2 {
    border-bottom: 1px solid var(--color-black);
    font-size: 10px;
    letter-spacing: 0.1em;
    line-height: 12px;
    margin-bottom: 24px; /* original: 16px */
    padding-bottom: 8px;
}

.featured > div {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
}

.featured h3 {
    font-size: 14px;
    word-break: break-all;
}

.featured p {
    color: var(--color-gray-0);
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
}

.icons {
    column-gap: 12px; /* original: 16px */
    flex-direction: row;
    margin-top: 12px;
}

.icons a:nth-of-type(1) svg,
.icons a:nth-of-type(2) svg {
    height: 16px;
    stroke: var(--color-black);
}

.icons a:nth-of-type(3) svg,
.icons a:nth-of-type(4) svg {
    fill: var(--color-black);
    height: 16px;
}

@media (min-width: 768px) {
    h1 {
        font-size: 24px;
        margin-bottom: 66px;
    }

    .network-name > span:nth-of-type(1) {
        font-size: 16px;
    }
}

@media (min-width: 1366px) {
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .networks {
        grid-template-columns: auto;
    }

    .featured {
        margin-top: 0;
        width: 218px;
    }

    .featured > div {
        grid-row-gap: 24px; /* original: 16px */
        grid-template-columns: auto;
    }

    .error {
        max-width: 420px;
    }
}
</style>