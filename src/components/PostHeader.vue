<template>
  <div class="post-header">
    <div class="post-header-left">
      <img
        v-if="post.country"
        :src="`https://s.4cdn.org/image/country/${post.country.toLowerCase()}.gif`"
        :title="post.country_name"
        class="post-country" />
      <span
        v-if="post.name"
        class="chip">{{ `${post.name.substring(0, 9)}${post.name.length > 10 ? '...' : ''}` }}</span>
      <span
        v-if="post.id"
        class="chip">{{ post.id }}</span>
      <span
        v-if="post.no"
        class="chip">{{ post.no }}</span>
    </div>
    <timeago class="timestamp" :datetime="new Date(post.time * 1000)" :auto-update="60"></timeago>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'post-header',
  props: {
    board: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid rgba(0,0,0,0.2);

  .post-header-left {
    display: flex;
    align-items: center;

    .post-country {
      width: 25px;
      height: 15px;
    }
  }

  .timestamp {
    color: #aaa;
    font-size: 12px;
  }
}

@media only screen and (max-width: 640px) {
  .post-header {
    flex-direction: column;
  }
}
</style>
