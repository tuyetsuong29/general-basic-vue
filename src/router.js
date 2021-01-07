import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TheForm from './pages/TheForm.vue';
import InformationClient from './pages/InformationClient.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/feedback',
      components: {
        default: TheForm
      }
    },
    {
      path: '/infoclient',
      components: {
        default: InformationClient
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
