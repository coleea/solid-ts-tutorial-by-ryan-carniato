import { Component, ErrorBoundary, createEffect, createSignal, useContext, useTransition } from 'solid-js';
import {render} from 'solid-js/web'

const Broken = (props) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>
}

export const ErrorBoundryTest = () => {

  return (
    <>
        <div class="">before error</div>
        <ErrorBoundary fallback={err => err}>
          <Broken />
        </ErrorBoundary>
        <div class="">after error</div>
    </>    
    // <>
    // <div class="">
    //     <div class="">before error</div>
    //     <ErrorBoundary fallback={err => <h1>{err.message}</h1>}>
    //       <Broken />
    //     </ErrorBoundary>
    //     <div class="">after error</div>
    // </div>
    // </>
  );
};

// export default App;