<template>
  <div>
    <NewTodoItem/>
    <TodosList/>
    <StatusTodoList/>
  </div>
</template>

<script>
import NewTodoItem from '../components/new-todo-item.vue';
import TodosList from '../components/todo-list.vue';
import StatusTodoList from '../components/status.vue';

export default {
  name: 'HomePage',
  components: {
    NewTodoItem,
    TodosList,
    StatusTodoList,
  },
};
</script>
