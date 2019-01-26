<template>
  <div
    class="post-content"
    :class="{ reply: isReply }">
    <div class="post-thumbnail-container">
      <img
        v-if="post.tim"
        :src="`https://i.4cdn.org/${board}/${post.tim}s.jpg`"
        :width="post.tn_w"
        :height="post.tn_h"
        :title="`${post.filename}${post.ext}`"
        @click="openImage"
        class="post-thumbnail" />
    </div>
    <div
      v-if="post.sub || post.com"
      @mouseenter="enter"
      @mouseleave="leave"
      class="post-comment-container"
      :class="{ expand: expandComment }">
      <div
        v-if="post.sub"
        class="post-sub">
        {{ post.sub }}
      </div>
      <div
        v-if="post.com"
        v-html="post.com"
        class="post-comment" />
    </div>
    <Modal :open="imageOpen" :handleClose="handleClose">
      <video v-if="post.ext === '.webm'" :width="post.w" controls>
        <source :src="`https://i.4cdn.org/${board}/${post.tim}${post.ext}`" type="video/webm">
        Your browser does not support HTML5 video.
      </video>
      <img v-else :src="`https://i.4cdn.org/${board}/${post.tim}${post.ext}`" />
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { mapState } from 'vuex';

export default {
  name: 'post-content',
  data() {
    return {
      imageOpen: false,
      expandComment: false,
      leftComment: false
    };
  },
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
  methods: {
    openImage() {
      this.imageOpen = true;
    },
    handleClose() {
      this.imageOpen = false;
    },
    enter() {
      setTimeout(() => {
        if (!this.leftComment) {
          this.expandComment = true;
        } else {
          this.expandComment = false;
          this.leftComment = false;
        }
      }, 1000);
    },
    leave() {
      setTimeout(() => {
        if (this.expandComment) {
          this.expandComment = false;
          this.leftComment = false;
        } else {
          this.leftComment = true;
        }
      }, 200);
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss" scoped>
.post-content {
  display: flex;
  padding: 10px;

  .post-thumbnail-container {
    display: flex;
    justify-content: center;

    .post-thumbnail {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .post-comment-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    .post-sub {
      font-weight: bold;
      margin-bottom: 10px;
    }

    .post-comment {
      max-height: 200px;
      overflow: hidden;
      position: relative;
      transition: max-height 0.5s ease-in-out;
    }

    &.expand {
      .post-comment {
        max-height: 2000px;
        transition: max-height 0.5s ease-in-out;
      }
    }
  }

  &.reply {
    .post-comment-container {
      .post-comment {
        max-height: 2000px;
      }
    }
  }
}

@media only screen and (max-width: 640px) {
  .post-content {
    flex-direction: column;

    .post-thumbnail-container {
      padding: 10px;
    }
  }
}
</style>
