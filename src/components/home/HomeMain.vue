<template>
  <div class="main">
    <img src="@/assets/img/awards.jpg" alt="" :draggable="false" />
    <div class="main__title">
      <h1>Piotr Siegoczyński – Mistrz Świata w Kickboxingu</h1>
      <h3>Sportowiec. Trener. Motywator</h3>
    </div>
    <p class="main__description">
      Witaj na mojej oficjalnej stronie! Nazywam się Piotr Siegoczyński i od ponad 30 lat jestem związany ze sportami
      walki. Jako wielokrotny mistrz świata w kickboxingu, wiem, jaką wartość mają pasja, dyscyplina i nieustanne
      dążenie do celu. Zapraszam Cię do świata sportu, w którym pokonywanie własnych ograniczeń staje się codziennością.
    </p>
  </div>
</template>

<style scoped lang="sass">
.main
  --main-height: 400px

  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  text-align: center
  padding: 1.5rem
  position: relative
  height: var(--main-height)

  &__title,
  &__description
    z-index: 1

  &__title
    display: flex
    flex-direction: column
    gap: 1rem
    font-weight: 500
    align-items: center

  &__description
    color: var(--secondary-text)
    font-size: 1.5rem

  img
    filter: brightness(.2)
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: var(--main-height)
</style>
