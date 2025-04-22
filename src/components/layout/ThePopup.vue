<template>
  <teleport to="body">
    <div ref="popup" class="popup">
      <div class="popup__overlay" />
      <q-icon class="popup__close" name="close" @click="layout.closePopup()" />
      <div class="popup__modal">
        <gallery-card :item="layout.popup" is-wide />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import GalleryCard from '@/components/gallery/GalleryCard.vue';
import { onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock-upgrade';
import { useLayout } from '@/stores/useLayout.ts';

const layout = useLayout();
const popup = ref(null);

onMounted(() => {
  disableBodyScroll(document.body, {
    reserveScrollBarGap: true,
  });
});

onBeforeUnmount(() => {
  enableBodyScroll(document.body);
});
</script>

<style scoped lang="sass">
.popup
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  z-index: 10000
  display: flex
  justify-content: center
  align-items: center

  &__close
    position: absolute
    font-size: 4rem
    right: 2rem
    top: 2rem
    z-index: 10
    cursor: pointer

  &__overlay
    width: 100vw
    height: 100vh
    position: absolute
    background: var(--primary-bg)
    opacity: .7
</style>
