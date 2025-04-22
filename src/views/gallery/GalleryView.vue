<template>
  <base-block offset="responsive" class="content">
    <h1>Moje sportowe chwile</h1>

    <div class="gallery">
      <gallery-card v-for="(item, i) in gallery" :item="item" :key="i" />
    </div>
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import GalleryCard from '@/components/gallery/GalleryCard.vue';
import i1 from '@/assets/img/gallery/1.jpg';
import i2 from '@/assets/img/gallery/2.jpg';
import i3 from '@/assets/img/gallery/3.jpg';
import i4 from '@/assets/img/gallery/4.jpg';
import i5 from '@/assets/img/gallery/5.jpg';
import i6 from '@/assets/img/gallery/6.jpg';
import i7 from '@/assets/img/gallery/7.jpg';
import i8 from '@/assets/img/gallery/8.jpg';
import i9 from '@/assets/img/gallery/9.jpg';
import i10 from '@/assets/img/gallery/10.jpg';
import { useMeta } from '@/composable/useMeta.ts';

interface GalleryCard {
  title: string;
  src: string;
  link: string;
}

const gallery: GalleryCard[] = [
  {
    title: 'Piotr Siegoczyński z pucharem',
    src: i1,
    link: 'https://pl.wikipedia.org/wiki/Piotr_Siegoczy%C5%84ski',
  },
  {
    title: 'Michael Kuhr vs. Piotr Siegoczyński',
    src: i2,
    link: 'https://www.youtube.com/watch?v=92KpFg-MoLc',
  },
  {
    title: 'Seminarium z Mistrzem Świata w Kickboxingu',
    src: i3,
    link: 'https://www.sportowesuwalki.pl/seminarium-z-6-krotnym-mistrzem-swiata-w-kickboxingu/',
  },
  {
    title: 'Trening dla Klubowiczów Wejherowskiego Stowarzyszenia Sportowego',
    src: i4,
    link: 'https://sportwejherowo.pl/artykul/886/trening-z-mistrzynia-swiata',
  },
  {
    title: 'Młody Piotr Siegoczyński',
    src: i5,
    link: 'https://wojownicy-sport.pl/najlepsi-z-najlepszych-piotr-siegoczynski-legendy-kickboxingu-video-2',
  },
  {
    title: 'Piotr Siegoczyński nowym prezesem Polskiego Związku Kickboxingu',
    src: i6,
    link: 'https://pzkickboxing.pl/news/868%2Cpiotr%2Csiegoczynski%2Cnowym%2Cprezesem%2Cpolskiego%2Czwiazku%2Ckickboxingu.html',
  },
  {
    title: 'Wywiad z Piotrem Siegoczyński',
    src: i7,
    link: 'https://www.fight24.pl/piotr-siegoczynski/',
  },
  {
    title: 'Młody Piotr Siegoczyński',
    src: i8,
    link: 'https://www.backkicks.com/piotr-siegoczynski/',
  },
  {
    title: 'Piotr Siegoczynski vs Dennis Sigo',
    src: i9,
    link: 'https://www.youtube.com/watch?app=desktop&v=4zyskOkXD2U',
  },
  {
    title: 'Piotr Siegoczyński o 7 edycji DSF Kickboxing Challenge',
    src: i10,
    link: 'https://www.youtube.com/watch?v=B8KQX6zDZmo',
  },
];

const { titleAuthor } = useMeta();

titleAuthor('Moje sportowe chwile');
</script>

<style scoped lang="sass">
h1
  margin-bottom: 3rem
.gallery
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  gap: 2rem
</style>
