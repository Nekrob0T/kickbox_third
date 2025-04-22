<template>
  <base-block offset="responsive">
    <h1>Współpraca i treningi</h1>

    <h3>Szukasz czegoś więcej niż zwykłego treningu?</h3>

    <p>
      Ze mną nie tylko poznasz techniki kickboxingu, ale nauczysz się dyscypliny, koncentracji i pracy nad sobą.
      Niezależnie od wieku, poziomu czy celu — pomogę Ci osiągnąć maksimum Twoich możliwości.
    </p>

    <h4>Chcesz trenować z mistrzem? <a href="mailto:kontakt@piotrsiegoczynski.pl">Napisz do mnie mailowo</a></h4>
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { useMeta } from '@/composable/useMeta.ts';

const { titleAuthor } = useMeta();

titleAuthor('Współpraca i treningi');
</script>

<style scoped lang="sass">
h3
  margin: 1.5rem 0
</style>
