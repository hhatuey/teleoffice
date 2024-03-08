import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from '@xarc/react';
import electrodePng from '../../static/electrode.png';
import { message } from './message';
import { subApp as demo1SubApp } from '../demo1';

export const Demo1 = createDynamicComponent(demo1SubApp, { ssr: false });

const Home = (props: any) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        <a href="https://www.electrode.io">
          Electrode <img src={electrodePng} />
        </a>
      </h1>
      <p>{message}</p>
      <p>props: {JSON.stringify(props)}</p>
      <h1>Demo1 subapp as a dynamic component in Home</h1>
      <Demo1 />
    </div>
  );
};

export const subapp: ReactSubApp = {
  Component: Home,
  wantFeatures: [
    staticPropsFeature({
      serverModule: require.resolve('./static-props'),
    }),
  ],
};
