
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
export const H2 = component$<DivProps>((props) => {
  return <h2 class={`pt-4 text-2xl font-bold dark:text-white ${props.class}`}>
    <Slot/>
  </h2>
})

export const H3 = component$<DivProps>((props) => {
  return <h3 class={`pt-4 pb-2 text-xl font-bold dark:text-white ${props.class}`}><Slot/></h3>
})
