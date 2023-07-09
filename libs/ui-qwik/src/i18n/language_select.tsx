import { component$ } from "@builder.io/qwik";
import { Language, useLanguage } from "../provider";
import { useNavigate } from "@builder.io/qwik-city";
import { JSX } from "@builder.io/qwik/jsx-runtime";

type LanguageMap = {
    [key: string]: { name: string, dir: 'ltr' | 'rtl' | 'auto' }
}
const languages : LanguageMap = {
    en: {
        name: 'English',
        dir: 'ltr',
    }
}



// this has to work with the router(s)
// unclear if we should use the list of languages from a context or require it to be passed as a prop. 
type SelectProps = JSX.IntrinsicElements['select'] 
export const LanguageSelect = component$((props: SelectProps) => {
    const nav = useNavigate()
    const ln = useLanguage()
   return (<div class='flex  text-black dark:text-white rounded-md items-center '>
    <label class='block mx-2' for='ln'>{props.children}</label>
    <select
        id='ln'
        value={ln.ln}
        aria-label= {$localize`Select language`}

        onInput$={(e, target) => {
            const newLang = target.value
            
        }}
        {...props}
    >
        {ln.avail.map((lnx) => {
            const lnd = languages[lnx]
            return <option key={lnx} value={lnx}>{lnd.name}&nbsp;</option>
        })}
    </select>
</div>
)

})


/*
    const nav = useNavigate()
    const ln = useLn()

    // change the language has to change the route. It doesn't change the store
    const update = (e: string) => {
        const p = window.location.pathname.split('/')
        p[1] = e
        nav(p.join('/'))
    }

    return (<Select entries={allLn} value={ln().ln} onChange={update}>
        <Icon class='h-6 w-6' path={language} /></Select>)

        */