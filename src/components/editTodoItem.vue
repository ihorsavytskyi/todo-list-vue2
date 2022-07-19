<i18n>
{
  "en": {
    "text1": "Edit todo item",
    "button1": "Save"
  },
  "ua": {
    "text1": "Відредагувати запис",
    "button1": "Зберегти"
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
            label="Edit todo item"
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
        >
          {{ $t('button1') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EditTodoItem',
  props: {
    todoItem: {
      type: Object,
      default: function() {
        return {
          id: {type: Number, default: null},
          name: {type: String, default: ''},
          complited: {type: Boolean, default: false}
        }
      },
    },
  },
  data() {
    return {
    };
  },
  method: {

  },
};
</script>

<style>

</style>
