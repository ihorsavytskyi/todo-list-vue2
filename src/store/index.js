import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, name: 'Action 1', completed: false },
      { id: 2, name: 'Action 2', completed: false },
      { id: 3, name: 'Action 3', completed: false },
      { id: 4, name: 'Action 4', completed: true },
    ],
    editableItemId: null,
    isEditMode: false,
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
    getEditableItem(state) {
      return state.todos.find((todo) => todo.id === state.editableItemId).name;
    },
    getEditModeStatus(state) {
      return state.isEditMode;
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
    updateTodoItem(state, newValue) {
      state.todos = state.todos.map((el) => {
        if (el.id === state.editableItemId) {
          return {
            ...el,
            name: newValue,
          };
        }

        return el;
      });
    },
    deleteTodoItem(state, currentItem) {
      state.todos = state.todos.filter((el) => el.id !== currentItem.id);
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
    defineEditableTodoItem(state, item) {
      state.editableItemId = item;
    },
    onEditMode(state) {
      state.isEditMode = true;
    },
    offEditMode(state) {
      state.isEditMode = false;
    }
  },
  actions: {
    addTodo({ commit }, item) {
      commit('addTodoItem', item);
    },
    updateTodo({ commit }, item) {
      commit('updateTodoItem', item);
      commit('offEditMode');
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
    turnOnEditMode({ commit }, item) {
      commit('defineEditableTodoItem', item);
      commit('onEditMode');
    },
    turnoffEditMode({ commit }) {
      commit('offEditMode');
    },
  },
});
