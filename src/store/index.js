import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: '1',
        name: 'Action 1',
        complited: false,
      },
      {
        id: '2',
        name: 'Action 2',
        complited: false,
      },
      {
        id: '3',
        name: 'Action 3',
        complited: false,
      },
      {
        id: '4',
        name: 'Action 4',
        complited: true,
      },
    ],
    newTodoItem: '',
  },
  getters: {
    getTodoList(state) {
      return state.todos;
    },
    thisTodo(state, todoId) {
      return state.todos.find((todo) => todo.id === todoId);
    },
    getComplitedItems(state) {
      return state.todos.filter((todo) => !!todo.complited);
    },
  },
  mutations: {
    addTodoItem() {},
    updateTodoItem() {},
    deleteTodoItem() {},
    completedTodoItem() {},
    clearTodoItem() {
      this.state.newTodoItem = '';
    },
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
