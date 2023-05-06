import { Component, createEffect, createSignal, useContext, useTransition } from 'solid-js';
import {render} from 'solid-js/web'
import {Schedule} from './ResourseIsLazyEvaluation'
import { ShareState } from './ShareState';
// import {} from 'solid-js/store'

const App: Component = () => {

  return (
    <>
      <Schedule />
      <ShareState />
    </>
  );
};

export default App;