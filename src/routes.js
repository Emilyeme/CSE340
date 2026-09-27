import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showOrganizationsPage } from './controllers/organizations.js';
import { showProjectsPage,showProjectDetailsPage } from './controllers/projects.js';
import {categoriesPage, showCategoryDetailsPage } from './controllers/categories.js';
import { showOrganizationDetailsPage } from './controllers/organizations.js';
import { testErrorPage } from './controllers/errors.js';

const router = express.Router();
console.log('ROUTES.JS LOADED');

router.get('/', showHomePage);
router.get('/organizations', showOrganizationsPage);
router.get('/projects', showProjectsPage);
router.get('/categories', categoriesPage);
router.get('/category/:id', showCategoryDetailsPage);
router.get('/project/:id', showProjectDetailsPage);

// Route for organization details page
router.get('/organization/:id', showOrganizationDetailsPage);
// error-handling routes
router.get('/test-error', testErrorPage);

export default router;