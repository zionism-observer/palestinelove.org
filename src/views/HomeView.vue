<script setup lang="ts">
import ArrowRight from "@/components/icons/ArrowRight.vue"
</script>

<template>
    <main>
        <div class="image-container">
            <img src="@/assets/img1.png" alt="Image of the flag of Palestine with a crowd" />
            <h1 class="mobile">Your directory of Palestine-related content</h1>
        </div>
        <div class="content-container">
            <h1 class="not-mobile">Your directory of Palestine-related content</h1>
            <div class="content">
                <div>
                    <h2>EXPLORE RESOURCES</h2>
                    <ul>
                        <li>
                            <RouterLink to="/social-media">
                                <span>670 social media accounts</span>
                                <div class="icon-container"><ArrowRight /></div>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/websites">
                                <span>89 websites</span>
                                <div class="icon-container"><ArrowRight /></div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>ACCESS DATABASE</h2>
                    <ul>
                        <li>
                            <RouterLink to="/docs">
                                <span>Use our API to retrieve resources in .json format</span>
                                <div class="icon-container"><ArrowRight /></div>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contribute">
                                <span>Add to database</span>
                                <div class="icon-container"><ArrowRight /></div>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">
                                <span>Report resource</span>
                                <div class="icon-container"><ArrowRight /></div>
                            </RouterLink>
                        </li>
                        <li class="note"><span>Coming soon: Download resources in .xlxs format</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding-bottom: 48px;
}

.image-container {
    align-items: center;
    column-gap: 34px;
    display: flex;
    padding: 76px 16px 32px 16px;
}

img {
    box-shadow: 10px 10px 0 0 var(--color-black);
    display: block;
    object-fit: cover;
    width: 150px; /* 150px */
}

.content-container {
    background-color: var(--color-gray-3);
    padding: 32px 16px 32px 16px;
}

.content > div:not(:first-of-type) {
    margin-top: 32px;
}

h1 {
    font-size: 24px;
}

h1.not-mobile {
    display: none;
    margin-bottom: 55px;
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
}

li:not(:first-of-type) {
    margin-top: 12px;
}

ul a {
    align-items: center;
    column-gap: 3px; /* deviation */
    display: inline-flex;
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

.icon-container {
    align-items: center;
    display: flex;
    height: 16px;
    justify-content: center;
    width: 16px;
}

@media (min-width: 1024px) {
    main {
        display: flex;
        height: 100vh;
        padding-bottom: 0;
    }

    .image-container {
        display: block;
        flex-shrink: 0;
        padding: 0;
        width: 41%; /* 592px */ /* deviation */
    }

    img {
        box-shadow: none;
        height: 100%;
        width: 100%;
    }

    .content-container {
        padding: 172px 8.75vw 0 8.75vw; /* 172px 0 0 140px */ /* deviation */
        width: 100%;
    }

    h1.mobile {
        display: none;
    }

    h1.not-mobile {
        display: block;
    }

    h2 {
        font-size: 12px;
    }

    ul,
    li:not(:first-of-type) {
        margin-top: 16px;
    }

    ul a,
    ul .note {
        font-size: 16px;
    }
}
</style>
