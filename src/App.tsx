import { Component, createEffect, createSignal, useContext, useTransition } from 'solid-js';
import {render} from 'solid-js/web'
import {Schedule} from './ResourseIsLazyEvaluation'
import { ShareState } from './ShareState';
import { DerivationsExample } from './RippleEffect.memo';
import { DynamicTracking } from './DynamicTracking';
import {ShowTest} from './Show'
import { IndexTest } from './IndexTest';
import { SwitchTest } from './SwitchTest';
import { DynamicTest } from './DynamicTest';
import { ErrorBoundryTest } from './ErrorBoundryTest';


// import {} from 'solid-js/store'

const App: Component = () => {

  return (
    <>
      <ErrorBoundryTest />
      {/* <DynamicTest /> */}
      {/* <SwitchTest /> */}
      {/* <IndexTest /> */}
      {/* <ShowTest /> */}
      {/* <DynamicTracking /> */}
      {/* <DerivationsExample /> */}
      {/* <Schedule /> */}
      {/* <ShareState /> */}
    </>
  );
};

export default App;