import './../css/modal.css'

import content from './content.js'
import Carousel from './carousel.js'
import * as templates from './templates.js'

export default class Modal {
// todo: change getElementById, since no unique ID is available
    constructor() {
        this.modal = document.getElementById('modal');
        this.modalContent = document.getElementById('modal-content')

        this.modal.addEventListener('click', this._closeModal);
        this.modalContent.addEventListener('click', e => e.stopPropagation());
        document.getElementById('modal-close').addEventListener("click", this._closeModal);

        this.carousel = new Carousel(this.modalContent.getElementsByClassName('carousel')[0]);
        this.currentProjectId = undefined;

        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                this._closeModal();
            }
        }.bind(this));
    };

    showProjectDetails(id) {
        const project = content.projects.filter(p => p.id === id)[0];
        if (this._fillModal(project))
            this._openModal();
    }

    _closeModal() {
        document.body.classList.remove('block');
        modal.classList.add('hidden');
    }

    _openModal() {
        document.body.classList.add('block');
        modal.classList.remove('hidden');
        modal.scrollTop = 0;
        this.carousel.show(0);
    }

    _fillModal(project) {
        if(!project)
            return false;
        if (project.id === this.currentProjectId)
            return true;
        this.currentProjectId = project.id;

        const projectDetails = templates.createProjectDetails(project);
        this.modalContent.getElementsByClassName('tags')[0].innerHTML = projectDetails.tags;
        this.modalContent.getElementsByClassName('date')[0].innerHTML = projectDetails.date;
        document.getElementById('modal-project-title').innerHTML = projectDetails.title;
        document.getElementById('modal-project-summary').innerHTML = projectDetails.summary;
        document.getElementById('modal-project-achievements').innerHTML = projectDetails.achievements;
        document.getElementById('modal-project-responsibilities').innerHTML = projectDetails.responsibilities;

        const links = this.modalContent.querySelectorAll('span.link');
        for (let i = 0; i < links.length; i++) {
            if (links[i].dataset.projectId !== undefined) {
                links[i].addEventListener('click', _ => this.showProjectDetails(links[i].dataset.projectId));
            }
        }

        this.carousel.removeAllItems();
        project.media.filter(m => !m.isThumbnail).forEach(p => {
            this.carousel.addItem(p.type, p.filename, p.description);
        });

        return true;
    }
}