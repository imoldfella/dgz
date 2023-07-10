
// this needs to provide a way to connect to the go server with the login api

import { component$, useVisibleTask$, Slot } from "@builder.io/qwik"
import { H2, LoginApi, SimpleLogin, SimplePage, useLogin } from "@dgz/ui-qwik"
// import { Peer, WsChannel, apiCall } from "../abc"


// export function loginApi(ch: Peer): LoginApi {
//     return apiCall(ch,"loginpassword", "loginpassword2", "register", "registerb", "addpasskey", "addpasskey2", "login2", "login", "recover", "recover2")
// }
// implement the login api for datagrove.
export const Signin = component$(()=>{
    const ch = useLogin()
    useVisibleTask$(({track, cleanup}) => {
        //const wss = new Peer(new WsChannel("/ws"))
        //ch.api = loginApi(wss)
    })
    return <SimplePage>
        <H2>Sign in</H2>
        <SimpleLogin/>
        </SimplePage>
})