'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const NextLoader = () => {
  return (
    <ProgressBar
      height='4px'
      color='#B0EC64'
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};
