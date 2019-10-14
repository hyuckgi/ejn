<template>
    <section class="round">
        <div class="round1">
            <div v-for="data in round1Data" :key="data.number">
                <Match :data="data"/>
            </div>
        </div>
        <div class="semifinals">
            <div v-for="data in semifinalsData" :key="data.number">
                <Match :data="data"/>
            </div>
        </div>
        <div class="finals">
            <div v-for="data in finalsData" :key="data.number">
                <Match :data="data"/>
            </div>
        </div>
    </section>
</template>

<script>
    import Match from "./Match";

    export default {
        name: 'Round',
        components: {
            Match
        },
        props: {
            round1Data: Array,
            semifinalsData: Array,
            finalsData: Array
        }
    }
</script>

<style scoped>
    .round {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
    }

    .round1,
    .semifinals,
    .finals {
        width: 100%;
    }

    .semifinals > div:first-child {
        margin-bottom: 125px;
    }
</style>
