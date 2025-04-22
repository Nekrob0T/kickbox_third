<template>
  <base-block offset="responsive" class="content">
    <home-motivation />
    <home-storytelling />
    <home-feedback />
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { HomeContact, HomeMotivation, HomeStorytelling, HomeFeedback, HomeOtherLife } from '@/components/home';
import { useMeta } from '@/composable/useMeta.ts';

const { titleAuthor } = useMeta();

titleAuthor('Mistrz Świata w Kickboxingu');
</script>

<style scoped lang="sass">
.content
  display: flex
  flex-direction: column
  gap: 3rem
</style>
