import { createStore } from "vuex";

export const store = createStore({
  state: {
    counter: 0
  },
  mutations: {
    decrement: state => state.counter--,
    increment: state => state.counter++
  },
  actions: {

  },
})
