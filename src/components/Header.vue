<template>
    <header>
        <RouterLink to="/" class="logo-link">
            <img src="@/assets/watermelon.svg" alt="PALESTINE LOVE LOGO" />
            <span>PALESTINE LOVE</span>
        </RouterLink>
        <div class="links">
            <RouterLink to="/social-media">SOCIAL MEDIA</RouterLink>
            <RouterLink to="/websites">WEBSITES</RouterLink>
            <RouterLink to="/contribute">CONTRIBUTE</RouterLink>
            <RouterLink to="/docs">API DOCS</RouterLink>
        </div>
        <button @click="isVisible = !isVisible" class="menu-button">
            <XMark v-if="isVisible" class="x" />
            <Menu v-else class="bars" />
        </button>
    </header>
    <nav class="invisible-nav" :class="{ 'open': isVisible }">
        <RouterLink to="/social-media">SOCIAL MEDIA</RouterLink>
        <RouterLink to="/websites">WEBSITES</RouterLink>
        <RouterLink to="/contribute">CONTRIBUTE</RouterLink>
        <RouterLink to="/docs">API DOCS</RouterLink>
    </nav>
</template>

<style>
header {
    align-items: center;
    background-color: var(--color-white);
    display: flex;
    justify-content: space-between;
    padding: 16px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 40;
}

header .logo-link {
    align-items: center;
    column-gap: 8px;
    display: flex;
    font-weight: 600;
}

header .logo-link img {
    width: 24px;
}

header .links {
    color: var(--color-gray-0);
    column-gap: 32px;
    display: none;
    font-size: 14px;
    font-weight: 500;
    padding-right: 32px;
}

header .menu-button {
    display: flex;
}

header .menu-button svg {
    stroke: var(--color-black);
}

header .menu-button svg.bars {
    width: 24px;
}

header .menu-button svg.x {
    width: 16px;
}

nav.invisible-nav {
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    height: 100vh;
    left: 0;
    opacity: 0;
    padding-left: 24px;
    padding-top: 100px;
    pointer-events: none;
    position: fixed;
    row-gap: 32px;
    top: 0;
    transition: opacity 0.25s;
    width: 100vw;
    z-index: 30;
}

nav.invisible-nav.open {
    opacity: 1;
    pointer-events: initial;
}

@media (min-width: 1024px) {
    header {
        padding: 16px 24px;
    }

    header .links {
        display: flex;
    }

    header .menu-button {
        display: none;
    }
}
</style>

<script setup>
import Menu from "@/components/icons/Menu.vue"
import {ref} from "vue"
import XMark from "@/components/icons/XMark.vue";

const isVisible = ref(false)
</script>