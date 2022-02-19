import { createRouter as _createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

export const createRouter = () => {
  const routes = setupLayouts(generatedRoutes);

  const router = _createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach(async (to, from, next) => {
    next();
  });

  return router;
};
