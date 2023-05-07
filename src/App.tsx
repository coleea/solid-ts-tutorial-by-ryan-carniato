import { Component, createEffect, createSignal, useContext, useTransition } from 'solid-js';
import {render} from 'solid-js/web'
import {Schedule} from './ResourseIsLazyEvaluation'
import { ShareState } from './ShareState';
import { DerivationsExample } from './RippleEffect.memo';
import { DynamicTracking } from './DynamicTracking';

// import {} from 'solid-js/store'

const App: Component = () => {

  return (
    <>
      <DynamicTracking />
      {/* <DerivationsExample /> */}
      <Schedule />
      <ShareState />
    </>
  );
};

export default App;