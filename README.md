# 이 연습용 프로젝트는 아래 리소스를 참조하여 제작되었음

- Learn With Jason - Let's Learn SolidJS 
    - https://www.youtube.com/watch?v=ZZ-a7B761Ds


- Creating a Signal from Scratch
    - https://frontendmasters.com/courses/reactivity-solidjs/creating-a-signal-from-scratch/

        
---

- advanced reactivity 
    - untrack (fn)
        - prevent reactive tracking
    - batch (fn)


---

# 공식 튜토리얼

- https://www.solidjs.com/tutorial/props_defaults

- props/default props 
    - 자식 컴포넌트에게 props를 넘겨주는 방법을 소개한다
    - 시그널을 props로 넘겨줄 때 시그널을 호출한 결과값을 넘겨주면 반응성을 추적할 수 있다
    - props의 디폴트값 설정은 mergeProps라는 함수에서 설정할 수 있다
    - mergeProps는 값이 없으면 값을 만드는 함수에 불과. 굳이 mergeProps 함수가 필요하지 않음.

- split props
    - solid.js는 시그널을 destructuring하는 문법이 허용되지 안음
    - 디스트럭처링 했을시에 반응성을 추적할 수 없음. 완전히 새로운 값이 생성되기 때문
    - 그래서 디스트럭처링 문법을 대신하여 splitProps를 사용해야 함
    - splitProps를 사용하면 여러개의 값을 하나의 변수로 묶을 수 있음
    - 교훈 : solid.js는 디스트럭처링을 하지 못하므로 표현력이 많이 줄어듦

- lifecycle
    - onmount
        - react.js의 useEffect는 라이프사이클과 effect를 모두 수행하도록 디자인되었음. 이것은 사용법의 혼란을 야기할 수 있음
        - solid는 createEffect와 onMount를 분리하였음. 매우 잘한 결정이라고 생각함
        - onMount가 존재하니 onUnmount도 존재할 거라는 유추가 가능함
        - onMount는 주로 fetch나 localStorage등의 이펙트를 수행할 때 사용됨. 공식 예제에서도 fetch를 수행함
        - 가장 보편적인 onMount의 패턴 : fetch이후 setSignal

---