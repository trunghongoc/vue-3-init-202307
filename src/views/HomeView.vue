<script lang="ts">
import { defineComponent, onErrorCaptured } from 'vue'
import { ENV } from '@/config/env'

import Button from './../components/Button.vue';
import ViewText from './ViewText.vue';
import TestComponent from '@/components/TestComponent.vue';
import { useCounterStore } from '@/stores/counter'

const clickedBtn = (emitted: any) => {
  console.log(emitted)
}

console.log("====> ENV:", ENV)

export default defineComponent({
  name: "HomeView",
  components: {
    Button,
    Text,
    TestComponent
  },
  props: ['user'],
  data: () => ({
    name: '',
    label: 'Chao be le dan dat )))',
    student: {
      name: 'Nguyen Van A',
      age: 20
    }
  }),
  watch: {
    label(newVal, oldVal) {
      this.name
      this.$data.name
    },
  },
  computed: {
    studentInfo() {
      return `${this.student.name}, age: ${this.student.age}`
    },
  },
  methods: {
    clickedBtn: (emitted: any) => {
      console.log(emitted)
    },
    logRef(value: any) {
      console.log(value)
    },
    changeLabel() {
      this.label = 'oke label changed'
    }
  },
  beforeCreate: () => {

  },
  mounted() {
    setTimeout(() => {
      // this.student = {
      //   name: 'Tran Thi B',
      //   age: 21
      // }
    }, 5000)

    // console.log("component Ref abc:", this.$refs.abc)
  },
  setup() {
    const counter = useCounterStore()

    onErrorCaptured((err, instance, info) => {
      console.log("onErrorCaptured:", { err, instance, info })
    })

    return {
      counter
    }
  },
  directives: {

  },
  provide() {
    return {
      abc: this.name
    }
  }
})
</script>

<template>
  <main>
    home page: <button @click="counter.increment()">INCREMENT COUNT</button>
    <button @click="logRef">GET REF</button>
    <button @click="changeLabel">CHANGE LABEL</button>

    <Button ref="abc" :label="label" :student="student" @clicked="clickedBtn">
      <template v-slot:ahihi>
        yeah slot ahihi
      </template>
    </Button>

    <a-button type="primary">Primary Button</a-button>
  </main>
</template>


