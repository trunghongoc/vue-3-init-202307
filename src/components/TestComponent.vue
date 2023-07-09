<script lang="ts">
import { defineComponent, defineEmits } from 'vue'


export default defineComponent({
    name: 'TestComponent',
    methods: {
        clickedBtn() {
            alert('click to test component')
        }
    }
})
</script>


<template>
    <button>ok ok ok</button>
</template>