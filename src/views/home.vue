<template>
  <v-container>
    <NewTodoItem />
    <TodoList />
    <CompletedTodoList />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import NewTodoItem from '../components/newTodoItem.vue';
import TodoList from '../components/todoList.vue';
import CompletedTodoList from '../components/completedTodoList.vue';

export default {
  name: 'HomePage',
  date() {
    return {

    };
  },
  components: {
    NewTodoItem,
    TodoList,
    CompletedTodoList,
  },
  computed: mapGetters(['getTodoList', 'getComplitedItems']),
  methods: {
    edit(todo) {
      console.log('edit :', todo.id);
    },
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
