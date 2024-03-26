<template>
    <div>
        <h1>Something's wrong here.</h1>
        <p>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. But don't worry, you can find plenty of other things on our website.</p>
    </div>
</template>

<script setup></script>

<style scoped>
div {
    max-width: 640px;
}

h1 {
    font-size: 28px;
    margin-bottom: 16px;
}

@media (min-width: 1024px) {
    h1 {
        font-size: 32px;
        margin-bottom: 24px;
    }

    p {
        font-size: 17px;
    }
}
</style>