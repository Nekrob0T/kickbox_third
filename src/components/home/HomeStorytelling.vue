<template>
  <div class="storytelling">
    <base-block v-for="(item, i) in stories" :key="i" variant="tertiary" class="storytelling__card" offset="offset">
      <h3>{{ item.title }}</h3>
      <base-button label="Tutaj" :to="item.link" />
    </base-block>
  </div>
</template>

<script lang="ts" setup>
import { BaseBlock, BaseButton } from '@/components/base';

const stories = [
  {
    title: 'Galeria',
    link: '/gallery',
  },
  {
    title: 'Wystąpienia',
    link: '/achievements',
  },
  {
    title: 'W mediach',
    link: '/media',
  },
  {
    title: 'Treningi personalne',
    link: '/offer',
  },
];
</script>

<style scoped lang="sass">
h2
  margin-bottom: 3rem

.storytelling
  display: flex
  flex-direction: column
  gap: 1.5rem

  &__card
    width: 100%
    display: flex
    flex-direction: column
    gap: 1.5rem
    justify-content: space-between
</style>
