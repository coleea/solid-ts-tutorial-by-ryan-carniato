import { Dynamic, render } from 'solid-js/web';
import { createSignal, Index, Match, Show, Switch } from 'solid-js';

const Largest = () => <div class="">bigger than 10</div>
const Smallest = () => <div class="">less than 5</div>

const options = {  
  largest : Largest,
  smallest : Smallest,
  other : "div",
}

export function DynamicTest() {

  // const [selected] = createSignal("largest");
  const [selected] = createSignal("it is not exist");

  return (
    <div class="">
      <div class="">
          In Dynamic Test
      </div>
      {/* <Component /> */}
      <Dynamic component={options[selected()]} children={"I am fallback"}  />
    </div>
  );
}

