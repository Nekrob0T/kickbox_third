<template>
  <base-block offset="responsive" class="content">
    <h1>Piotr Siegoczyński w mediach</h1>
    <h3>Zobacz, co o mnie piszą i mówią:</h3>

    <div class="media">
      <div class="media__links">
        <a
          v-for="(item, i) in mediaLinks"
          :key="i"
          :href="item.link"
          target="_blank"
          class="media__link"
          :draggable="false"
          ><span>{{ item.title }}</span> <img src="@/assets/img/open-in-new.svg" alt="" :draggable="false"
        /></a>
      </div>
    </div>
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { useMeta } from '@/composable/useMeta.ts';

const mediaLinks = [
  {
    title: 'Wywiad z Piotrem Siegoczyńskim, Prezesem Polskiego Związku Kickboxingu',
    link: 'https://pzkickboxing.pl/news/1949%2Cwywiad%2Cpiotrem%2Csiegoczynskim%2Cprezesem%2Cpolskiego%2Czwiazku%2Ckickboxingu%C2%A0.html',
  },
  {
    title: 'Wywiad dotyczący przygotowań do gali DSF Kickboxing Challenge "Polska vs Macedonia',
    link: 'https://fightsport.pl/wywiady/piotr-siegoczynski-o-przygotowaniach-do-gali-dsf-kickboxing-challenge-polska-vs-macedonia-wywiad',
  },
  {
    title: 'Wywiad z Piotrem Siegoczyńskim po gali DSF Kickboxing Challenge',
    link: 'https://www.youtube.com/watch?v=B8KQX6zDZmo',
  },
  {
    title: 'Wystąpienie Piotra Siegoczyńskiego w programie "Koloseum" na Polsat Sport',
    link: 'https://www.facebook.com/story.php?id=204064016274645&story_fbid=4608931605787842&_rdr',
  },
  {
    title: 'Rozmowa w Polskim Radiu Czwórka: "Jakie czasy czekają polski kickboxing?"',
    link: 'https://www.polskieradio.pl/10/3961/artykul/1836137%2Cjakie-czasy-czekaja-polski-kickboxing',
  },
  {
    title: 'Nominacja Piotra Siegoczyńskiego do tytułu Lidera Sport Biznes Polska 2023',
    link: 'https://wojownicy-sport.pl/prezes-pzkb-piotr-siegoczynski-nominowanym-do-tytulu-lidera-sport-biznes-polska-2023/',
  },
];

const { titleAuthor } = useMeta();

titleAuthor('W mediach');
</script>

<style scoped lang="sass">
h3
  margin: 1.5rem 0

.media
  display: flex
  flex-direction: column
  gap: 2rem

  &__links
    display: flex
    flex-direction: column
    gap: 1.5rem

  &__link
    line-height: 1.5rem
    display: flex
    gap: 1rem
    align-items: center
</style>
