<template>
  <div>
    <h3 v-if="getComplitedItems.length > 0">
      {{ $t('text1') }} : {{ getComplitedItems.length }}
    </h3>
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
                  {{ $t('button1') }}
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
    "text1": "Completed",
    "button1": "Return"
  },
  "ua": {
    "text1": "Виконано",
    "button1": "Повернути до виконання"
  }
}
</i18n>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CompletedTodoList',
  computed: mapGetters(['getComplitedItems']),
  methods: {
    returnItem(todo) {
      this.$store.dispatch('returnTodo', todo);
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
