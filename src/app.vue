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

<script>
import TopNavbar from './components/navbar.vue';
import FooterBar from './components/footer.vue';

export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    TopNavbar,
    FooterBar,
  },
};
</script>

<style lang="less" scoped>
.h1 {
  color: blue;
  .span {
    color: red;
  }
}
</style>
