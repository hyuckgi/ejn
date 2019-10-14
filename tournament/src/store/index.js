import Vue from 'vue';
import Vuex from 'vuex';

import sampleData from '../InterviewData.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        matchData: sampleData.match,
        targetName: ''
    },
    getters: {
        round1Data(state) {
            return state.matchData.filter(data => data.id.r === 1);
        },
        semifinalsData(state) {
            return state.matchData.filter(data => data.id.r === 2);
        },
        finalsData(state) {
            return state.matchData.filter(data => data.id.r === 3);
        }
    },
    mutations: {
        updateTargetName(state, targetContents) {
            const extractedTargetName = targetContents.slice(1, targetContents.length - 1);
            state.targetName = extractedTargetName;
        }
    }
});
