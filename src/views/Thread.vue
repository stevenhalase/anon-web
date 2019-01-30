<template>
  <div class="thread">
    <div class="post-list">
      <div
        class="post-loader-container"
        :class="{ show: !loaded }">
        <PostLoader
          v-for="(post, ind) of [0,1,2]"
          :key="ind"
          class="post-loader"
          :class="{ show: !loaded }" />
      </div>
      <template v-if="loaded && profile.currentThread">
        <Post
          v-for="post of profile.currentThread.posts"
          :key="post.md5"
          :board="board"
          :post="post"
          :isReply="true" />
      </template>
    </div>
  </div>
</template>

<script>
import PostLoader from '@/components/PostLoader.vue';
import Post from '@/components/Post.vue';
import { mapState } from 'vuex';

export default {
  name: 'thread',
  data() {
    return {
      loaded: false
    }
  },
  props: {
    board: {
      type: String,
      required: true
    },
    threadNumber: {
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
    this.getThread();
  },
  methods: {
    getThread() {
      this.loaded = false;
      this.$store.commit('SET_CURRENT_BOARD', { board: this.board, threads: [] });
      this.$store.commit('SET_CURRENT_THREAD', {});
      this.$store.dispatch('GET_THREAD', { board: this.board, threadNumber: this.threadNumber })
        .then(() => {
          this.loaded = true;
        });
    }
  },
  watch: {
    threadNumber: {
      handler(newThreadNumber) {
        this.getThread();
      },
      immediate: true
    }
  },
  components: {
    PostLoader,
    Post
  }
}
</script>

<style lang="scss" scoped>
.thread {
  .post-list {
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
