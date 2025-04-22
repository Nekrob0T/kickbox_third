<template>
  <q-layout view="hHr lpR fFf">
    <the-header />
    <the-sidebar />
    <the-popup v-if="layout.popup" />

    <q-page-container>
      <div class="main-container">
        <router-view />
      </div>

      <the-footer />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { TheHeader, TheSidebar, TheFooter, ThePopup } from '@/components/layout';
import { useLayout } from '@/stores/useLayout.ts';

const layout = useLayout();
</script>

<style scoped lang="sass">
.main-container
  max-width: var(--app-max-width)
  margin: 2rem auto

:deep(.q-page-container)
  padding-bottom: 0 !important
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: 100vh
</style>
