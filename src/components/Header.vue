<!--
<RouterLink to="/social-media" :class="{ 'current': route.path === '/social-media' }">SOCIAL MEDIA</RouterLink>
-->
<template>
    <div class="navbar">
        <RouterLink to="/" class="logo-link">
            <img src="@/assets/watermelon.svg" alt="PALESTINE LOVE LOGO" />
            <div>PALESTINE LOVE</div>
        </RouterLink>
        <div class="links-for-large-screens">
            <HeaderDropdown
                title="Stay Informed"
                :links="[
                    { label: 'Evidence', url: '/' },
                    { label: 'Historical Preservation', url: '/' },
                    { label: 'News', url: '/' },
                    { label: 'Publications', url: '/' },
                    { label: 'Directory', url: '/' },
                    { label: 'Martyrs', url: '/' }
                ]"
            />
            <HeaderDropdown
                title="Learn"
                :links="[
                    { label: 'History', url: '/' },
                    { label: 'Culture', url: '/' },
                    { label: 'Art', url: '/' },
                    { label: 'Activism', url: '/' },
                    { label: 'Education', url: '/' }
                ]"
            />
            <HeaderDropdown
                title="Get Involved"
                :links="[
                    { label: 'Boycott & Company Listings', url: '/' },
                    { label: 'Non-profit Organizations', url: '/' },
                    { label: 'Donations', url: '/' }
                ]"
            />
            <RouterLink to="/social-media">Social media</RouterLink>
        </div>
        <button @click="isVisible = !isVisible">
            <XMark v-if="isVisible" class="x-icon" />
            <Menu v-else class="bars-icon" />
        </button>
    </div>
    <div v-if="isVisible" class="navbar-dropdown-menu">
        <div>
            <button @click="isVisible = !isVisible">
                <XMark v-if="isVisible" class="x-icon" />
                <Menu v-else class="bars-icon" />
            </button>
        </div>
        <div>
            <HeaderMobileDropdown
                title="Stay Informed"
                :links="[
                    { label: 'Evidence', url: '/' },
                    { label: 'Historical Preservation', url: '/' },
                    { label: 'News', url: '/' },
                    { label: 'Publications', url: '/' },
                    { label: 'Directory', url: '/' },
                    { label: 'Martyrs', url: '/' }
                ]"
            />
            <HeaderMobileDropdown
                title="Learn"
                :links="[
                    { label: 'History', url: '/' },
                    { label: 'Culture', url: '/' },
                    { label: 'Art', url: '/' },
                    { label: 'Activism', url: '/' },
                    { label: 'Education', url: '/' }
                ]"
            />
            <HeaderMobileDropdown
                title="Get Involved"
                :links="[
                    { label: 'Boycott & Company Listings', url: '/' },
                    { label: 'Non-profit Organizations', url: '/' },
                    { label: 'Donations', url: '/' }
                ]"
            />
            <RouterLink to="/">Social media</RouterLink>
        </div>
    </div>
</template>

<style>
.bars-icon {
    stroke: var(--color-black);
    width: 24px;
}

.x-icon {
    stroke: var(--color-black);
    width: 16px;
}

.navbar {
    align-items: center;
    background-color: var(--color-white);
    border-bottom: 2px solid rgba(166, 168, 172, 0.32);
    flex-direction: row;
    height: 64px;
    justify-content: space-between;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 40;
}

.navbar .logo-link {
    align-items: center;
    column-gap: 8px;
    flex-direction: row;
    font-weight: 600;
}

.navbar .logo-link img {
    height: 32px;
}

.navbar .logo-link div {
    display: none;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.04em;
}

.links-for-large-screens {
    column-gap: 32px;
    display: none;
    flex-direction: row;
}

.links-for-large-screens > a {
    font-size: 14px;
    font-weight: 500;
}

.navbar-dropdown-menu {
    background-color: var(--color-white);
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.12);
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity 0.25s;
    width: 100vw;
    z-index: 30;
}

.navbar-dropdown-menu > div:nth-of-type(1) {
    align-items: end;
    border-bottom: 2px solid rgba(166, 168, 172, 0.32);
    height: 64px;
    justify-content: center;
    padding: 0 24px;
}

.navbar-dropdown-menu > div:nth-of-type(2) {
    padding: 12px;
}

.navbar-dropdown-menu > div:nth-of-type(2) > a {
    border-bottom: 1px solid rgba(166, 168, 172, 0.32);
    font-size: 16px;
    padding: 12px;
}

@media (min-width: 768px) {
    .navbar {
        padding-right: 48px;
    }

    .navbar .logo-link div {
        display: flex;
    }

    .navbar-dropdown-menu {
        left: auto;
        right: 24px;
        width: 300px;
        z-index: 50;
    }
}

@media (min-width: 1024px) {
    .navbar {
        padding: 0 36px;
    }

    .navbar > button {
        display: none;
    }

    .links-for-large-screens {
        display: flex;
    }
}

@media (min-width: 1366px) {
    .navbar {
        padding: 0 40px;
    }
}
</style>

<script setup lang="ts">
import Menu from "@/components/icons/Menu.vue"
import {ref, watch} from "vue"
import XMark from "@/components/icons/XMark.vue"
import {useRoute} from "vue-router"
import HeaderDropdown from "@/components/HeaderDropdown.vue"
import HeaderMobileDropdown from "@/components/HeaderMobileDropdown.vue"

const route = useRoute()

const isVisible = ref(false)

watch(route, () => {
    isVisible.value = false
})
</script>