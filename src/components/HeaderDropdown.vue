<template>
    <div class="wrapper">
        <button @click="isVisible = !isVisible">
            <span>{{ title }}</span>
            <Chevron :class="{ 'rotated': isVisible }" />
        </button>
        <div v-if="isVisible">
            <RouterLink v-for="link in links" :to="link.url">{{ link.label }}</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import Chevron from "@/components/icons/Chevron.vue"
import {ref} from "vue"

defineProps<{
    title: string
    links: {
        label: string
        url: string
    }[]
}>()

const isVisible = ref(false)
</script>

<style scoped>
.wrapper {
    position: relative;
}

button {
    align-items: center;
    column-gap: 8px;
    flex-direction: row;
}

button span {
    font-size: 14px;
    font-weight: 500;
}

svg {
    width: 8px;
}

.rotated {
    transform: rotate(180deg);
}

button + div {
    background-color: var(--color-white);
    border-radius: 16px;
    box-shadow: 1px 4px 4px 0 rgba(0, 0, 0, 0.02), 2px 8px 16px -12px rgba(0, 0, 0, 0.16);
    padding: 16px 24px;
    position: absolute;
    right: 0;
    top: 100%;
    width: 296px;
}

a {
    font-size: 14px;
    padding: 12px 0; /* original: 16px 0 */
}
</style>