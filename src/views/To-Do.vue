<!-- App.vue -->
<template>
  <div id="app">
    <div>
      <h2>Add New Todo</h2>
      <form @submit.prevent="addTodo">
        <label for="todoTitle">Todo Title: </label>
        <input type="text" id="todoTitle" v-model="newTodoTitle" required />
        <button type="submit">Add Todo</button>
      </form>
    </div>

    <div>
      <h2>Todo List</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <p :class="{ 'completed': todo.completed }">{{ todo.title }}</p>
          <button @click="toggleCompletion(todo)">done</button>
          <button @click="deleteTodo(todo.id)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTodoTitle: '',
    };
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3000/api/todos');
        this.todos = response.data.todos;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async addTodo() {
      try {
        const response = await axios.post('http://localhost:3000/api/todos', {
          title: this.newTodoTitle,
        });
        this.todos.push(response.data); // Update the todos array
        this.newTodoTitle = ''; // Clear the input field
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    },
    async deleteTodo(todoId) {
      try {
        await axios.delete(`http://localhost:3000/api/todos/${todoId}`);
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    },
    async toggleCompletion(todo) {
      try {
        // Toggle the completion status locally
        todo.completed = !todo.completed;

        // If the task is completed, delete it
        if (todo.completed) {
          await this.deleteTodo(todo.id);
        } else {
          // Otherwise, update the completion status on the server
          await axios.patch(`http://localhost:3000/api/todos/${todo.id}`, {
            completed: todo.completed,
          });
        }
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    },
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}

  li {
    list-style: none;
  }

  button {
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background: #000;
    color: #fff;
    border: none;
    margin-left: 10px;
  }
</style>
