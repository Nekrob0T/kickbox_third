<template>
  <q-btn dense flat round icon="menu" @click="layout.toggleSidebar()" />
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts';

const layout = useLayout();
</script>

<style scoped lang="sass">
.q-btn :deep(.q-icon)
  color: #000
</style>
