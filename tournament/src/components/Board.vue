<template>
    <div class="board">
        <Header/>
        <Round :round1-data="round1Data" :semifinals-data="semifinalsData" :finals-data="finalsData"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Header from "./Header";
    import Round from "./Round";

    export default {
        name: 'Board',
        components: {
            Header,
            Round
        },
        computed: {
            ...mapGetters([
                'round1Data',
                'semifinalsData',
                'finalsData'
            ])
        }
    }
</script>

<style scoped>

</style>
