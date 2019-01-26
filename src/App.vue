<template>
  <div id="app">
    <Navigation />
    <Loader />
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Loader from '@/components/Loader.vue';
import { mapState } from 'vuex';

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('GET_PROFILE');
    this.$store.dispatch('GET_BOARDS');
  },
  computed: {
    ...mapState({
      profile: state => state.profile
    }),
    key() {
      const board = this.profile.currentBoard ? this.profile.currentBoard.board : '';
      const thread = this.profile.currentThread ? this.profile.currentThread.no : '';
      return `${board}${thread}`;
    }
  },
  components: {
    Navigation,
    Loader
  }
}
</script>

<style lang="scss">
@import 'style';

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #F5F5F5;

  .app-container {
    flex: 1;
    height: 100%;
    // max-width: 1159px;
    padding: 15px;
  }
}
</style>
