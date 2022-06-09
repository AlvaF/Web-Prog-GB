function elementType() {
    switch (item.type) {
        case 'image':
            return `<img class="item__image" src="${item.resource}" alt="${item.title}"/>`;
        case 'audio':
            const audioFile = new Audio(item.resource);
            audioFile.controls = true;
            return `<div class="item__audio">${audioFile.outerHTML}</div>`;
        case 'video':
            const videoFile = document.createElement('video');
            videoFile.controls = true;
            videoFile.src = item.resource;
            return `<div class="item__video">${videoFile.outerHTML}</div>`;
    }
}

export function DrawElement(item) {
    const itemElement = document.createElement('div')
    itemElement.classList = 'gallery-item'

    createdItem = elementType(item);

    const titleElement = document.createElement('span')
    titleElement.classList = 'gallery-item__title'
    titleElement.textContent = item.title

    itemElement.appendChild(createdItem)
    itemElement.appendChild(titleElement)

    return itemElement
}