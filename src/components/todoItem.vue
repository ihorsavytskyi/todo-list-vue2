<i18n>
{
  "en": {
    "button1": "Done",
    "button2": "Edit",
    "button3": "Remove"
  },
  "ua": {
    "button1": "Виконано",
    "button2": "Змінити",
    "button3": "Видалити"
  }
}
</i18n>

<template>
  <v-list-item>
    <v-list-item-content class="pa-1">
      <v-card
        class="mx-auto my-1"
        max-width="374"
      >
        <v-card-title>
          {{ data.name }}
        </v-card-title>
        <v-card-actions>
          <v-btn
            class="ma-2"
            color="primary"
            dark
            @click="сomplete()"
          >
            {{ $t('button1') }}
            <v-icon
              dark
              right
            >
              mdi-checkbox-marked-circle
            </v-icon>
          </v-btn>
          <v-btn
            dark
            class="success"
            text
            @click="edit()"
          >
            {{ $t('button2') }}
            <v-icon
              dark
              right
            >
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
            class="ma-2"
            color="red"
            dark
            @click="removeItem()"
          >
            {{ $t('button3') }}
            <v-icon
              dark
              right
            >
              mdi-cancel
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    data: {
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
  methods: {
    edit() {
      this.$store.dispatch('turnOnEditMode', this.$props.data.id);
    },
    removeItem() {
      this.$store.dispatch('deleteTodo', this.$props.data);
    },
    сomplete() {
      this.$store.dispatch('completedTodo', this.$props.data);
    },
  },
};
</script>

<style scoped>
.v-card {
  max-width: none!important;
}
</style>
