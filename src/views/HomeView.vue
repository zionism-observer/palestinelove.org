<template>
    <div>
        <h1>Your directory of Palestine-related content</h1>
        <div class="content">
            <div v-for="item in data">
                <h2>{{ item.title }}</h2>
                <ul>
                    <li v-for="link in item.links">
                        <RouterLink :to="link.url">
                            <div class="text">
                                <span>{{ link.label }}</span>
                                <span> (45)</span>
                            </div>
                            <div class="icon-container"><ArrowRight /></div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowRight from "@/components/icons/ArrowRight.vue"

const data = [
    {
        title: "stay informed",
        links: [
            { label: 'Evidence', url: '/' },
            { label: 'Historical Preservation', url: '/' },
            { label: 'News', url: '/' },
            { label: 'Publications', url: '/' },
            { label: 'Directory', url: '/' },
            { label: 'Martyrs', url: '/' }
        ]
    },
    {
        title: "learn",
        links: [
            { label: 'History', url: '/' },
            { label: 'Culture', url: '/' },
            { label: 'Art', url: '/' },
            { label: 'Activism', url: '/' },
            { label: 'Education', url: '/' }
        ]
    },
    {
        title: "get involved",
        links: [
            { label: 'Boycott & Company Listings', url: '/' },
            { label: 'Non-profit Organizations', url: '/' },
            { label: 'Donations', url: '/' }
        ]
    },
    {
        title: "access database",
        links: [
            { label: 'Use our API to retrieve resources in .jsonxsxformat', url: '/' },
            { label: 'Add to database', url: '/' },
            { label: 'Report resource', url: '/' }
        ]
    }
]
</script>

<style scoped>
h1 {
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 48px;
}

.content {
    display: grid;
    grid-gap: 32px;
}

h2 {
    border-bottom: 1px solid rgba(13, 15, 17, 0.08);
    color: var(--color-gray-0);
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0.16em;
    margin-bottom: 20px; /* original: 24px */
    padding-bottom: 4px; /* original: 8px */
    text-transform: uppercase;
}

ul {
    padding-left: 24px;
    row-gap: 12px; /* original: 16px */
}

li {
    display: list-item;
}

li a {
    align-items: center;
    column-gap: 8px;
    flex-direction: row;
}

.text {
    display: block;
}

.text > span {
    display: inline;
}

.text > span:nth-of-type(1) {
    font-size: 14px;
    font-weight: bold;
}

.text > span:nth-of-type(2) {
    font-size: 12px;
}

li svg {
    fill: var(--color-green-0);
    height: 11.2px;
}

@media (min-width: 768px) {
    .content {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    h1 {
        margin-bottom: 64px;
    }

    .content {
        grid-template-columns: auto;
    }
}

@media (min-width: 1366px) {
    h1 {
        font-size: 32px;
    }

    .content {
        grid-template-columns: repeat(2, 1fr);
    }

    h2 {
        font-size: 12px;
    }

    .text > span:nth-of-type(1) {
        font-size: 16px;
    }

    .text > span:nth-of-type(2) {
        font-size: 14px;
    }
}
</style>
<!--
h1 {
    font-size: 24px;
    margin-bottom: 55px;
}

.content {
    row-gap: 32px;
}

h2 {
    color: var(--color-gray-2);
    font-size: 10px;
    letter-spacing: 0.1em;
}

ul {
    color: var(--color-green-0);
    font-weight: 600;
    margin-top: 12px;
    padding-left: 24px;
    row-gap: 12px;
}

li {
    display: list-item;
}

ul a {
    align-items: center;
    column-gap: 3px; /* deviation */
    flex-direction: row;
    font-size: 14px;
}

ul svg {
    fill: var(--color-green-0);
    height: 11px; /* deviation */
}

ul .note {
    color: var(--color-gray-0);
    font-size: 14px;
    opacity: 0.5;
}

@media (min-width: 768px) {
    h2 {
        font-size: 12px;
    }

    ul {
        margin-top: 16px;
        row-gap: 16px;
    }

    ul a,
    ul .note {
        font-size: 16px;
    }
}
-->