<template>
  <div>
    <h3 v-if="getTodoList.length > 0">{{ $t('text1') }} : {{getTodoList.length}}</h3>
    <v-container no-gutters v-if="getTodoList.length === 0">
      <v-row>
        <v-col>
          <p>{{ $t('text2') }}</p>
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
                  {{ $t('button1') }}
                  <v-icon dark right>
                    mdi-checkbox-marked-circle
                  </v-icon>
                </v-btn>
                <v-btn dark class="success" text @click="edit(todo)">
                  {{ $t('button2') }}
                  <v-icon dark right>
                    mdi-pencil
                </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="red" dark @click="removeItem(todo)">
                  {{ $t('button3') }}
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
  </div>
</template>

<i18n>
{
  "en": {
    "text1": "Have to do",
    "text2": "Sorry but todo list is empty",
    "button1": "Done",
    "button2": "Edit",
    "button3": "Remove"
  },
  "ua": {
    "text1": "Необхідно зробити",
    "text2": "Вибачте, але список завдань до виконання порожній",
    "button1": "Виконано",
    "button2": "Змінити",
    "button3": "Видалити"
  }
}
</i18n>

<script>
import { mapGetters } from 'vuex';
//import TodoItem from '../components/todoItem.vue';

export default {
  name: 'TodoList',
  /*components: {
    TodoItem,
  },*/
  computed: mapGetters(['getTodoList']),
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
