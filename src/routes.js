import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showOrganizationsPage } from './controllers/organizations.js';
import { showProjectsPage,showProjectDetailsPage } from './controllers/projects.js';
import {categoriesPage, showCategoryDetailsPage } from './controllers/categories.js';
import { showOrganizationDetailsPage } from './controllers/organizations.js';
import { showNewOrganizationForm, processNewOrganizationForm, organizationValidation } from './controllers/organizations.js';
import { showEditOrganizationForm, processEditOrganizationForm } from './controllers/organizations.js';
import { showNewProjectForm, processNewProjectForm,processEditProjectForm,showEditProjectForm, projectValidation } from './controllers/projects.js';
import { showAssignCategoriesForm, processAssignCategoriesForm } from './controllers/categories.js';
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
// Route for new organization page
router.get('/new-organization', showNewOrganizationForm);
// Route to handle new organization form submission
router.post('/new-organization', organizationValidation, processNewOrganizationForm);
// Route for edit organization page
router.get('/edit-organization/:id', showEditOrganizationForm);
// Route to handle edit organization form submission
router.post('/edit-organization/:id', organizationValidation, processEditOrganizationForm);
// Route for new project page
router.get('/new-project', showNewProjectForm);
// Route to handle new project form submission
router.post('/new-project', projectValidation, processNewProjectForm);

// Route for assigning categories to a project
router.get('/assign-categories/:projectId', showAssignCategoriesForm);
router.post('/assign-categories/:projectId', processAssignCategoriesForm);

// Route for edit project page
router.get('/edit-project/:id', showEditProjectForm);
// Route to handle edit project form submission
router.post('/edit-project/:id',  processEditProjectForm);

// error-handling routes
router.get('/test-error', testErrorPage);

export default router;