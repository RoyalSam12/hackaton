import { ContentManager, ContentTypes } from './content';
import { userScrollSimulator } from './helpers/userScrollSimulator';
import { initReloadCatcher } from './helpers/initReloadCatcher';

import { initAdvertiser } from './advertise';
import './index.css';

const generateContent = async () => {
  try {
    const response = await fetch('/app.json').then((res) => res.json()) as { data: ContentTypes.ContentInfo[] };

    ContentManager.appendContent(response.data);

    document.body.append(...ContentManager.views.map((view) => view.element));
  } catch (error) {
    throw new Error('Content genaration failed');
  }
};

const app = async () => {
  initReloadCatcher();

  await generateContent();

  initAdvertiser();

  userScrollSimulator();
};

app();
