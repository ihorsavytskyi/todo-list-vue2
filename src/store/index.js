import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: '1',
        name: 'Action',
        complited: false,
      },
      {
        id: '2',
        name: 'Action',
        complited: false,
      },
      {
        id: '3',
        name: 'Action',
        complited: false,
      },
      {
        id: '4',
        name: 'Action',
        complited: true,
      },
    ],
    newTodoItem: '',
  },
  getters: {
  },
  mutations: {
    addTodoItem() {},
    updateTodoItem() {},
    deleteTodoItem() {},
    completedTodoItem() {},
    clearTodoItem() {},
  },
  actions: {
    addTodo({ commit }) {
      commit('addTodoItem');
    },
    updateTodo({ commit }, item) {
      commit('updateTodoItem', item);
    },
    deleteTodo({ commit }, item) {
      commit('deleteTodoItem', item);
    },
    completedTodo({ commit }, item) {
      commit('completedTodoItem', item);
    },
    clearTodo({ commit }) {
      commit('clearTodoItem');
    },
  },
});

export default store;
