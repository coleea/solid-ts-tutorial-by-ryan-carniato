import { render } from "solid-js/web";
import { createSignal, onMount, For } from "solid-js";
import "./styles.css";

export function onMountTest() {
  const [photos, setPhotos] = createSignal([]);

onMount(() => {
  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
  .then(r => r.json())
  .then(setPhotos)
})
  return <>
    <h1>Photo album</h1>

    <div class="photos">
      <For each={photos()} fallback={<p>Loading...</p>}>{ photo =>
        <figure>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <figcaption>{photo.title}</figcaption>
        </figure>
      }</For>
    </div>
  </>;
}