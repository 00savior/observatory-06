import { portals, notes } from './data.js';

const portalRoot = document.querySelector('#portals');
portalRoot.innerHTML = portals.map((item) => `
  <a class="portal-card" href="#field-notes">
    <span class="card-number">${item.number}</span><span class="card-title">${item.title}</span>
    <span class="card-description">${item.description}</span><span class="card-link">${item.label} <b>↗</b></span>
  </a>`).join('');

document.querySelector('#notes').innerHTML = notes.map((item) => `
  <article class="note-card"><div class="note-image ${item.imageClass}" aria-hidden="true"><span>${item.date}</span></div>
    <div class="note-meta"><span>${item.type}</span><span>${item.date}</span></div><h3>${item.title}</h3><a href="#about">Read observation <b>↗</b></a>
  </article>`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();
