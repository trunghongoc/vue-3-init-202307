<template>
    <p>Text</p>
</template>

<script setup lang="ts">
import { ref, toRef, onUnmounted, toRefs, reactive, computed, watch, watchEffect, onMounted, getCurrentInstance, inject, defineComponent } from 'vue'

defineProps({
    text: {
        type: String
    }
})
</script>