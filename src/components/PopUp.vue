<template>
    <div :class="{ 'close': !isVisible }">
        <p>{{ label }}</p>
        <button @click="isVisible = !isVisible"><XMark /></button>
    </div>
</template>

<script setup lang="ts">
import XMark from "@/components/icons/XMark.vue"
import {ref, defineProps} from "vue"

defineProps<{
    label: string
}>()

const isVisible = ref(true)
</script>

<style scoped>
div {
    background-color: var(--color-white);
    border-radius: 4px;
    bottom: 64px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08);
    column-gap: 16px;
    display: flex;
    justify-content: space-between;
    left: 16px;
    padding: 16px;
    position: fixed;
    right: 16px;
    transition: opacity 0.25s;
    z-index: 20;
}

p {
    color: var(--color-gray-1);
    font-size: 14px;
    line-height: 20px;
}

button {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    height: 20px;
    justify-content: center;
    width: 20px;
}

button svg {
    height: 12px;
    stroke: var(--color-gray-0); /* #596066 */
    width: 12px;
}

.close {
    opacity: 0;
    pointer-events: none;
}

@media (min-width: 1024px) {
    div {
        bottom: 80px;
        left: 64px;
        right: 64px;
    }

    p {
        font-size: 16px;
    }
}
</style>