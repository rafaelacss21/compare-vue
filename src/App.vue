<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a href="/" class="nav-item">MyCompany</a>
        </div>
        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">
          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="/about" class="nav-item r-item">About</router-link>
          <router-link to="/features" class="nav-item r-item">Features</router-link>
          <router-link to="/faq" class="nav-item r-item">FAQ</router-link>
          <div class="nav-item">
            <p class="control">
              <a href="#" class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>This right here is a spiffy footer, where tou can add stuff.</p>
          </div>
          <div class="column has-text-right">
            <a href="#" class="icon">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="icon">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>


<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.nav
  background-color: #383838
  a:hover
    color: white

.nav-left a 
  color: #fff
  font-weight: bold

a.r-item
  color:#C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: white
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px

</style>
