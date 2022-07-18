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
      <v-list>
        <TodoItem v-for="todo in getTodoList" :key="todo.id" :data="todo"/>
      </v-list>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "text1": "Have to do",
    "text2": "Sorry but todo list is empty"
  },
  "ua": {
    "text1": "Необхідно зробити",
    "text2": "Вибачте, але список завдань до виконання порожній"
  }
}
</i18n>

<script>
import { mapGetters } from 'vuex';
import TodoItem from './todoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: mapGetters(['getTodoList']),
  /*methods: {
    edit(todo) {
      console.log('edit :', todo.id);
    },
    removeItem(todo) {
      this.$store.dispatch('deleteTodo', todo);
    },
    сomplete(todo) {
      this.$store.dispatch('completedTodo', todo);
    },
  },*/
};
</script>

<style lang="less" scoped>
  .v-list {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
  }
  .v-list-item {
    flex: 0 0 50%;
    .v-card {
      max-width: none!important;
    }
  }
</style>
