<template>
  <div id="current-todos" class="container">
        <h3 v-if="todos.length > 0">Current({{todoListLenght}})</h3>
        <div v-if="todoListLenght === 0">
          <p>Sorry but todo list is empty</p>
        </div>
        <div v-else>
          <ul class="list-group">
            <li v-for="todo in todos" :key="todo.id">
                {{todo.name}}
              <div class="btn-group">
                  <button type="button" @click="edit(todo)" class="btn btn-default btn-sm">
                  <span class="glyphicon glyphicon-edit"></span> Edit
                  </button>
                  <button type="button" @click="complete(todo)" class="btn btn-default btn-sm">
                  <span class="glyphicon glyphicon-ok-circle"></span> Complete
                  </button>
                  <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                  <span class="glyphicon glyphicon-remove-circle"></span> Remove
                  </button>
              </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TodoList',
  computed: {
    todos() {
      return this.$store.getters.getTodoList;
    },
    todoListLenght() {
      return this.$store.getters.getTodoList.length;
    },
  },
};
</script>
