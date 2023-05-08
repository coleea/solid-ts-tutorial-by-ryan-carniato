// @ts-nocheck
import { createSignal, onCleanup, Show } from "solid-js";

function clickOutside(embedElement, directives) {
    const onclick = e => ! embedElement.contains(e.target)
                        && directives()
    document.addEventListener('click', onclick)
    onCleanup(() => document.removeEventListener("click" , onclick))
}

export function UseDirectives() {
  const [show, setShow] = createSignal(false);

//  clickOutside() ; 

  return (
    <Show
      when={show()}
      fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>}
    >
        
      <div class="modal" use:clickOutside={setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}