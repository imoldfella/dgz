/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { LexicalComposer } from '@lexical/react'
 
// Create React component standard way
function Greetings() {
  return <>
    <LexicalComposer>
      </LexicalComposer>
      <p>Hello from React</p>
      </>
}
 
// Convert React component to Qwik component
export const QGreetings = qwikify$(Greetings);