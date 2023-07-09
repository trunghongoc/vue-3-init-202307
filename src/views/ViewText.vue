<template>
    {{ props.text }}
</template>


<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    text: String
})

const text1 = ref('TEST TEXT')
</script>