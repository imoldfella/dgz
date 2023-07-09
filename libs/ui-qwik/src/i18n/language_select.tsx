import { component$ } from "@builder.io/qwik";


// this has to work with the router(s)
// unclear if we should use the list of languages from a context or require it to be passed as a prop. 
export const LanguageSelect = component$((props: {language: string[]}) => {
    return <>
        <div>Language Select</div>
    </>

})