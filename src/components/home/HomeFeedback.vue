<template>
  <div class="feedback">
    <base-block class="feedback__card" variant="tertiary">
      <div class="feedback__card-title">
        „Trenowanie z Piotrem to była szkoła życia. Nauczył mnie dyscypliny i wiary w siebie.”
      </div>
      <div class="feedback__card-author">Jan Kowalski, były zawodnik KS Piaseczno</div>
    </base-block>
    <base-block class="feedback__card" variant="tertiary">
      <div class="feedback__card-title">„Dzięki jego wskazówkom osiągnąłem więcej, niż kiedykolwiek marzyłem.”</div>
      <div class="feedback__card-author">Anna Nowak, Mistrzyni Polski w kickboxingu</div>
    </base-block>
  </div>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
</script>

<style scoped lang="sass">
.feedback
  display: flex
  justify-content: space-between
  gap: 1.5rem
  align-items: center

  &__card
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: column
    gap: 1rem
    flex-grow: 1
    text-align: center
    font-size: 1.5rem
    flex-basis: 50%

    &-author
      color: var(--secondary-text)
      font-size: 1rem
      align-self: end
</style>
