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
            <a href="/" target="_blank">
                <span>API Docs</span>
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
    overflow: auto;
    padding: 16px 24px;
    position: fixed;
    width: 100%;
    z-index: 10;
}

footer .links {
    column-gap: 24px;
    flex-direction: row;
    min-width: 450px;
}

footer .links a {
    align-items: center;
    column-gap: 4px;
    flex-direction: row;
    font-size: 16px;
}

footer .links a span {
    flex-shrink: 0;
}

footer .links a svg {
    fill: var(--color-green-0);
    width: 12.8px;
}
</style>