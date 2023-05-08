import { Show, createSignal } from "solid-js";

export function ShowTest() {
    const [islogin, setIslogin] = createSignal()

    return (
        <>
            <div style={{"display" : "flex", "align-content" : "center", }}>
                {/* and to be fair, out compiler automatically does this ternaries as well */}
                {/* 삼항 연산자를 쓰고 싶으면 써라 (go ahead) */}
                <Show when={islogin()} fallback={ <button onclick={() => setIslogin(true)} class="">Login</button> }>
                    <button class="" onclick={() => setIslogin(false)}>Logout</button>
                </Show>
            </div>
        </>
    )
}