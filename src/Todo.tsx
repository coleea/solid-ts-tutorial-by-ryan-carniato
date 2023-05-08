import { For,Show,createEffect, createSignal, onCleanup } from "solid-js"

type todotype = {
    id : string
    title :string
    completed :boolean
}

const [input, setinput] =  createSignal("")
const [todos, settodos] =  createSignal<todotype[]>([])

export function Todo() {

    const [currentTime, setCurentTime] = createSignal(new Date().toISOString())

    const timerid = setInterval(() => setCurentTime(new Date().toISOString()), 16)
    onCleanup(() => clearInterval(timerid))

    return (
        <>
            <h1>current time</h1>
            <h2>{currentTime()}</h2>

            <ul>
                <Show when={todos().length > 0} >
                    <For each={todos()}>
                        {(item, index) => 
                            <li>
                                <div class="">{item.title}</div>
                                <div class="">completed : {JSON.stringify(item.completed)}</div>
                                {item.completed === false &&
                                <button class="" onclick={() => settodos(prev => {
                                    //const newarr = [...prev]
                                    return prev.map((v, i) => {
                                        if(i === index()) {
                                            return {...v , completed :true}
                                            // v.completed  = true
                                        } else return v
                                        // return v
                                    })
                                    // const item = newarr.at(index())
                                    // console.log('item');
                                    // console.log(item);                                    
                                    // item.completed = true 
                                    // newarr[index()] = item
                                    // return newarr
                                })}>완료로 변경하기</button>
                                }
                                <button onclick={() => {
                                    settodos(prev => { 
                                        return prev.filter((v,i) => i === index() ? false : true)
                                        // const newarr = [...prev.slice(0, index()), ...prev.slice(index() + 1)]
                                        // return newarr
                                    })
                                }}>remove this</button>
                            </li>
                        }
                    </For>
                </Show>
            </ul>
            <input type="text" value={input()} 
                    placeholder="하고싶은 일을 입력하세요"
                    // onchange={e => {
                        // onkeydown={setinput}
                    onchange={e => {
                        console.log('onchange triggered');
                        
                        setinput(e.target.value)}
                        } 
            />

            <button onclick={() => settodos(prev => {
                const newarr = [...prev]
                newarr.push({
                    title : input(),
                    completed :false,
                    id : new Date().toISOString(),
                })
                setinput("")
                    return newarr
            })}>add todo to click here</button>
        </>
    )
}

