import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-popup',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
