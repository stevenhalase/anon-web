<template>
  <div class="thread">
    <Post
      :board="board"
      :post="thread.posts[0]" />
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
    thread: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      profile: state => state.profile
    })
  },
  components: {
    Post
  }
}
</script>

<style lang="scss" scoped>
.thread {
  
}
</style>
