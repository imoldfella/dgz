export * from './onboard'
import { SimplePage } from "./simple_page";


export const Onboard = component$(() => {
    return <SimplePage>
        <SimpleSignin/>
    </SimplePage>
})


