<template>
    <div>
        <button @click="isVisible = !isVisible" :class="{ 'visible': isVisible }">
            <span>{{ title }}</span>
            <PlusIcon v-if="!isVisible" class="plus-icon" />
            <MinusIcon v-else class="minus-icon" />
        </button>
        <div v-if="isVisible">
            <RouterLink v-for="link in links" :to="link.url">{{ link.label }}</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import PlusIcon from "@/components/icons/PlusIcon.vue"
import MinusIcon from "@/components/icons/MinusIcon.vue"

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
button {
    align-items: center;
    border-bottom: 1px solid rgba(166, 168, 172, 0.32);
    flex-direction: row;
    font-size: 16px;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
}

svg {
    fill: var(--color-gray-0);
    height: 16px;
}

a {
    font-size: 12px;
    padding: 12px 24px;
}

.visible {
    border-bottom: none;
    font-weight: bold;
}
</style>