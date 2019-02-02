<template>
  <div
    id="app"
    :class="{ dark: profile.theme === 'dark' }">
    <Loader />
    <div class="app-container">
      <router-view />
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue';
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
    BottomNavigation,
    Loader
  }
}
</script>

<style lang="scss">
@import 'style';

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .app-container {
    flex: 1;
    padding: 15px;
    height: calc(100% - 50px);
    overflow: hidden;
    overflow-y: auto;
  }

  &.dark {
    .app-container {
      background-color: #373f4b;
    }

    .board-list {
      background-color: #4e5969;
      color: #fff;
    }

    .multiselect__single,
    .multiselect__input,
    .multiselect__content {
      color: #fff;
      background-color: #373f4b;

      &::placeholder {
        color: #ddd;
      }
    }

    .multiselect__tags,
    .multiselect__content-wrapper {
      background-color: #373f4b;
      border: 1px solid #2e353f;
    }

    .post-loader-container {
      background-color: #373f4b;
    }

    .post,
    .post-loader {
      background-color: #4e5969;

      .post-sub,
      .post-comment {
        color: #fff;
      }
    }

    .chip {
      color: #fff;
    }

    .shimmer {
      background: linear-gradient(270deg, #373f4b, #3a424d);
    }
  }
}
</style>
