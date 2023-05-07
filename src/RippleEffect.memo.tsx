// frontendmasters 강의 중 derivations 파트

import { createEffect, createMemo, createSignal } from "solid-js";

export function DerivationsExample() {
    
    console.log('[1] create signals');
    
    const [first, setfirst]  = createSignal("john")
    const [second, setsecond]  = createSignal("smith")

    const fullname = createMemo(() => {
        console.log('creating/updating fullname');        
        return `${first()} ${second()}
        `})

    // const fullname = () => {
    //     console.log('creating/updating fullname');        
    //     return `${first()} ${second()}
    // `}

    console.log('[2] creating reactions');        
    createEffect(() => {console.log(`my name is ${fullname()}`)})
    createEffect(() => {console.log(`your name is not ${fullname()}`)})

    console.log("[3] set new firstname")
    setfirst("jacob")

    return (
        <>
        
        </>
    )
}