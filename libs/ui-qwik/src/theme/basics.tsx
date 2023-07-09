
import { Slot, component$ } from '@builder.io/qwik';
import { Link, LinkProps } from '@builder.io/qwik-city'
import { JSX } from '@builder.io/qwik/jsx-runtime';
export function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// creates a Blue link that respects the router and the language
export const Ab = component$((props: LinkProps) => {
    return <Link {...props} class={`no-underline dark:text-blue-400 text-blue-700 hover:text-blue-500 hover:underline ${props.class}`}>
        <Slot/>
    </Link>
})

type DivProps = JSX.IntrinsicElements['div']
export const Center = component$((props: DivProps)=> {
    return <div class="grid place-items-center h-screen">
        <div {...props} class='w-96'>
            <Slot/>
        </div></div>
})



