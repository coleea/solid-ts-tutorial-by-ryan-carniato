import { render } from 'solid-js/web';
import { createSignal, Index } from 'solid-js';

export function IndexTest() {
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]);
  
  return (
    <ul>
      <li>
        <a target="_blank" href="">
          1: Garfield
        </a>
      </li>
    </ul>
  );
}

