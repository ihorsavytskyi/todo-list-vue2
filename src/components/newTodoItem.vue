<template>
  <v-container>
      <v-row class="justify-start">
        <v-col
        cols="12"
        sm="8"
        md="8">
          <h3> {{ $t('text1') }}</h3>
          <v-form>
            <v-text-field v-model="newTodoItem" label="New todo item" @keydown.enter="addTodo()">
            </v-text-field>
          </v-form>
        </v-col>
        <v-col
        cols="12"
        sm="4"
        md="4"
        class="align-self-center"
        >
          <v-btn rounded color="primary" dark @click="addTodo()">
            {{ $t('button1') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>

<i18n>
{
  "en": {
    "text1": "Add new todo item",
    "button1": "Add"
  },
  "ua": {
    "text1": "Додати новий запис",
    "button1": "Додати"
  }
}
</i18n>

<script>

export default {
  name: 'NewTodoItem',
  date() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.newTodoItem);
      this.newTodoItem = '';
    },
  },
};
</script>
