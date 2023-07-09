
// this needs to provide a way to connect to the go server with the login api

import { component$, useVisibleTask$, Slot } from "@builder.io/qwik"
import { LoginApi, useLogin } from "@dgz/ui-qwik"
import { Peer, WsChannel, apiCall } from "../abc"


export function loginApi(ch: Peer): LoginApi {
    return apiCall(ch,"loginpassword", "loginpassword2", "register", "registerb", "addpasskey", "addpasskey2", "login2", "login", "recover", "recover2")
}
// implement the login api for datagrove.
export const DgLogin = component$((props: {wss: string})=>{
    const ch = useLogin()
    useVisibleTask$(({track, cleanup}) => {
        const wss = new Peer(new WsChannel(props.wss))
        ch.api = loginApi(wss)
    })
    return <Slot/>
})