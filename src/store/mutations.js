export default {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_PROFILE(state, payload) {
    state.profile = payload;
  },
  SET_FAVORITE_BOARDS(state, payload) {
    state.profile.favoriteBoards = payload;
  },
  SET_BOARDS(state, payload) {
    state.boards = payload;
  },
  SET_CURRENT_BOARD(state, payload) {
    state.profile.currentBoard = payload;
  },
  SET_CURRENT_THREAD(state, payload) {
    state.profile.currentThread = payload;
  },
  ADD_OPEN_THREAD(state, payload) {
    const ind = state.profile.openThreads.findIndex(t => t.no === payload.no);
    if (ind < 0) {
      state.profile.openThreads.push(payload);
    }
  },
  REMOVE_OPEN_THREAD(state, payload) {
    const ind = state.profile.openThreads.findIndex(t => t.no === payload);
    state.profile.openThreads.splice(ind, 1);
  }
}