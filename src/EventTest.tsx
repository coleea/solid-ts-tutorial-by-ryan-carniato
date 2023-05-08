import { render } from "solid-js/web";
import { createSignal } from "solid-js";

export function EventTest() {
  const [pos, setPos] = createSignal({x: 0, y: 0});

  function handleMouseMove(event) {
    setPos({
      x: event.clientX,
      y: event.clientY
    });
  }

  return (
    <div onmousemove={handleMouseMove} style={{width  : "100vw", height : "100vh"}}>
      The mouse position is {pos().x} x {pos().y}
    </div>
  );
}