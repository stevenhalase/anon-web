<template>
  <div
    class="navigation"
    :class="{ expanded }">
    <div
      @click="close"
      class="navigation-back" />
    <div class="navigation-container">
      <button
        @click="toggle"
        class="navigation-expand menu-btn">
        <font-awesome-icon :icon="['fas', 'bars']" class="menu-icon"/>
      </button>
      <button
        @click="back"
        class="menu-btn">
        <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']" class="menu-icon"/>
      </button>
      <button
        @click="goToBoards({ name: 'boards' })"
        class="menu-btn">
        <font-awesome-icon :icon="['far', 'star']" class="menu-icon"/>
      </button>
      <template v-if="!!profile.favoriteBoards.length">
        <div
          v-for="board of profile.favoriteBoards"
          :key="board.board"
          class="menu-section">
          <button
            @click="goToBoard({ name: 'board', query: { b: board.board } }, true)"
            class="menu-btn"
            :class="{ selected: isSelected(board) }">
            {{ board.board }}
          </button>
          <button
            v-for="thread of getOpenBoardThreads(board)"
            :key="thread.no"
            @click="goToThread({ name: 'thread', query: { b: board.board, t: thread.no } })"
            class="menu-btn block"
            :class="{ selected: isSelectedThread(thread) }">
            {{ thread.no }}
            <button
              @click.stop.prevent="closeThread(thread.no)"
              class="menu-btn close">
              <font-awesome-icon :icon="['fas', 'times']" class="menu-icon sm"/>
            </button>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'navigation',
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    ...mapState({
      profile: state => state.profile
    })
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
    expand() {
      this.expanded = true;
    },
    close() {
      this.expanded = false;
    },
    closeThread(threadNumber) {
      if (this.profile.currentThread && this.profile.currentThread.no === threadNumber) {
        this.goToBoard({ name: 'board', query: { b: this.profile.currentBoard.board } });
      }
      this.$store.commit('REMOVE_OPEN_THREAD', threadNumber );
    },
    back() {
      this.close();
      this.$router.go(-1);
    },
    goToBoards(to) {
      this.close();
      this.$router.push(to);
    },
    goToBoard(to, clearBoard) {
      this.close();
      this.$store.commit('SET_CURRENT_BOARD', null );
      this.$store.commit('SET_CURRENT_THREAD', null );
      this.$router.push(to);
    },
    goToThread(to) {
      this.close();
      this.$store.commit('SET_CURRENT_BOARD', null );
      this.$store.commit('SET_CURRENT_THREAD', null );
      this.$router.push(to);
    },
    isSelected(board) {
      return this.profile.currentBoard ? board.board === this.profile.currentBoard.board : false;
    },
    isSelectedThread(thread) {
      return this.profile.currentThread ? thread.no === this.profile.currentThread.no : false;
    },
    getOpenBoardThreads(board) {
      return this.profile.openThreads.filter(t => t.board === board.board);
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 0;
  transition: width 0.2s ease-in-out;

  .menu-icon {
    font-size: 18px;

    &.sm {
      font-size: 12px;
    }
  }

  .navigation-container {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1E2429;
    color: #fff;
    padding: 10px;
    position: fixed;
    left: -150px;
    top: 0;
    height: 100vh;
    z-index: 100;
    // box-shadow: 4px 0px 61px -23px rgba(0,0,0,0.75);
    transition: all 0.2s ease-in-out;
    transition-property: width, left;

    .navigation-expand {
      position: relative;
      right: -100px;
      transition: right 0.2s ease-in-out;
    }

    .menu-section {
      width: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top: 1px solid #39424a;
      border-bottom: 1px solid #39424a;
    }
  }

  .navigation-back {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
    opacity: 0;
    pointer-events: none;
    z-index: 99;
    transition: opacity 0.2s ease-in-out;
  }

  &.expanded {
    .navigation-back {
      opacity: 1;
      pointer-events: all;
    }

    .navigation-container {
      left: 0;

      .navigation-expand {
        right: 0;
      }
    }
  }
}
</style>
