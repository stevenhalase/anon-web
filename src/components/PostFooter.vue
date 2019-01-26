<template>
  <div class="post-footer">
    <template v-if="!isReply">
      <div class="post-footer-left">
        <span class="chip">{{ post.replies }}</span>
        <span class="chip">{{ post.images }}</span>
      </div>
      <button
        @click="goToThread"
        class="btn">View Thread</button>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'post-footer',
  props: {
    board: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      required: true
    },
    isReply: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goToThread() {
      this.$router.push({ name: 'thread', query: { b: this.board, t: this.post.no } });
    }
  }
}
</script>

<style lang="scss" scoped>
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #eee;

  .post-footer-left {
    display: flex;
  }
}
</style>
