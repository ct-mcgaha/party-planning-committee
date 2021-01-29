import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage'
import About from '../views/About'
import WetParty from '../views/WetParty'
import DryParty from '../views/DryParty'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/wet-party',
    name: 'wet-party',
    component: WetParty
  },
  {
    path: '/dry-party',
    name: 'dry-party',
    component: DryParty
  },
  {
      path: '/about',
      name: 'about',
      component: About
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
