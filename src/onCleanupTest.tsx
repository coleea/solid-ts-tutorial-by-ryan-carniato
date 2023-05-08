import { render } from "solid-js/web";
import { createEffect, createSignal, onCleanup , onMount} from "solid-js";

export function CleanupTest() {

  const [isShowChild, setIsShowChild] = createSignal(true);

  createEffect(() => {
    console.log(`isShowChild : ${isShowChild()}`);    
  })
  
  return (
    (isShowChild())
    ? <>
        <CleanupChild/>
        <button onclick={() => setIsShowChild(false)}>click here to hide child</button>
    </> 
    : <div class="">HIDE CHILD</div>
  )
}

export function CleanupChild() {

    const [count, setCount] = createSignal(0);
 
    onMount (() =>  { 
        const timerid = setInterval(() => setCount(count() + 1), 1000);

        onCleanup(() => {
          console.log('CLEANUP');          
          clearInterval(timerid)
        })
    })

    return (
        <div>
            Count: {count()}
        </div>
    )
}