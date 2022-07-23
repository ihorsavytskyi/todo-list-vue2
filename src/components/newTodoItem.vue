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

<template>
  <v-container>
    <v-row class="justify-start">
      <v-col
        cols="12"
        sm="8"
        md="8"
      >
        <h3> {{ $t('text1') }}</h3>
        <v-form>
          <v-text-field
            v-model.trim="newTodoItem"
            :rules="[rules.required, rules.counter]"
            :label="$t('text1')"
            counter
            maxlength="40"
            @keydown.enter="addTodo()"
          />
        </v-form>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        md="4"
        class="align-self-center"
      >
        <v-btn
          rounded
          color="primary"
          dark
          :disabled="isDisabled"
          @click="addTodo()">
          {{ $t('button1') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NewTodoItem',
  data() {
    return {
      newTodoItem: '',
      rules: {
        required: (value: string) => !!value || 'Required.',
        counter: (value: string) => value.length <= 20 || 'Max 20 characters',
      },
      isDisabled: true,
    };
  },
  watch: {
    newTodoItem(value: string): void {
      if (value.length > 0) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
  },
  methods: {
    addTodo(): void {
      if (this.newTodoItem.length) {
        this.$store.dispatch('addTodo', this.newTodoItem);
        this.newTodoItem = '';
      }
    },
  },
});
</script>
