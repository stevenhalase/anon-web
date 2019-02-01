import axios from 'axios';

const API = {
  BASE: 'http://desktop-pei2o18:3000/api/v1/',
  // BASE: 'https://anon-api.herokuapp.com/api/v1/',
  ROUTES: {
    BOARD: 'board',
    THREAD: 'thread',
    IMAGE: 'image'
  }
};

export default {
  GET_PROFILE({ commit, state }) {
    const profile = JSON.parse(localStorage.getItem('anon_profile'));
    if (profile) {
      commit('SET_PROFILE', profile);
    }
  },
  SET_FAVORITE_BOARDS({ commit, state }, payload) {
    commit('SET_FAVORITE_BOARDS', payload);
    localStorage.setItem('anon_profile', JSON.stringify(state.profile));
  },
  GET_BOARDS({ commit, state }) {
    commit('SET_LOADING', true);
    return new Promise((resolve, reject) => {
      axios.get(`${API.BASE}${API.ROUTES.BOARD}`)
        .then((response) => {
          commit('SET_BOARDS', response.data.boards);
          resolve(response.data.boards);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    });
  },
  GET_BOARD({ commit, state }, payload) {
    commit('SET_LOADING', true);
    return new Promise((resolve, reject) => {
      const { board } = payload;
      axios.get(`${API.BASE}${API.ROUTES.BOARD}?board=${board}`)
        .then((response) => {
          commit('SET_CURRENT_BOARD', { board, threads: response.data.threads });
          localStorage.setItem('anon_profile', JSON.stringify(state.profile));
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    });
  },
  GET_THREAD({ commit, state }, payload) {
    commit('SET_LOADING', true);
    return new Promise((resolve, reject) => {
      const { board, threadNumber } = payload;
      axios.get(`${API.BASE}${API.ROUTES.THREAD}?board=${board}&threadNumber=${threadNumber}`)
        .then((response) => {
          const thread = { board, no: threadNumber, posts: response.data.posts };
          const threadLink = { board, no: threadNumber };
          commit('SET_CURRENT_THREAD', thread);
          commit('ADD_OPEN_THREAD', threadLink);
          localStorage.setItem('anon_profile', JSON.stringify(state.profile));
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    });
  },
  GET_IMAGE({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${API.BASE}${API.ROUTES.IMAGE}?imageAddress=${payload}`)
        .then((response) => {
          console.log(response);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        });
    });
  }
};