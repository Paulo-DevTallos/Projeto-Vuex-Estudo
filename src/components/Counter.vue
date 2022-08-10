<template>
  <div> 
    <h1>Counter: {{ counter }}</h1>
    <h1>Counter x 2: {{ counterMult }}</h1>
    <div>
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
    <div>
      <button @click="decrementMult">Decrement(x)</button>
      <button @click="incrementMult">Increment(x)</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Counter',
  computed: {
    //só é possível utilizar um metódo dentro da propriedade computada repassando seu retorno (...)
    ...mapGetters([
      'counter',
      'counterMult',
    ])
  },
  methods: {
    ...mapActions([
      'decrement',
      'increment',
      'incrementMult',
      'decrementMult',
    ])
  },
}
</script>