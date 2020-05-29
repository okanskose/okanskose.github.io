import './../css/carousel.css'

export default class Carousel {
    constructor(element, options) {

        this._initOptions(options);

        this.carousel = element;
        if (!this.carousel) {
            console.log(`Carousel with id '${id}' could not be found. Can't build carousel.`);
            return;
        }

        this.carousel.classList.add('carousel');
        this.carousel.innerHTML = `
            <div class="carousel-media-section">
                <div class="carousel-items"></div>
                <button class="carousel-previous hide"><svg class="svg-arrow" viewBox="0 0 42 64"><path d="m36 0.1-36 30 36 30"></svg></button>
                <button class="carousel-next hide"><svg class="svg-arrow" viewBox="0 0 42 64"><path d="m0.085 0.1 36 30-36 30"></svg></button>
            </div>
            ${this.options.showDescription ? `<div class="carousel-media-description"></div>` : ``}
            ${this.options.showNav ? `<nav class="carousel-nav hide"></nav>` : ``}
        `;

        // Init some variables
        this.items = [];
        this.currentIndex = 0;
        this.svgCounter = 0;
        this.itemsHTML = this.carousel.getElementsByClassName('carousel-items')[0];
        this.descriptionText = this.carousel.getElementsByClassName('carousel-media-description')[0];
        this.navigation = this.carousel.getElementsByClassName('carousel-nav')[0];

        // Bind navigation
        this.buttons = this.carousel.getElementsByTagName('button');
        this.buttons[0].addEventListener('click', this.showPrevious.bind(this));
        this.buttons[1].addEventListener('click', this.showNext.bind(this));

        if (this.options.autoLoopTime > 0) {
            setInterval(function () {
                this.showNext()
            }.bind(this), this.options.autoLoopTime * 1000)
        }
    };

    removeAllItems() {
        this.items.forEach(item => {
            item.node.remove();
        });
        this.currentIndex = 0;
        this.items = [];
        this._removeNavigationItems();
    }

    showNext() {
        this.show(this.currentIndex + 1);
    };

    showPrevious() {
        this.show(this.currentIndex - 1);
    };

    show(nextIndex) {
        if (this.items.length < 1)
            return;

        // get elemts and move index
        const currentItem = this.items[this.currentIndex];
        this.currentIndex = this._mapIndex(this.items, nextIndex);
        const nextItem = this.items[this.currentIndex];

        // show and hide
        currentItem.node.classList.remove('fade-in');
        currentItem.node.classList.add('fade-out');
        nextItem.node.classList.remove('hidden');
        nextItem.node.classList.remove('fade-out');
        nextItem.node.classList.add('fade-in');

        this._updateTitle();
        this._updateNavigationItems();
    };

    addItem(type, src, description) {

        let content = '';
        switch (type) {
            case 'img':
                content = this._createImage(src);
                break;
            case 'youtube':
                content = this._createYouTubeThumbnail(src);
                break;
        };

        // append to DOM and add reference to the list
        this.itemsHTML.insertAdjacentHTML('beforeend', `<div class="carousel-item">${content}</div>`);
        const lastChild = this.itemsHTML.lastElementChild;
        this.items.push({
            node: lastChild,
            description: description
        });

        // fade-out all but first item
        if (this.items.length > 1) {
            lastChild.classList.add('fade-out');
            this._toggleNavigationItems(false);
        }

        // add listener to youtube thumbnail
        if (type === 'youtube') {
            lastChild.getElementsByClassName('carousel-item-youtube-thumbnail')[0].addEventListener('click', _ => {
                lastChild.innerHTML = this._createYouTubeVideo(src);
            });
        }

        this._updateTitle();
        this._addNavigationItem(this.items.length - 1);
        this._updateNavigationItems();
    };

    _initOptions(options) {
        const defaultOptions = {
            showNav: true,
            showDescription: true,
            autoLoopTime: 0,
        };
        this.options = Object.assign({}, defaultOptions, options);
    }

    _createImage(src) {
        return `<img src="${src}">`;
    };

    _createYouTubeVideo(src) {
        return `
            <iframe class="carousel-item-youtube-video"
                src="https://www.youtube.com/embed/${src}?autoplay=1&loop=1&rel=0&modestbranding=1" frameborder="0" allowfullscreen>
            </iframe>
        `;
    }

    _createYouTubeThumbnail(src) {
        const svgId = `SVGID_${window.SVG_ID_COUNTER++}_${src}_${this.svgCounter++}`;
        return `
        <div class="carousel-item-youtube-thumbnail">
            <svg class="carousel-item-youtube-icon" viewBox="0 0 1024 721">
                <path fill="#FFFFFF" d="M407,493l276-143L407,206V493z"/>
                <path opacity="0.12" fill="#420000" d="M407,206l242,161.6l34-17.6L407,206z"/>
                <g>
                    <linearGradient id="${svgId}" gradientUnits="userSpaceOnUse" x1="512.5" y1="719.7" x2="512.5" y2="1.2" gradientTransform="matrix(1 0 0 -1 0 721)">
                    <stop offset="0" style="stop-color:#E52D27"/>
                    <stop offset="1" style="stop-color:#BF171D"/>
                    </linearGradient>
                    <path fill="url(#${svgId})" d="M1013,156.3c0,0-10-70.4-40.6-101.4C933.6,14.2,890,14,870.1,11.6C727.1,1.3,512.7,1.3,512.7,1.3    h-0.4c0,0-214.4,0-357.4,10.3C135,14,91.4,14.2,52.6,54.9C22,85.9,12,156.3,12,156.3S1.8,238.9,1.8,321.6v77.5    C1.8,481.8,12,564.4,12,564.4s10,70.4,40.6,101.4c38.9,40.7,89.9,39.4,112.6,43.7c81.7,7.8,347.3,10.3,347.3,10.3    s214.6-0.3,357.6-10.7c20-2.4,63.5-2.6,102.3-43.3c30.6-31,40.6-101.4,40.6-101.4s10.2-82.7,10.2-165.3v-77.5    C1023.2,238.9,1013,156.3,1013,156.3z M407,493V206l276,144L407,493z"/>
                    <path fill="#282928" d="M1013,156.3c0,0-10-70.4-40.6-101.4C933.6,14.2,890,14,870.1,11.6C727.1,1.3,512.7,1.3,512.7,1.3    h-0.4c0,0-214.4,0-357.4,10.3C135,14,91.4,14.2,52.6,54.9C22,85.9,12,156.3,12,156.3S1.8,238.9,1.8,321.6v77.5    C1.8,481.8,12,564.4,12,564.4s10,70.4,40.6,101.4c38.9,40.7,89.9,39.4,112.6,43.7c81.7,7.8,347.3,10.3,347.3,10.3    s214.6-0.3,357.6-10.7c20-2.4,63.5-2.6,102.3-43.3c30.6-31,40.6-101.4,40.6-101.4s10.2-82.7,10.2-165.3v-77.5    C1023.2,238.9,1013,156.3,1013,156.3z M407,493V206l276,144L407,493z"/>
                </g>
            </svg>
            <img src="http://img.youtube.com/vi/${src}/0.jpg">
        <div>
        `;
    };

    _addNavigationItem(index) {
        if (!this.options.showNav)
            return;

        this.navigation.insertAdjacentHTML('beforeend', `<button></button>`);
        this.navigation.lastChild.addEventListener('click', _ => this.show(index));
    }

    _removeNavigationItems() {
        if (!this.options.showNav)
            return;

        this.navigation.innerHTML = '';
    }

    _updateNavigationItems(isActive) {
        if (!this.options.showNav)
            return;

        this.navigation.childNodes.forEach((item, index) => {
            item.classList.remove('active');
            if (index == this.currentIndex) {
                item.classList.add('active');
            }
        });
        // this.navigation.get = (this.currentIndex + 1) + '/' + this.items.length;
    };

    _updateTitle() {
        if (!this.options.showDescription)
            return;

        this.descriptionText.innerHTML = this.items[this.currentIndex].description;
    };

    _toggleNavigationItems(hide){
        this.buttons[0].classList.toggle('hide', hide);
        this.buttons[1].classList.toggle('hide', hide);
        this.navigation?.classList.toggle('hide', hide);
    }

    _mapIndex(arr, i) {
        /*
            if arr.length = 3, then
            _mapIndex(arr,  0) = 0
            _mapIndex(arr,  1) = 1
            _mapIndex(arr,  2) = 2
            _mapIndex(arr,  3) = 0
            _mapIndex(arr,  4) = 1
            _mapIndex(arr,  5) = 2
            _mapIndex(arr, -1) = 2
            _mapIndex(arr, -2) = 1
            _mapIndex(arr, -3) = 0
            _mapIndex(arr, -4) = 2
            _mapIndex(arr, -5) = 1
        */
        const max = arr.length;
        if (i >= max)
            return i % max;
        else if (i < 0 && i >= -max)
            return max + i;
        else if (i < 0 && -i % max != 0)
            return max - (-i % max);
        else if (-i % max == 0)
            return 0;
        return i;
    };
}