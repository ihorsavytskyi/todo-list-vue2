<template>
  <v-app>
    <TopNavbar />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import TopNavbar from './components/TopNavbar.vue';
import FooterBar from './components/FooterBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TopNavbar,
    FooterBar,
  },
  data() {
    return {

    };
  },
});
</script>

<!--<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>-->

<style lang="less" scoped>
.h1 {
  color: blue;
  .span {
    color: red;
  }
}
</style>
