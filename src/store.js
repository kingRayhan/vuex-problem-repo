import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos:[]
	},
	getters: {
		getTodos: state => state.todos
	},
	mutations: {
		addToTodos( state , payload )
		{
			state.todos.unshift(payload)
		},
		editTodo( state , payload )
		{
			state.todos[payload.index] = payload.new
		},
		DeleteTodo( state , payload )
		{
			state.todos.splice(payload, 1)
		}
	},
	actions: {
		setTodos({state})
		{
			state.todos = api.default
		},
		addToTodos({commit} , payload)
		{
			commit('addToTodos' , payload)
		},
		editTodo({commit} , payload)
		{
			commit('editTodo' , payload)
		},
		DeleteTodo({commit} , payload)
		{
			commit('DeleteTodo' , payload)
		}
	}
})
