import {
    getUpcomingProjects,
    getProjectDetails
} from '../models/projects.js';

const showProjectsPage = async (req, res) => {
    const projects = await getUpcomingProjects(5);
    const title = 'Upcoming Service Projects';

    res.render('projects', { title, projects });
};

const showProjectDetailsPage = async (req, res) => {
    const projectId = req.params.id;

    const project = await getProjectDetails(projectId);
    const title = project.title;

    res.render('project', {
        title,
        project
    });
};

export {
    showProjectsPage,
    showProjectDetailsPage
};