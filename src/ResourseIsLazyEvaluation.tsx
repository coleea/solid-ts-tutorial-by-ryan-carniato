import { For, Show, Suspense, createResource, createSignal } from "solid-js";

const fetcher = () => fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
// const options = {}
const [resource , {mutate, refetch}] = createResource(fetcher)

const [slug, setslug] = createSignal(1) 
const [slugResource, ] = createResource(slug, async slug => fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`).then(response => response.json()))

export function Schedule() {
    
    return (
        <div class="">
            <div class="">
                    <div class="">slug resource</div>
                    <div class="">{slug()}</div>
                    <button onclick={() => setslug(prev => prev + 1)}>change slug</button>
            </div>
            <Suspense fallback={"loading..."}>
                <Show when={slugResource()}>
                    <div class="">
                        <div class="">{(slugResource().id)}</div>
                        <div class="">{(slugResource().title)}</div>
                        <div class="">{(slugResource().body)}</div>
                    </div>
                </Show>
            </Suspense>
            <ul>
                {/* this is automatically keyed */}
                <For each={resource()}>
                    {(item, index) => {
                        return (
                            <>
                                {/* <li>{index()}</li> */}
                                <li>{item.id}</li>
                                <li class="">{item.title}</li>
                                <li>{item.body}</li>
                                <li>
                                    <button onclick={() => mutate(prev => prev.slice(1) )}     >delete this</button>
                                </li>

                                {/* <button onclick={() => mutate([{"title" : "mutated"}])}>delete this</button> */}
                            </>
                        )
                    }}
                </For>
            </ul>
            {/* {JSON.stringify(resource())} */}
        </div>
      );
}