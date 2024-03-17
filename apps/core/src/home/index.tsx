import { React, ReactSubApp, createDynamicComponent, staticPropsFeature } from '@xarc/react';
import electrodePng from '../../static/electrode.png';
import { message } from './message';
import { reduxReducers as homeReducers } from './reducers';
import { subApp as demo1SubApp } from '../demo1';
import { subApp as demo2SubApp, reduxReducers as demo2Reducers } from '../demo2';
import { connect, reduxFeature } from '@xarc/react-redux';

export const Demo1 = createDynamicComponent(demo1SubApp, { ssr: false });
export const Demo2 = createDynamicComponent(demo2SubApp, { ssr: false });

const updateMessage = (value: string) => {
  return {
    type: 'UPDATE_MESSAGE',
    payload: value,
  };
};

const removeMessage = () => {
  return {
    type: 'REMOVE_MESSAGE',
  };
};

console.log(']>--------------<[Home]')
const Home = (props: { value: string; dispatch: any }) => {
  const { value, dispatch } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        <a href="https://www.electrode.io">
          Electrode <img src={electrodePng} />
        </a>
      </h1>
      <p>{value}</p>
      <p>props: {JSON.stringify(props)}</p>
      <h1>Redux State Home</h1>
      <button onClick={() => dispatch(updateMessage(message))}>Show message</button>
      &nbsp;{value}&nbsp;
      <button onClick={() => dispatch(removeMessage())}>Delete message</button>
      <h1>Demo1 subapp as a dynamic component in Home</h1>
      <Demo1 />
      <Demo2 />
    </div>
  );
};
const mapStateToProps = (state: { message: { value: string } }) => {
  return { value: state.message.value };
};

export const reduxReducers = { ...homeReducers, ...demo2Reducers };
export const subapp: ReactSubApp = {
  Component: connect(mapStateToProps, (dispatch) => ({ dispatch }))(Home),
  wantFeatures: [
    reduxFeature({
      React,
      shareStore: true,
      reducers: true, // true => read the reduxReducers export from this file
      prepare: async (initialState) => {
        return {
          initialState: initialState || { message: { value: 'none' }, number: { value: 999 } },
        };
      },
    }),
  ],
};
