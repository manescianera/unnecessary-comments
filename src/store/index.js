import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { takeRight } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	plugins: [createPersistedState({
		storage: window.sessionStorage,
	})],
	state: {
    	comments: [],
    	maxVisible: 4
  	},
	getters: {
		visibleComments: state => takeRight(state.comments, state.maxVisible),
		hiddenCommentsCount: state => 
			state.comments.length > state.maxVisible 
				? state.comments.length - state.maxVisible 
				: 0
  	},
	mutations: {
    	ADD_COMMENT: (state, comment) => state.comments.push(comment),
    	REMOVE_COMMENT: (state, comment) => 
			state.comments.splice(
				state.comments.indexOf(comment), 1
			),
		INCREMENT_MAX_VISIBLE: (state, count) => state.maxVisible += count,
  	},
	actions: {
		addComment: (context, comment) => {
	    	context.commit('ADD_COMMENT', comment)
		},
		removeComment: (context, comment) => {
	    	context.commit('REMOVE_COMMENT', comment)
	  	},
	},
})
