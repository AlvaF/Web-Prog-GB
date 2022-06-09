import "../styles/style.scss";

import items from "./items.js";
import { DrawElement } from "./item.js";

const galleryRootElement = document.getElementById('gallery');

items.map(item => galleryRootElement.appendChild(DrawElement(item)));