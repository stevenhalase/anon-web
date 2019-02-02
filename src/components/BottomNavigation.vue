<template>
  <div class="bottom-navigation">
    <div class="navigation-bar">
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
      <button
        @click="openBoards"
        class="menu-btn">
        <font-awesome-icon :icon="['fas', 'list']" class="menu-icon"/>
      </button>
      <button
        @click="openSettings"
        class="menu-btn">
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" class="menu-icon"/>
      </button>
    </div>
    <div 
      class="navigation-content-pane"
      :class="{ expanded }">
      <template v-if="!!profile.favoriteBoards.length && section === 'boards'">
        <div
          v-for="board of profile.favoriteBoards"
          :key="board.board"
          class="menu-section">
          <div class="menu-board">
            <button
              @click="goToBoard({ name: 'board', query: { b: board.board } }, true)"
              class="menu-btn block full"
              :class="{ selected: isSelected(board) }">
              <span>{{ board.board }}</span>
            </button>
          </div>
          <div class="menu-board-threads">
            <button
              v-for="thread of getOpenBoardThreads(board)"
              :key="thread.no"
              @click="goToThread({ name: 'thread', query: { b: board.board, t: thread.no } })"
              class="menu-btn block full"
              :class="{ selected: isSelectedThread(thread) }">
              <span>{{ thread.no }}</span>
              <button
                @click.stop.prevent="closeThread(thread.no)"
                class="menu-btn close">
                <font-awesome-icon :icon="['fas', 'times']" class="menu-icon sm"/>
              </button>
            </button>
            <button
              v-if="!!getOpenBoardThreads(board).length"
              @click="closeAllThreads(board)"
              class="menu-btn block full">
              <span>Close All</span>
            </button>
          </div>
        </div>
      </template>
      <template v-if="section === 'settings'">
        <div class="menu-section">
          <div class="menu-setting">
            <button
              @click="setTheme('light')"
              class="menu-btn block full"
              :class="{ selected: profile.theme === 'light' }">
              <span>Light</span>
            </button>
            <button
              @click="setTheme('dark')"
              class="menu-btn block full"
              :class="{ selected: profile.theme === 'dark' }">
              <span>Dark</span>
            </button>
          </div>
        </div>
        <div class="menu-section">
          <div class="menu-setting">
            <button
              @click="clearProfile"
              class="menu-btn block full">
              <span>Clear Profile</span>
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'bottom-navigation',
  data() {
    return {
      expanded: false,
      section: null
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
    closeAllThreads(board) {
      this.profile.openThreads = this.profile.openThreads.filter(t => t.board !== board.board);
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
    },
    openBoards() {
      this.section = 'boards';
      this.toggle();
    },
    openSettings() {
      this.section = 'settings';
      this.toggle();
    },
    setTheme(selection) {
      this.$store.dispatch('SET_THEME', selection );
    },
    clearProfile(selection) {
      this.$store.dispatch('CLEAR_PROFILE', selection );
      this.goToBoards({ name: 'boards' });
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-navigation {
  width: 100%;
  height: 50px;

  .navigation-bar {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #2f3640;
    padding-right: 15px;
    z-index: 10;
  }

  .navigation-content-pane {
    position: fixed;
    bottom: -100%;
    left: 0;
    background-color: #373f4b;
    width: 100%;
    height: calc(100% - 50px);
    transition: bottom 0.2s ease-in-out;
    z-index: 9;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .menu-section {
      display: flex;
      padding: 10px;
      background-color: #404958;
      width: 100%;
      max-width: 1024px;

      &:nth-child(odd) {
        background-color: #485263;
      }

      .menu-board {
        width: 50px;
        padding: 5px;
      }

      .menu-board-threads {
        flex: 1;
        padding: 5px;
      }

      .menu-setting {
        display: flex;
        width: 100%;

        .menu-btn {
          margin: 5px;
        }
      }

      .menu-btn {
        margin: 5px 0;

        &.close {
          margin: 5px 0 5px 10px;
        }
      }
    }

    &.expanded {
      bottom: 50px;
    }
  }

  .menu-btn {
    margin: 5px;
  }
}
</style>
