<template>
  <div class="thread">
    <div
      v-if="profile.currentThread"
      class="post-list">
      <Post
        v-for="(post, ind) of profile.currentThread.posts"
        :key="ind"
        :board="board"
        :post="post"
        :isReply="true" />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import { mapState } from 'vuex';

export default {
  name: 'thread',
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
      this.$store.commit('SET_CURRENT_BOARD', { board: this.board, threads: [] });
      this.$store.dispatch('GET_THREAD', { board: this.board, threadNumber: this.threadNumber });
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
    Post
  }
}
</script>

<style lang="scss" scoped>
.thread {
  .thread-list {

  }
}
</style>
