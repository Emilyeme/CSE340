import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showOrganizationsPage } from './controllers/organizations.js';
import { showProjectsPage,showProjectDetailsPage } from './controllers/projects.js';
import {categoriesPage, showCategoryDetailsPage } from './controllers/categories.js';
import { showOrganizationDetailsPage } from './controllers/organizations.js';
import { showNewOrganizationForm, processNewOrganizationForm, organizationValidation } from './controllers/organizations.js';
import { showEditOrganizationForm, processEditOrganizationForm } from './controllers/organizations.js';
import { showNewProjectForm, processNewProjectForm,processEditProjectForm,showEditProjectForm, projectValidation } from './controllers/projects.js';
import { showAssignCategoriesForm, processAssignCategoriesForm, showEditCategoryForm, processEditCategoryForm, showNewCategoryForm, processNewCategoryForm, categoryValidation } from './controllers/categories.js';
import { showUserRegistrationForm, processUserRegistrationForm } from './controllers/users.js';
import { processLoginForm, showLoginForm, processLogout,requireLogin, showDashboard,showUsersPage, requireRole } from './controllers/users.js';
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
router.get('/new-organization',requireRole('admin'), showNewOrganizationForm);
// Route to handle new organization form submission
router.post('/new-organization', requireRole('admin'), organizationValidation, processNewOrganizationForm);
// Route for edit organization page
router.get('/edit-organization/:id', requireRole('admin'), showEditOrganizationForm);
// Route to handle edit organization form submission
router.post('/edit-organization/:id', requireRole('admin'), organizationValidation, processEditOrganizationForm);
// Route for new project page
router.get('/new-project', requireRole('admin'), showNewProjectForm);
// Route to handle new project form submission
router.post('/new-project', requireRole('admin'), projectValidation, processNewProjectForm);

// Route for assigning categories to a project
router.get('/assign-categories/:projectId', requireRole('admin'), showAssignCategoriesForm);
router.post('/assign-categories/:projectId', requireRole('admin'), processAssignCategoriesForm);

// Route for edit project page
router.get('/edit-project/:id', requireRole('admin'), showEditProjectForm);
// Route to handle edit project form submission
router.post('/edit-project/:id', requireRole('admin'), processEditProjectForm);

router.get('/new-category', requireRole('admin'), showNewCategoryForm);

router.post('/new-category', requireRole('admin'), categoryValidation, processNewCategoryForm);

router.get('/edit-category/:id', requireRole('admin'), showEditCategoryForm);

router.post('/edit-category/:id', requireRole('admin'), categoryValidation, processEditCategoryForm);

// User registration routes
router.get('/register', showUserRegistrationForm);
router.post('/register', processUserRegistrationForm);
// User login routes
router.get('/login', showLoginForm);
router.post('/login', processLoginForm);
router.get('/logout', processLogout);
// Protected dashboard route
router.get('/dashboard', requireLogin, showDashboard);

//admin-only users page route
router.get('/users', requireRole('admin'), showUsersPage);

// error-handling routes
router.get('/test-error', testErrorPage);

export default router;