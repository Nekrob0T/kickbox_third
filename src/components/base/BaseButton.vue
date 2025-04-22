<template>
  <q-btn flat :label="label ?? 'Button'" ripple class="base-button" :class="cssClass" :to="to"></q-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocation } from 'vue-router';

const props = withDefaults(
  defineProps<{
    variant?: 'primary';
    label?: string;
    to?: RouteLocation;
  }>(),
  {
    variant: 'primary',
  },
);

const cssClass = computed(() => [`is-${props.variant}`]);
</script>

<style scoped lang="sass">
.base-button
  border-radius: 8px

  &.is-primary
    background: var(--brand)
    transition: background .3s

    :deep(.q-focus-helper)
      opacity: 0

    &:hover
      background: var(--brand-hover)
</style>
