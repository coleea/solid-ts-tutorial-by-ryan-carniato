import { render } from "solid-js/web";
import { createSignal } from "solid-js";

export function StyleTest() {
  const [num, setNum] = createSignal(0);
  const [themeColor] = createSignal("blue")
  setInterval(() => setNum((num() + 1) % 255), 32)

  return (
    <div style={{ "--my-custom-color": themeColor() }}>
        <div style={{
                "--my-custom-color": themeColor(),
                // color: `rgb(${num()}, 180, ${num()})`,
                color: `--my-custom-color`,
                "font-weight": 800,
                "font-size": `${num()}px`
            }}  
        >Some Text</div>
    </div>
  )
}