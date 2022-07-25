<template>
  <v-container>
    <EditTodoItem
      v-if="editModeStatus"
    />
    <NewTodoItem />
    <TodoList />
    <CompletedTodoList />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import EditTodoItem from '../components/EditTodoItem.vue';
import NewTodoItem from '../components/NewTodoItem.vue';
import TodoList from '../components/TodoList.vue';
import CompletedTodoList from '../components/CompletedTodoList.vue';

export default Vue.extend({
  name: 'HomePage',
  components: {
    EditTodoItem,
    NewTodoItem,
    TodoList,
    CompletedTodoList,
  },
  data() {
    return {
      
    };
  },
  computed: mapGetters(['editModeStatus']),
  
});

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
