<template>
    <footer>
        <div class="links">
            <a href="https://techforpalestine.org" target="_blank">
                <span>Tech for Palestine</span>
                <div class="icon-container"><ArrowTopRightOnSquare /></div>
            </a>
            <a href="https://zionism.observer" target="_blank">
                <span>Zionism Observer</span>
                <div class="icon-container"><ArrowTopRightOnSquare /></div>
            </a>
        </div>
    </footer>
</template>

<script setup>
import ArrowTopRightOnSquare from "./icons/ArrowTopRightOnSquare.vue"
</script>

<style>
footer {
    background-color: var(--color-white);
    bottom: 0;
    padding: 16px 24px;
    position: fixed;
    width: 100%;
    z-index: 10;
}

footer .links {
    column-gap: 16px;
    display: flex;
    justify-content: center;
}

footer .links a:not(:first-of-type) {
    border-left: 1px solid var(--color-gray-2);
    padding-left: 16px;
}

footer .links a {
    align-items: center;
    column-gap: 4px;
    display: flex;
    font-size: 14px;
}

footer .links a svg {
    fill: var(--color-green-0);
    width: 14px; /* deviation */
}

.icon-container {
    align-items: center;
    display: flex;
    height: 16px;
    justify-content: center;
    width: 16px;
}

@media (min-width: 1024px) {
    footer .links {
        column-gap: 24px;
        justify-content: left;
    }

    footer .links a:not(:first-of-type) {
        border-left: none;
        padding-left: 0;
    }

    footer .links a {
        font-size: 16px;
    }
}
</style>