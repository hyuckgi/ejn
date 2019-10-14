<template>
    <section class="match">
        <p class="match-number">{{ data.number }}</p>
        <ul class="participant-list">
            <li class="participant" :class="{hover: isHoverName(data.participant[0].name), finalWinnerBorder: checkFinalWinner(data.id.r, data.score[0])}" @mouseover="onMouseOver">
                <p class="contents">
                    <span class="seed-number">{{ data.seed[0] }}</span>
                    <span class="name">{{ data.participant[0].name }}</span>
                </p>
                <p class="score" :class="{ win: checkWinner(data.score[0]), finalWinnerBgColor: checkFinalWinner(data.id.r, data.score[0])}">{{ data.score[0] }}</p>
            </li>
            <li class="participant" :class="{hover: isHoverName(data.participant[1].name), finalWinnerBorder: checkFinalWinner(data.id.r, data.score[1])}" @mouseover="onMouseOver">
                <p class="contents">
                    <span class="seed-number">{{ data.seed[1] }}</span>
                    <span class="name">{{ data.participant[1].name }}</span>
                </p>
                <p class="score" :class="{ win: checkWinner(data.score[1]), finalWinnerBgColor: checkFinalWinner(data.id.r, data.score[1])}">{{ data.score[1] }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Match',
        props: {
            data: Object
        },
        computed: {
            ...mapState([
                'targetName'
            ])
        },
        methods: {
            checkWinner(score) {
                return score === 1 ? true : false;
            },
            checkFinalWinner(currentRound, score) {
                const isFinalRound = currentRound === 3;
                return isFinalRound && this.checkWinner(score);
            },
            onMouseOver(event) {
                this.$store.commit('updateTargetName', event.currentTarget.textContent);
            },
            isHoverName(name) {
                return this.targetName === name;
            }
        }
    }
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    p {
        margin: 0;
    }

    .match {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin: 20px 10px;
    }

    .match-number {
        padding: 0 20px;
    }

    .participant-list {
        width: 100%;
    }

    .participant {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        border: 0.5px solid rgb(61, 99, 204);
        border-radius: 5px;
        background-color: rgb(46, 47, 51);
        color: #FFFFFF;
    }

    .participant:hover {
        cursor: pointer;
    }

    .contents {
        padding: 10px 0 10px 10px;
        width: 90%;
    }

    .seed-number {
        color: rgb(48, 67, 128);
    }

    .name {
        padding-left: 10px;
    }

    .score {
        padding: 10px 0;
        width: 10%;
        border-left: 0.5px solid rgb(61, 99, 204);
        text-align: center;
    }

    .win,
    .hover {
        background-color: rgb(61, 99, 204);
    }

    .win {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .finalWinnerBorder {
        border: 0.5px solid rgb(234, 98, 71);
        /*border-top-left-radius: 5px;*/
        /*border-bottom-left-radius: 5px;*/
    }

    .finalWinnerBgColor {
        background-color: rgb(234, 98, 71);
    }
</style>
