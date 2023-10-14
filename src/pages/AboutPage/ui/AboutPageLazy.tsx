import { lazy } from 'react';

function sleep(delay: number) {
  return new Promise((r) => {
    setTimeout(r, delay);
  });
}

export const AboutPageLazy = lazy(async () => {
  await sleep(5000);
  return await import('./AboutPage');
});
