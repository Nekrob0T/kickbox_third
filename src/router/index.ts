import { createRouter, createWebHistory } from 'vue-router';
import { homeRoute, aboutRoute, achievementsRoute, galleryRoute, mediaRoute, offerRoute } from '@/views';

const router = createRouter({
  history: createWebHistory('/kickbox_third'),
  routes: [homeRoute, aboutRoute, achievementsRoute, galleryRoute, mediaRoute, offerRoute],
});

export default router;
