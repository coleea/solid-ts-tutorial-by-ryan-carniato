// react의 문제 :배열의 특정 요소만 변경하는 상황을 가정해 보자
// setState를 호출하여 배열을 카피한 뒤에 특정 프로퍼티만 변경한다
// 즉 배열 전체를 카피하는 오버헤드가 발생한다
// solid.js의 fine-granied reactivity 철학은 이것에 위배된다
// 만일 배열 전체를 카피할 필요 없이 특정 엘리먼트만 변경할 수 있다면 좋을것이다
// 더 나아가서 특정 엘리먼트의 특정 프로퍼티만 변경할 수 있다면 더욱 좋을것이다
// 이것은 signal을 이용하면 매우 간단하게 실현할 수 있음
// 즉 모든 엘리먼트의 모든 프로퍼티가 signal로 이루어저 있다면 배열을 변경할 때 배열 전체를 카피할 필요가 없음
// 결론 : 변경할 개별적인 요소를 signal로 만들면 컴퓨팅을 최소한으로 줄일 수 있음

import { For, createSignal } from "solid-js";

export const StoreTest = () => {

    const [todos, setTodos] = createSignal([])
    let input;
    let todoId = 0;

    const addTodo = (text) => {
        const [completed, setcompleted] = createSignal(false)
        setTodos([...todos(), { id: ++todoId, text, completed: completed, setcompleted }]);
    }
    const toggleTodo = (id) => {
        const found = todos().find((v,i) => id === v.id)
        if(found) {
            found && found.setcompleted(prev => !prev)
            console.log('찾음');
            
        } else {
            console.log('못찾음');

        }
        // setTodos(todos().map((todo) => (
        //     todo.id !== id ? todo : { ...todo, completed: !todo.completed }
        // )));
    }

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`)
          return <div>
            <input
              type="checkbox"
              checked={todo.completed()}
              onchange={[toggleTodo, id]}
            />
            <div class="">완료여부 :{JSON.stringify (todo.completed())}</div>
            <span
              style={{ "text-decoration": todo.completed() ? "line-through" : "none"}}
            >{text}</span>
          </div>
        }}
      </For>
    </>
  );
};

