import { Component, createEffect, createSignal, useContext, useTransition } from 'solid-js';
import {render} from 'solid-js/web'
// import {} from 'solid-js/store'

const [somesignal, setsignal] =  createSignal(0)

createEffect(() => {
  console.log(`i am in createeffect ${somesignal()}`);    
}, [somesignal])

createEffect(() => {
  console.log('i am in createeffect');    
})

const Counter: Component = () => {

  console.log('function recalled');

  console.log(somesignal);
  console.log(setsignal.toString());
  
  setInterval(() => {
    setsignal(somesignal() + 1)
  }, 1000)

  // usesignal
  // const aaa = useContext("")
  const div = <div class=""></div>
  console.log(div)
  return (
    <div class="" style={{background : ""}}>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <h1 style={{"text-align" : "center", }} >
        {somesignal()}
      </h1>
    </div>
  );
};

const Counter2: Component = () => {

  console.log('function recalled');
  

  console.log(somesignal);
  console.log(setsignal.toString());
  
  setInterval(() => {
    // setsignal(prev => prev + 1)
    setsignal(somesignal() + 1)

  }, 1000)



  // usesignal
  // const aaa = useContext("")
  const div = <div class=""></div>
  console.log(div)
  return (
    <div class="" style={{background : ""}}>
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <h1 style={{"text-align" : "center",}} >
        {somesignal()}
      </h1>
    </div>
  );
};


const App: Component = () => {

  return (
    <div class="">
      <Counter/>
      <Counter2/>
    </div>
  );
};

export default App;