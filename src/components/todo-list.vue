<template>
  <div id="current-todos" class="container">
        <h3 v-if="todoListLenght > 0">Current : {{ todoListLenght }}</h3>
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
        <h3>Completed : {{ todoCompleted }}</h3>
    </div>
</template>

<script>
//import todoItem from './todo-item.vue';
import Vue from 'vue';
import vuetify from '../plugins/vuetify';

Vue.use(vuetify);

export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.getters.getTodoList;
    },
    todoListLenght() {
      return this.$store.getters.getTodoList.length;
    },
    todoCompleted() {
      return this.$store.getters.getComlitedTodoItemsCount;
    },
  },
};
</script>
