export const getTypebotScript = (typebotToken: string) => {
  return `
    import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js';

    Typebot.initBubble({
      typebot: '${typebotToken}',
      theme: {
        button: { backgroundColor: 'var(--ifm-color-primary)' },
      },
    });
  `;
};
