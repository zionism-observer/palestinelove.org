<template>
    <main>
        <div>
            <h1>Something's wrong here.</h1>
            <p>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. But don't worry, you can find plenty of other things on our website.</p>
        </div>
    </main>
</template>

<script setup></script>

<style scoped>
main {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    width: 100vw;
}

main > div {
    max-width: 640px;
}

h1 {
    font-size: 28px;
    margin-bottom: 16px;
}

p {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    main {
        padding-left: 0;
        padding-right: 0;
    }

    h1 {
        font-size: 32px;
        margin-bottom: 24px;
    }

    p {
        font-size: 17px;
    }
}
</style>