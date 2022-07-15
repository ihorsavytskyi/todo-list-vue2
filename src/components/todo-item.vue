<template>
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
</template>

<script>
export default {
  name: 'todoItem',
};
</script>

<style>

</style>
