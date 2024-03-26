<template>
    <div>
        <h1>API</h1>
        <div>
            <div v-for="item in data" class="category">
                <h2>{{ item.title }}</h2>
                <div v-for="link in item.links">
                    <Chain />
                    <div>
                        <a :href="`https://palestinelove.org${link.url}`" target="_blank">{{ link.url }}</a>
                        <p>{{ link.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chain from "@/components/icons/Chain.vue"

const data = [
    {
        title: 'social media accounts',
        links: [
            {
                url: '/api/v1/social-media',
                desc: 'Every social media account in our database.'
            },
            {
                url: '/api/v1/social-media/networks',
                desc: 'Social networks we collect accounts for.'
            },
            {
                url: '/api/v1/social-media/networks/[network]',
                desc: 'Listing of social media accounts for the specified [network].'
            }
        ]
    },
    {
        title: 'websites',
        links: [
            {
                url: '/api/v1/websites',
                desc: 'Every website in our database.'
            },
            {
                url: '/api/v1/websites/categories',
                desc: 'Every website category in our database.'
            },
            {
                url: '/api/v1/websites/categories/[category]',
                desc: 'Listing of websites for the specified [category].'
            }
        ]
    }
]
</script>

<style scoped>
h1 {
    margin-bottom: 66px;
}

h1 + div {
    row-gap: 32px;
}

.category {
    row-gap: 16px;
}

h2 {
    color: var(--color-gray-2);
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.category > div {
    align-items: center;
    column-gap: 16px;
    flex-direction: row;
}

.category svg {
    flex-shrink: 0;
}

.category a {
    font-weight: bold;
    margin-bottom: 4px;
    word-break: break-all;
}

.category p {
    color: var(--color-gray-0);
}
</style>