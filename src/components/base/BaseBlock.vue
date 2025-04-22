<template>
  <div class="base-block" :class="cssClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'tertiary';
    offset?: 'responsive' | 'offset';
  }>(),
  {
    variant: 'secondary',
    offset: 'responsive',
  },
);

const cssClass = computed(() => [`is-${props.variant}`, `is-${props.offset}`]);
</script>

<style scoped lang="sass">
.base-block
  padding: 2rem
  border-radius: 12px

  &.is-responsive
    @media screen and (max-width: 768px)
      padding: 1.5rem
    @media screen and (max-width: 480px)
      padding: 1rem

  &.is-primary
    background: var(--primary-bg)
  &.is-secondary
    background: var(--secondary-bg)
  &.is-tertiary
    background: var(--tertiary-bg)
</style>
