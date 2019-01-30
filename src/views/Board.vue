<template>
  <div class="board">
    <div
      class="thread-list">
      <div
        class="post-loader-container"
        :class="{ show: !loaded }">
        <PostLoader
          v-for="(post, ind) of [0,1,2]"
          :key="ind"
          class="post-loader"
          :class="{ show: !loaded }" />
      </div>
      <template v-if="loaded && profile.currentBoard">
        <Thread
          v-for="(thread, ind) of profile.currentBoard.threads"
          :key="ind"
          :board="board"
          :thread="thread" />
      </template>
    </div>
  </div>
</template>

<script>
import PostLoader from '@/components/PostLoader.vue';
import Thread from '@/components/Thread.vue';
import { mapState } from 'vuex';

export default {
  name: 'board',
  data() {
    return {
      loaded: false
    }
  },
  props: {
    board: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      profile: state => state.profile
    })
  },
  mounted() {
    // this.getBoard();
  },
  methods: {
    getBoard() {
      this.loaded = false;
      this.$store.commit('SET_CURRENT_BOARD', { board: this.board, threads: [] });
      this.$store.commit('SET_CURRENT_THREAD', {});
      this.$store.dispatch('GET_BOARD', { board: this.board })
        .then(() => {
          this.loaded = true;
        });
    }
  },
  watch: {
    board: {
      handler(newBoard) {
        this.getBoard();
      },
      immediate: true
    }
  },
  components: {
    PostLoader,
    Thread
  }
}
</script>

<style lang="scss" scoped>
.board {
  .thread-list {
    position: relative;

    .post-loader-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 5;
      background-color: #F5F5F5;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;

      &.show {
        opacity: 1;
      }

      .post-loader {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;

        &.show {
          opacity: 1;
        }
      }
    }
  }
}
</style>
