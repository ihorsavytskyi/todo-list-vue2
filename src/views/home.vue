<template>
  <v-container>
    <EditTodoItem />
    <NewTodoItem />
    <TodoList />
    <CompletedTodoList />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import EditTodoItem from '../components/editTodoItem.vue';
import NewTodoItem from '../components/newTodoItem.vue';
import TodoList from '../components/todoList.vue';
import CompletedTodoList from '../components/completedTodoList.vue';

export default {
  name: 'HomePage',
  components: {
    EditTodoItem,
    NewTodoItem,
    TodoList,
    CompletedTodoList,
  },
  data() {
    return {
      todoItem: {
        id: Number,
        name: String,
        completed: Boolean,
      },
    };
  },
  computed: mapGetters(['getTodoList', 'getComplitedItems']),
  methods: {
    /*editItem(data) {
      console.log('edit is:', data);
      this.todoItem.id = data.id;
      this.todoItem.name = data.name;
      this.todoItem.completed = data.completed;
    },*/
    removeItem(todo) {
      this.$store.dispatch('deleteTodo', todo);
    },
    сomplete(todo) {
      this.$store.dispatch('completedTodo', todo);
    },
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodoItem);
      this.newTodoItem = '';
    },
  },
};
</script>

<style lang="less" scoped>
  .todo-list {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
  }
  .v-list {
    flex: 0 0 50%;
    .v-card {
      max-width: none!important;
    }
  }
</style>
