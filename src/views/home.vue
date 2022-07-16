<template>
  <v-container>
    <h3>Add new todo item</h3>
    <v-container>
      <v-form>
        <v-text-field v-model="newTodoItem" label="New todo item" @keydown.enter="addTodo()">
        </v-text-field>
        <v-btn rounded color="primary" dark @click="addTodo()">
          Add
        </v-btn>
      </v-form>
    </v-container>
    <h3 v-if="getTodoList.length > 0">Have to do : {{getTodoList.length}}</h3>
    <v-container v-if="getTodoList.length === 0">
      <v-row no-gutters>
        <p>Sorry but todo list is empty</p>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row class="justify-start">
        <v-list v-for="todo in getTodoList" :key="todo.id">
          <v-list-item>
            <v-list-item-content class="pa-2">
              <v-card class="mx-auto my-1" max-width="374">
                <v-card-title>
                  {{ todo.name }}
                </v-card-title>
                <v-card-actions>
                  <v-btn class="ma-2" color="primary" dark @click="сomplete(todo)">
                    Done
                    <v-icon dark right>
                      mdi-checkbox-marked-circle
                    </v-icon>
                  </v-btn>
                  <v-btn dark class="success" text @click="edit(todo)">
                    Edit
                    <v-icon dark right>
                      mdi-pencil
                  </v-icon>
                  </v-btn>
                  <v-btn class="ma-2" color="red" dark @click="removeItem(todo)">
                    Remove
                    <v-icon dark right>
                      mdi-cancel
                    </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-container>
    <h3 v-if="getComplitedItems.length > 0">Completed : {{ getComplitedItems.length }}</h3>
    <v-container>
      <v-row class="justify-start">
        <v-list v-for="todo in getComplitedItems" :key="todo.id">
          <v-list-item>
            <v-list-item-content class="pa-2">
              <v-card class="mx-auto my-1" max-width="374">
                <v-card-title>
                  {{ todo.name }}
                </v-card-title>
                <v-card-actions>
                  <v-btn class="ma-2" color="orange darken-2" dark  @click="returnItem(todo)">
                    <v-icon dark left>
                      mdi-arrow-left
                    </v-icon>
                    Return
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  date() {
    return {
      newTodoItem: '',
    };
  },
  computed: {
    ...mapGetters(['getTodoList', 'getComplitedItems', 'getComlitedTodoItemsCount']),
    getNewTodo() {
      return this.$store.newItem;
    }
  },
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
    returnItem(todo) {
      this.$store.dispatch('returnTodo', todo);
    },
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodoItem);
      this.newTodoItem = '';
    },
  },
};
</script>

<style lang="less" scoped>
  .v-list {
    flex: 0 0 50%;
    .v-card {
      max-width: none!important;
    }
  }
</style>
