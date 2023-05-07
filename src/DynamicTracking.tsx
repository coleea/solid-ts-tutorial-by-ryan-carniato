// frontendmasters 강의 중 derivations 파트

import { createEffect, createMemo, createSignal } from "solid-js";

export function DynamicTracking() {
    
    const [first, setfirst]  = createSignal("john")
    const [second, setsecond]  = createSignal("smith")
    const [showfullname, setshowfullname]  = createSignal(true)

    const fullname = createMemo(() => {
        console.log('createMemo is triggered');        
        if(!showfullname()) return first()
        return `${first()} ${second()}`
    }) 

    createEffect(() => {console.log(`my name is ${fullname()}`)})

    console.log('[2] set showFullname : false');
    setshowfullname(false)
    
    console.log('[3] change lastname');
    setsecond("Legend")

    console.log('[4] set showFullname : false');
    setshowfullname(true)

    return (
        <>
        
        </>
    )
}