<template>
    <div>
        <h1>Your directory of Palestine-related content</h1>
        <div v-if="websites.data" class="content">
            <div v-for="item in getLinksWithTitles(getLinksWithCount(websites.data))">
                <h2>{{ item.title }}</h2>
                <ul>
                    <li v-for="link in item.links">
                        <RouterLink :to="`/websites/${link.name.toLowerCase()}`">
                            <div class="text">
                                <span>{{ link.name }}</span>
                                <span> ({{ link.count }})</span>
                            </div>
                            <div class="icon-container"><ArrowRight /></div>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div>
                <h2>access database</h2>
                <ul>
                    <li>
                        <RouterLink to="/docs">
                            <div class="text"><span>Use our API to retrieve resources in .jsonxsxformat</span></div>
                            <div class="icon-container"><ArrowRight /></div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contribute">
                            <div class="text"><span>Add to database</span></div>
                            <div class="icon-container"><ArrowRight /></div>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/report">
                            <div class="text"><span>Report resource</span></div>
                            <div class="icon-container"><ArrowRight /></div>
                        </RouterLink>
                    </li>
                    <li class="note">Coming soon: Download resources in .xlxs format</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ArrowRight from "@/components/icons/ArrowRight.vue"
import fetchWebsites from "@/store/website"
import {Website} from "@/Types"

const websites = fetchWebsites()

function getLinksWithCount(sites) {
    const result: { name: string, count: number }[] = []

    // by going over each website link or resource, calculate how many times each category appears in the list
    sites.forEach((w: Website) => {
        w.categories.forEach(c => {
            const categoryInResult = result.find(r => r.name === c)
            if (categoryInResult) {
                categoryInResult.count++
            } else {
                result.push({
                    name: c,
                    count: 1
                })
            }
        })
    })

    // sort the resulting array by category name
    result.sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
    })

    return result
}

function getLinksWithTitles(links) {
    function findCategory(c: string) {
        const link = links.find(l => l.name.toLowerCase() === c.toLowerCase())
        // some categories don't belong to any website or resource yet. For these, explicitly return an object with count set to 0. Otherwise, it just returns undefined
        if (link) return link
        else return {
            name: c,
            count: 0
        }
    }

    return [
        {
            title: "stay informed",
            links: [
                findCategory("Evidence"),
                findCategory("Historical Preservation"),
                findCategory("News"),
                findCategory("Publications"),
                findCategory("Directory"),
                findCategory("Martyrs")
            ]
        },
        {
            title: "learn",
            links: [
                findCategory("History"),
                findCategory("Culture"),
                findCategory("Art"),
                findCategory("Activism"),
                findCategory("Education")
            ]
        },
        {
            title: "get involved",
            links: [
                findCategory("Boycott & Company Listings"),
                findCategory("Non-profit Organizations"),
                findCategory("Donations")
            ]
        }
    ]
}
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
    row-gap: 12px; /* original: 16px */
}

li a {
    align-items: center;
    column-gap: 8px;
    flex-direction: row;
    width: fit-content;
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

.note {
    color: var(--color-gray-2);
    font-weight: bold;
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