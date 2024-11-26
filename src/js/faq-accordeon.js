import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
window.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion', {
    elementClass: 'accordion-item',
    triggerClass: 'accordion-subtitle',
    panelClass: 'accordion-body',
    activeClass: 'active',
    openOnInit: [0],
  });
});
