<template>
  <q-header id="#header" class="header">
    <router-link :to="homeRoute">
      <img src="@/assets/img/logo.svg" alt="Logo" :draggable="false" />
    </router-link>
    <nav v-if="isLargeScreen" class="header__nav">
      <router-link :to="homeRoute"> Strona główna </router-link>
      <router-link :to="aboutRoute"> O mnie </router-link>
      <router-link :to="achievementsRoute"> Osiągnięcia </router-link>
      <router-link :to="mediaRoute"> W mediach </router-link>
      <router-link :to="galleryRoute"> Galeria </router-link>
      <router-link :to="offerRoute"> Oferta </router-link>
    </nav>
    <sidebar-toggler v-else />
  </q-header>
</template>

<script setup lang="ts">
import { useScreen } from '@/composable/useScreen.ts';
import { homeRoute, aboutRoute, achievementsRoute, galleryRoute, mediaRoute, offerRoute } from '@/views';
import SidebarToggler from '@/components/layout/SidebarToggler.vue';

const { isLargeScreen } = useScreen();
</script>

<style scoped lang="sass">
.header
  width: 100%
  height: 56px
  background: var(--secondary-bg)
  padding: .5rem 1rem
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid var(--tertiary-bg)

  &__nav
    display: flex
    height: 100%
    align-items: center

    a
      display: inline-block
      padding: .5rem
</style>
