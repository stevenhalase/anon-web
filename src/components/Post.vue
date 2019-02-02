<template>
  <div
    class="post"
    :id="`p${post.no}`">
    <PostHeader :board="board" :post="post" />
    <PostContent :board="board" :post="post" :isReply="isReply" />
    <PostFooter :board="board" :post="post" :isReply="isReply" />
  </div>
</template>

<script>
import PostHeader from '@/components/PostHeader.vue';
import PostContent from '@/components/PostContent.vue';
import PostFooter from '@/components/PostFooter.vue';
import { mapState } from 'vuex';

export default {
  name: 'post',
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
  computed: {
    ...mapState({
      profile: state => state.profile
    })
  },
  components: {
    PostHeader,
    PostContent,
    PostFooter
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 4px;

  &:hover {
    background-color: #fcfcfc;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.05), 0px 2px 2px 0px rgba(0,0,0,0.05), 0px 1px 5px 0px rgba(0,0,0,0.05);
  }
}
</style>
