<template>
    <header>
        <div class="title">Round 1</div>
        <div class="title">Semifinals</div>
        <div class="title">Finals</div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        padding: 10px 0;
        border-radius: 5px;
        background-color: #d3d3d3;
        text-align: center;
    }

    .title {
        width: 100%;
    }
</style>
