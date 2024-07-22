import { ContentManager, ContentTypes } from './content';
import { PbjsFacade } from './service/PbjsFacade';

const pbjsFacade = new PbjsFacade();

const pbjsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pbjsFacade.addElemenentsToQueue([entry.target.id]);
    }
  });
});

const createAdvScript = (): HTMLScriptElement => {
  const script = document.createElement('script');
  script.src = 'https://cdn.amomama.de/hackathon/scripts/adv.min.js';

  return script;
};

export const initAdvertiser = () => {
  document.head.appendChild(createAdvScript());

  ContentManager.views.forEach((view) => {
    if (view.type === ContentTypes.ContentType.ADV) {
      pbjsObserver.observe(view.element);
    }
  });
};
