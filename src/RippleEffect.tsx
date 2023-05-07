// frontendmasters 강의 중 derivations 파트

import { createEffect, createMemo, createSignal } from "solid-js";

export function DerivationsExample() {
    
    const [first, setfirst]  = createSignal("john")
    const [second, setsecond]  = createSignal("smith")

    const fullname = createMemo(() => `${first()} ${second()}`)

    createEffect(() => {console.log(`my name is ${fullname()}`)})

    setfirst("new type")

    return (
        <>
        
        </>
    )
}