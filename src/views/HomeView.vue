<template>
  <main>
    <PageHeaderTeleport>
      <a-row justify="end">
        <a-button type="dashed" @click="counter.increment()">INCREMENT COUNT</a-button>
      </a-row>
    </PageHeaderTeleport>

    home page: <button @click="counter.increment()">INCREMENT COUNT</button>
    <button @click="logRef">GET REF</button>
    <button @click="changeLabel">CHANGE LABEL</button>

    <Button ref="abc" :label="label" :student="student" @clicked="clickedBtn">
      <template v-slot:my-slot-custom-name>
        my-slot-custom-name
      </template>
    </Button>

    <HelloWorld msg="chao cac ban" />

    <div style="height: 1000px;">
      scroll down to see all page content
    </div>
    <HelloWorld msg="chao cac ban" />
  </main>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured, computed } from 'vue'

import Button from './../components/Button.vue';
import { useCounterStore } from '@/stores/counter'
import { ENV } from '@/config/env'
import HelloWorld from '@/components/HelloWorld.vue';
import PageHeaderTeleport from '@/layout/admin/page-header-teleport/index.vue'


const counter = useCounterStore()
const label = ref<string>('Test button label')
const student = ref<any>({
  name: 'Nguyen Van A',
  age: 20
})

const studentInfo = computed(() => {
  return `${student.value.name}, age: ${student.value.age}`
})

onErrorCaptured((err, instance, info) => {
  console.log("onErrorCaptured:", { err, instance, info })
})

const clickedBtn = (emitted: any) => {
  console.log(emitted)
}

const changeLabel = () => {
  label.value = 'test button label changed )))'
}

const logRef = (value: any) => {
  console.log('logRef:', value)
}
</script>
