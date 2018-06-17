<template>
  <div class="home">
	<input type="text" ref="newTodo" @keydown.enter="add">
	<ul>
		<li v-for="(todo,i) in getTodos" :key="i">{{ todo.task }} 
			<button @click="edit(i)">edit</button> 
			<button @click="Delete(i)">delete</button> 
		</li>
	</ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'home',
	created()
	{
		this.$store.dispatch('setTodos')
	},
	computed: {
		...mapGetters(['getTodos'])
	},
	methods: {
		add()
		{
			this.$store.dispatch('addToTodos' , { task: this.$refs.newTodo.value , done: 0 })
			this.$refs.newTodo.value = ''
		},
		edit(index)
		{
			const task = prompt('Modity Todo' , this.getTodos[index].task)
			if(task)
			{
				this.$store.dispatch('editTodo' , { index , new: { task , done: 0 } })
			}
		},
		Delete(index)
		{
			this.$store.dispatch('DeleteTodo' , index)
		}
	}
}
</script>
