<template>
  <v-container>
    <EditTodoItem
      v-if="getEditModeStatus"
    />
    <NewTodoItem />
    <TodoList />
    <CompletedTodoList />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import EditTodoItem from '../components/EditTodoItem.vue';
import NewTodoItem from '../components/NewTodoItem.vue';
import TodoList from '../components/TodoList.vue';
import CompletedTodoList from '../components/CompletedTodoList.vue';

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
  computed: mapGetters(['getTodoList', 'getComplitedItems', 'getEditModeStatus']),
  methods: {
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
