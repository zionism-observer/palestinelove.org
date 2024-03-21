<template>
    <main class="main-container">
        <img src="@/assets/img2.png" alt="Image of two women with the flag of Palestine" />
        <div>
            <h1>Social Media</h1>
            <div v-if="socialMediaLinks.data" class="container">
                <div class="networks">
                    <RouterLink v-for="n in networksWithCount" :to="`/social-media/${n.name}`" class="network">
                        <div>
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
    </main>
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
    margin-bottom: 24px;
}

.networks {
    display: grid;
    flex-shrink: 0;
    grid-row-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
}

.network {
    align-items: center;
    column-gap: 4px; /* deviation */
    display: flex;
    width: fit-content;
}

.network > div > span:nth-of-type(1) {
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
}

.network > div > span:nth-of-type(2) {
    color: var(--color-gray-0);
    font-size: 12px;
    font-weight: 300;
}

.network svg {
    fill: var(--color-black);
    height: 11px; /* deviation */
}

.featured {
    margin-top: 64px;
}

.featured h2 {
    border-bottom: 1px solid var(--color-black);
    font-size: 10px;
    letter-spacing: 0.1em;
    margin-bottom: 24px; /* deviation */
    padding-bottom: 8px;
}

.featured > div {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
}

.featured > div > div {
    width: 100%;
}

.featured h3 {
    font-size: 14px;
    margin-bottom: 8px;
    word-break: break-all;
}

.featured p {
    color: var(--color-gray-0);
    font-size: 12px;
    line-height: 16px;
}

.icons {
    column-gap: 12px; /* deviation */
    display: flex;
    margin-top: 12px;
}

.icons a {
    display: flex;
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

.icon-container {
    align-items: center;
    display: inline-flex;
    height: 16px;
    justify-content: center;
    width: 16px;
}

@media (min-width: 1024px) {
    h1 {
        font-size: 24px;
        margin-bottom: 83px;
    }

    .container {
        column-gap: 15vw;
        display: flex;
    }

    .networks {
        grid-template-columns: auto;
    }

    .network > div > span:nth-of-type(1) {
        font-size: 16px;
    }

    .featured {
        margin-top: 0;
        width: 218px;
    }

    .featured > div {
        grid-row-gap: 24px; /* deviation */
        grid-template-columns: auto;
    }

    .error {
        max-width: 420px;
    }
}
</style>