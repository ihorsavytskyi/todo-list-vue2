<template>
  <v-container>
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
                    <v-btn class="ma-2" color="primary" dark>
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
                    <v-btn class="ma-2" color="red" dark @click="remove(todo)">
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
                    <v-btn class="ma-2" color="primary" dark>
                      Back
                      <v-icon dark right>
                        mdi-checkbox-marked-circle
                      </v-icon>
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
import { mapActions } from 'vuex';

export default {
  name: 'HomePage',
  computed:
    mapGetters(['getTodoList', 'getComplitedItems', 'getComlitedTodoItemsCount']),
  methods: {
    edit(todo) {
      console.log('edit :', todo.id);
    },
    remove(todo) {
      console.log('remove :', todo.id);
    },
  },
};
</script>
