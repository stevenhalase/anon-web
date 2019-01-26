<template>
  <div class="board">
    <div
      v-if="profile.currentBoard"
      class="thread-list">
      <Thread
        v-for="(thread, ind) of profile.currentBoard.threads"
        :key="ind"
        :board="board"
        :thread="thread" />
    </div>
  </div>
</template>

<script>
import Thread from '@/components/Thread.vue';
import { mapState } from 'vuex';

export default {
  name: 'board',
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
      this.$store.dispatch('GET_BOARD', { board: this.board });
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
    Thread
  }
}
</script>

<style lang="scss" scoped>
.board {
  .thread-list {

  }
}
</style>
