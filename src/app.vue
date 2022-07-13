<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{ t("home") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">{{ t("about") }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<i18n>
  'en': {
    home: 'Home',
    about : 'About',
  },
  'fr' : {
    home : 'La maison',
    about : 'Environ',
  }
</i18n>

<script>

export default {
  name: 'App',
  data () {
    return {
      locale: 'en'
    },
  },  
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<style>
</style>
<script>
export default {};
</script>

<style lang="less" scoped>
.h1 {
  color: blue;
  .span {
    color: red;
  }
}
</style>
