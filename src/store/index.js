import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        name: 'Action 1',
        completed: false,
      },
      {
        id: 2,
        name: 'Action 2',
        completed: false,
      },
      {
        id: 3,
        name: 'Action 3',
        completed: false,
      },
      {
        id: 4,
        name: 'Action 4',
        completed: true,
      },
    ],
  },
  getters: {
    getTodoList(state) {
      return state.todos.filter((todo) => !todo.completed);
    },
    thisTodo(state, todoId) {
      return state.todos.find((todo) => todo.id === todoId);
    },
    getComplitedItems(state) {
      return state.todos.filter((todo) => !!todo.completed);
    },
  },
  mutations: {
    addTodoItem(state, newItem) {
      state.todos.push({
        id: state.todos[state.todos.length - 1].id + 1,
        name: newItem,
        complited: false,
      });
    },
    updateTodoItem() {},
    deleteTodoItem(state, currentItem) {
      const todoItemIndexToRemove = state.todos.findIndex((el) => el.id !== currentItem.id);
      state.todos.splice(todoItemIndexToRemove, 1);
    },
    completedTodoItem(state, currentItem) {
      state.todos = state.todos.map((el) => {
        if (el.id === currentItem.id) {
          return {
            ...el,
            completed: true,
          };
        }

        return el;
      });
    },
    returnStateTodoItem(state, currentItem) {
      state.todos = state.todos.map((el) => {
        if (el.id === currentItem.id) {
          return {
            ...el,
            completed: false,
          };
        }

        return el;
      });
    },
  },
  actions: {
    addTodo({ commit }, item) {
      commit('addTodoItem', item);
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
    returnTodo({ commit }, item) {
      commit('returnStateTodoItem', item);
    },
  },
});
