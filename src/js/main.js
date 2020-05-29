import './../css/style.css'

import content from './content.js'
import * as templates from './templates.js'
import Modal from './modal.js'
import Carousel from './carousel.js'

let lastOpenedModalId;
const modal = new Modal();

function createProjects(projects, parent) {
    projects.forEach(project => {
        parent.insertAdjacentHTML('beforeend', templates.createProjectItem(project));
        
        const item = parent.lastElementChild;
        const carousel = new Carousel(item.getElementsByClassName('carousel')[0], {
            showNav: false,
            showDescription: false
        });
        
        project.media.filter(m => m.isThumbnail).forEach(projectMedia => {
            carousel.addItem(projectMedia.type, projectMedia.filename, projectMedia.description);
        });

        const readMoreButton = item.getElementsByClassName('readmore')[0];
        readMoreButton?.addEventListener('click', _ => modal.showProjectDetails(item.dataset.projectId));
    });
}

function populateProjects(data) {
    // data = data.sort((a, b) => (a.date < b.date) ? 1 : -1);
    createProjects(data.filter(d => d.id), document.getElementById('grid-projects')); // detailed projects
    createProjects(data.filter(d => !d.id), document.getElementById('grid-projects-other')); // other projects
};

document.addEventListener('DOMContentLoaded', (event) => {
    window.SVG_ID_COUNTER = 0;
    populateProjects(content['projects']);
});