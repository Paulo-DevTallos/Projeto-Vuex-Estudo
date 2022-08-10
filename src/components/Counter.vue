<template>
  <div> 
    <h1>Counter: {{ counter }}</h1>
    <div>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'Counter',
  computed: {
    //só é possível utilizar um metódo dentro da propriedade computada repassando seu retorno (...)
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    ...mapMutations([
      'decrement',
      'increment'
    ])
  },
}
</script>