function html(literals, ...vars) {
    let raw = literals.raw,
        result = '',
        i = 1,
        len = arguments.length,
        str,
        variable

    while (i < len) {
        str = raw[i - 1]
        variable = vars[i - 1]
        result += str + variable
        i++
    }
    result += raw[raw.length - 1]
    return result
}

export function createProjectItem(projectData) {
    return html `<div data-project-id="${projectData.id}" class="project-item flex shadow">
        ${projectItemCarousel(projectData)}
        ${projectItemMain(projectData)}
    </div>
    `;
};

export function createProjectDetails(data) {
    return {
        title: data.title,
        tags: `Tags: ${data.tags.join(', ')}`,
        date: `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][data.date.getMonth()]}, ${data.date.getFullYear()}`,
        summary: createProjectSummary(data.summary),
        achievements: createProjectAchievements(data.achievements),
        responsibilities: createProjectResponsibilities(data.responsibilities),
    };
}

const projectItemImage = data => html `
    <div class="img-container">
        <div class="img-wrapper">
        ${
            data.media[0].type == 'img' ?
            html`<img id="project-item-thumbnail-" class="absolute-fill" src="./content/details/${data.id ? (data.id + '/media') : 'others'}/${data.media[0].filename}">`:
            data.media[0].type == 'youtube' ?
            html`<!--iframe class="absolute-fill" src="https://www.youtube.com/embed/${data.media[0].filename}"></iframe-->`
            : ''
        }
        </div>
    </div>
`;

const projectItemCarousel = projectData => `<div id="carousel-${projectData.id}" class="carousel shadow"></div>`;

const projectItemMain = projectData => html `
    <main class="flex">
        <h3 class="start">${projectData.title}</h3>
        <span class="tags start">${projectData.tags.join(', ')}</span>
        ${projectData.id ? projectItemReadMoreButton(projectData) : projectItemDescription(projectData)}
    </main>
`;

const projectItemDescription = projectData => html `
    <span class="project-item-description start justify-tex">${projectData.description}</span>
`;

const projectItemReadMoreButton = projectData => html `
    <button class="readmore">Read More</button>
`;

function unorderedList(data) {
    let list = '<ul>';
    let skipNext = false;
    data.forEach((d, i) => {
        if (skipNext) {
            skipNext = false;
            return;
        }
        list += `<li>${d}`;
        if(i + 1 < data.length){
            // check if next element is an array
            if (Array.isArray(data[i+1]) && data[i+1].length > 0) {
                 // handle the next element and skip it in the next iteration
                list += unorderedList(data[i+1]);
                skipNext = true;
            }
        }
        list += '</li>';
    });
    list += '</ul>';
    return list;
}

function substitute(text) {
    return substituteLinks(text);
}

function substituteLinks(text) {
    const r = /\[(?<text>.*?)\]\((?<url>(?<ext>https?:\/\/)?.*?)\)/gm;
    return text.replace(r, function (match, text, url, ext) {
        if (ext) {
            return `<a target="_blank" href="${url}">${text}</a>`;
        } else {
            return `<span class="link" data-project-id="${url}">${text}</span>`;
        }
    });
}

function createProjectSummary(data) {
    let summary = '';
    data.forEach(d => {
        if (Array.isArray(d))
            summary += unorderedList(d);
        else
            summary += html `<p>${d}</p>`;
    });
    return substitute(summary);
}

function createProjectAchievements(data) {
    return substitute(unorderedList(data));
}

function createProjectResponsibilities(data) {
    return substitute(unorderedList(data));
}