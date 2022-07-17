<template>
  <v-container>
    <v-container>
      <v-row class="justify-start">
        <v-col
        cols="12"
        sm="8"
        md="8">
          <h3> {{ $t('text1') }}</h3>
          <v-form>
            <v-text-field v-model="newTodoItem" label="New todo item" @keydown.enter="addTodo()">
            </v-text-field>
          </v-form>
        </v-col>
        <v-col
        cols="12"
        sm="4"
        md="4"
        class="align-self-center"
        >
          <v-btn rounded color="primary" dark @click="addTodo()">
            {{ $t('button1') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <h3 v-if="getTodoList.length > 0">{{ $t('text2') }} : {{getTodoList.length}}</h3>
    <v-container no-gutters v-if="getTodoList.length === 0">
      <v-row>
        <v-col>
          <p>{{ $t('text3') }}</p>
        </v-col>
      </v-row>
    </v-container>
    <div class="todo-list" v-else>
      <v-list v-for="todo in getTodoList" :key="todo.id">
        <v-list-item>
          <v-list-item-content class="pa-1">
            <v-card class="mx-auto my-1" max-width="374">
              <v-card-title>
                {{ todo.name }}
              </v-card-title>
              <v-card-actions>
                <v-btn class="ma-2" color="primary" dark @click="сomplete(todo)">
                  {{ $t('button2') }}
                  <v-icon dark right>
                    mdi-checkbox-marked-circle
                  </v-icon>
                </v-btn>
                <v-btn dark class="success" text @click="edit(todo)">
                  {{ $t('button3') }}
                  <v-icon dark right>
                    mdi-pencil
                </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="red" dark @click="removeItem(todo)">
                  {{ $t('button4') }}
                  <v-icon dark right>
                    mdi-cancel
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <h3 v-if="getComplitedItems.length > 0">{{ $t('text4') }} : {{ getComplitedItems.length }}</h3>
    <div class="todo-list">
      <v-list v-for="todo in getComplitedItems" :key="todo.id">
        <v-list-item>
          <v-list-item-content class="pa-1">
            <v-card class="mx-auto my-1" max-width="374">
              <v-card-title>
                {{ todo.name }}
              </v-card-title>
              <v-card-actions>
                <v-btn class="ma-2" color="orange darken-2" dark  @click="returnItem(todo)">
                  <v-icon dark left>
                    mdi-arrow-left
                  </v-icon>
                  {{ $t('button5') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<i18n>
{
  "en": {
    "text1": "Add new todo item",
    "text2": "Have to do",
    "text3": "Sorry but todo list is empty",
    "text4": "Completer",
    "button1": "Add",
    "button2": "Done",
    "button3": "Edit",
    "button4": "Remove",
    "button5": "Return"
  },
  "ua": {
    "text1": "Додати новий запис",
    "text2": "Необхідно зробити",
    "text3": "Вибачте, але список завдань до виконання порожний",
    "text4": "Виконано",
    "button1": "Додати",
    "button2": "Виконано",
    "button3": "Змінити",
    "button4": "Видалити",
    "button5": "Повернути до виконання"
  }
}
</i18n>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  date() {
    return {
      newTodoItem: '',
    };
  },
  computed: mapGetters(['getTodoList', 'getComplitedItems', 'getComlitedTodoItemsCount']),
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
