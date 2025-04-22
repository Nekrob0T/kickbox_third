<template>
  <q-drawer
    v-model="layout.sidebar"
    side="right"
    behavior="mobile"
    class="sidebar"
    no-swipe-close
    no-swipe-backdrop
    no-swipe-open
  >
    <q-icon class="sidebar__close" name="close" @click="layout.toggleSidebar()" />
    <nav class="sidebar__nav">
      <router-link :to="homeRoute"> Strona główna </router-link>
      <router-link :to="aboutRoute"> O mnie </router-link>
      <router-link :to="achievementsRoute"> Osiągnięcia </router-link>
      <router-link :to="mediaRoute"> W mediach </router-link>
      <router-link :to="galleryRoute"> Galeria </router-link>
      <router-link :to="offerRoute"> Oferta </router-link>
    </nav>
  </q-drawer>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts';
import { aboutRoute, achievementsRoute, galleryRoute, homeRoute, mediaRoute, offerRoute } from '@/views';

const layout = useLayout();
</script>

<style scoped lang="sass">
:deep(.q-drawer)
  background: var(--secondary-bg)
  border-left: 1px solid var(--tertiary-bg)
  padding: 1rem

.sidebar
  &__nav
    display: flex
    flex-direction: column

    a
      display: inline-block
      //width: 200px
      padding: 1.5rem
      font-size: 1.5rem

  &__close
    position: absolute
    font-size: 3rem
    right: 1rem
    top: 1rem
    z-index: 10
    cursor: pointer
</style>
