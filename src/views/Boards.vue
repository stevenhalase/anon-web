<template>
  <div class="boards">
    <div class="favorite-boards board-list">
      <div class="board-list-header">Boards</div>
      <div class="board-list-actions">
        <multiselect
          v-model="profile.favoriteBoards"
          :options="boards"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          :taggable="true"
          placeholder="Pick some"
          label="title"
          track-by="board"
          :preselect-first="false">
          <template
            slot="selection"
            slot-scope="{ values, search, isOpen }">
            <span class="multiselect__single" v-if="values.length && !isOpen">
              {{ values.length }} options selected
            </span>
          </template>
        </multiselect>
      </div>
      <div class="board-list-items">
        <div
          v-for="(board, ind) of profile.favoriteBoards"
          :key="ind"
          class="board">
          <router-link
            :to="{ name: 'board', query: { b: board.board } }"
            class="board-link">
            {{ board.board }} {{ board.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'boards',
  computed: {
    ...mapState({
      profile: state => state.profile,
      boards: state => state.boards
    })
  }
}
</script>

<style lang="scss">
.boards {
  display: flex;
  flex-direction: column;

  .board-list {
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 15px 0;
    background-color: #fff;

    .board-list-header {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }

    .board-list-actions {
      display: flex;
      padding: 10px 0;

      .multiselect__option--highlight {
        background-color: #95C967;
        color: #fff;

        &:after {
          background-color: #88b85d;
        color: #fff;
        }
      }

      .multiselect__option--selected {
        background-color: #777;
        color: #fff;

        &:after {
          background-color: #7a7a7a;
          color: #fff;
        }
      }

      

      .multiselect__option--selected.multiselect__option--highlight {
        background-color: #e74c3c;
        color: #fff;

        &:after {
          background-color: #d44535;
          color: #fff;
        }
      }
    }

    .board-list-items {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      border-top: 1px solid #eee;

      .board {
        padding: 10px 0;
      }
    }
  }
}
</style>
