import { render } from 'solid-js/web';
import { createSignal, Index, Match, Show, Switch } from 'solid-js';

export function SwitchTest() {
  const [x] = createSignal(7);

  return (
    <Switch fallback={<>{`this is fallback`}</>} >
        <Match when={x() > 10}>
            <div class="">bigger than 10</div>
        </Match>
        <Match when={x() < 5}>
            <div class="">less than 5</div>
        </Match>
        {/* <Match when={x() >= 5}>
            <div class=""> {`x >= 5`} </div>
        </Match>                 */}
    </Switch>
    // <Show
    //   when={x() > 10}
    //   fallback={
    //     <Show
    //       when={5 > x()}
    //       fallback={<p>{x()} is between 5 and 10</p>}
    //     >
    //       <p>{x()} is less than 5</p>
    //     </Show>
    //   }
    // >
    //   <p>{x()} is greater than 10</p>
    // </Show>
  );
}

