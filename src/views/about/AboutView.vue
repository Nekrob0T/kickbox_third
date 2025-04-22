<template>
  <base-block offset="responsive" class="content">
    <h1>Mistrz nie rodzi się na ringu – mistrz rodzi się na treningu.</h1>
    <p>
      Jestem Piotr Siegoczyński, wielokrotny mistrz świata w kickboxingu. Znam smak zwycięstwa, ale też ból porażki. To
      one kształtowały mnie jako zawodnika i człowieka. Dziś nie tylko trenuję, ale i szkolę innych — przekazując im to,
      czego sam nauczyłem się przez dekady. Niezależnie, czy zaczynasz swoją przygodę, czy chcesz wejść na wyższy poziom
      – możesz liczyć na moje wsparcie.
    </p>
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { useMeta } from '@/composable/useMeta.ts';

const { titleAuthor } = useMeta();

titleAuthor('Moja droga do mistrzostwa');
</script>

<style scoped lang="sass">
p
  margin-top: 3rem
  font-size: 1.5rem
  line-height: 2rem
</style>
