import { createStore } from "vuex";

export const store = createStore({
  state: {
    counter: 0,
    counterMult: 0,
  },
  mutations: {
    //nesse caso o estado global é responsável por alterar toda a lógica referente ao contador
    //ex:. increment: state => state.counter = state.counter + 2 (incrementa o valor do contador +2) 
    decrement: state => state.counter--,
    increment: state => state.counter++,
    incrementMult: state => state.counterMult++,
    decrementMult: (state, num) => state.counterMult = num--,
  },
  getters: {
    //getters são funções que capturam dados da store, processar e devolver pra gente
    //ex:. state => state.counter * 3 (multiplica todos os valores por 3)
    counter: state => state.counter,
    counterMult: state => state.counterMult * 2,
  },
  actions: {
    //cuida das requisições assincronas
    //realiza o commit das chamadas para alterar as mutações
    //outro exemplo é usando destructuring
    decrement: ({ commit }) => commit('decrement'),
    increment: context => context.commit('increment'),
    incrementMult: ({ commit }) => commit('incrementMult'),
    //exemplo de action assincrona - simulando
    decrementMult: ({ commit }) => {
      setTimeout(() => {
        commit('decrementMult', 5) //repassando payload que é um valor que queremos passar para o nosso estado, para isso temos que passar para a mutation esse valor
      }, 2000)
    }
  },
})
