<template>
  <base-block offset="responsive" class="content">
    <h1>Droga przez ring</h1>
    <p>
      Każdy medal, każda walka, to osobna historia. Pierwszy tytuł Mistrza Polski zdobyłem jako młody chłopak pełen
      zapału. Potem przyszły kolejne — trudniejsze, bardziej wymagające. Punktem kulminacyjnym była wygrana na
      mistrzostwach świata WAKO. To moment, którego nie da się zapomnieć – adrenalina, flaga Polski nad głową, łzy w
      oczach. Ale to nie koniec. Bo prawdziwy mistrz zawsze idzie dalej.
    </p>
  </base-block>
</template>

<script setup lang="ts">
import { useMeta } from '@/composable/useMeta.ts';
import { BaseBlock } from '@/components/base';

const { titleAuthor } = useMeta();

titleAuthor('Najważniejsze sukcesy');
</script>

<style scoped lang="sass">
h1
  margin-bottom: 2.5rem
</style>
