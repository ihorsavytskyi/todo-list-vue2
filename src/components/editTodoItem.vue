<i18n>
{
  "en": {
    "text1": "Edit todo item",
    "button1": "Save",
    "button2": "Cancel"
  },
  "ua": {
    "text1": "Відредагувати запис",
    "button1": "Зберегти",
    "button2": "Відмінити"
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
            v-model="fieldValue"
            :label="$t('text1')"
            :rules="[rules.required, rules.counter]"
            counter
            maxlength="40"
            @keydown.enter="update()"
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
          @click="update()"
        >
          {{ $t('button1') }}
        </v-btn>
        <v-btn
          rounded
          color="error"
          dark
          @click="closeEditMode()"
        >
          {{ $t('button2') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditTodoItem',
  data() {
    return {
      fieldValue: '',
      rules: {
        required: (value) => !!value || 'Required.',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
      },
    };
  },
  mounted() {
    this.fieldValue = this.getEditableItem();
  },
  methods: {
    ...mapGetters(['getEditModeStatus', 'getEditableItem']),
    update() {
      this.$store.dispatch('updateTodo', this.fieldValue);
    },
    closeEditMode() {
      this.fieldValue = '';
      this.$store.dispatch('turnoffEditMode');
    },
  },
};
</script>

<style>

</style>
