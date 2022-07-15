<template>
  <div id="current-todos" class="container">
        <h3 v-if="todos.length > 0">Current({{todoListLenght}})</h3>
        <div v-if="todoListLenght === 0">
          <p>Sorry but todo list is empty</p>
        </div>
        <div v-else>
          <v-list v-for="todo in todos" :key="todo.id">
            <v-list-tile>
              <v-list-item-content>
                  {{ todo.name }}
              </v-list-item-content>
            </v-list-tile>
          </v-list>
        </div>
    </div>
</template>

<script>
//import todoItem from './todo-item.vue';
import Vue from 'vue';
import vuetify from '../plugins/vuetify';

Vue.use(vuetify);

export default {
  name: 'TodoList',
  /*component: {
    'todo-item': todoItem,
  },*/
  computed: {
    todos() {
      return this.$store.getters.getTodoList;
    },
    todoListLenght() {
      return this.$store.getters.getTodoList.length;
    },
  },
};
</script>
