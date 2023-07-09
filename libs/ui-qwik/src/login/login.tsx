
// interface LoginProps2 extends LoginProps {
//     finishLogin: (i: LoginInfo) => void

import { useNavigate } from "@builder.io/qwik-city"
import { useLanguage, useLogin } from "../provider"
import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik"
import { Ab } from "../theme"
import { ClientState } from "./passkey"
import { LoginInfo } from "./api"

// abort controllers are not serializable :(
// we can 

// }
enum Screen {
    Login,
    Secret,
    AddKey,
    Suspense
}

// we might go to a different route depending on who the user is and what their state is. how do we pass this kind of call back? Or maybe we don't need it, maybe we just to a /logged in route and redirect from there?

const LoginForm = component$(() => {

    return <div>Login</div>
})
const GetSecret = component$(() => {
    return <div>Login</div>
})

const AddPasskey = component$(() => {
    return <div>Login</div>
})

interface Props {
    onInput: (e: LoginInfo) => void 
}

export const SimpleLogin = component$((props: Props) => {
    const login = useLogin()
    // const ln = useLanguage()
    // const nav = useNavigate()
    // const error = useSignal<string | undefined>(undefined)
    const screen = useSignal<Screen>(Screen.Login)
    const st = useSignal<ClientState | undefined>(undefined)
    
    // const [loginInfo, setLoginInfo] = createSignal<LoginInfo | undefined>(undefined)

    useVisibleTask$(({ track, cleanup }) => {
        st.value = new ClientState(login.value)
        // login.client = new ClientState(login.value)
        
        // cleanup(() => {
        //     login.client?.abort.abort()
        // })
    })
    return <>
        { screen.value==Screen.Login && <LoginForm/> }
        { screen.value==Screen.Secret && <GetSecret/> }
        { screen.value==Screen.AddKey && <AddPasskey/> }
        { screen.value==Screen.Suspense && <div>loading...</div> }
    </>
})

/*
 
    return <div>
 
        <Match when={ screen() == Screen.AddKey }> <AddPasskey onClose={ onCloseAddKey } /></Match >
            <Match when={ screen() == Screen.Secret }> <GetSecret validate={ validate } onClose = { confirmSecret } /> </Match>
                < Match when = { screen() == Screen.Suspense
}>

        < pre class='hidden' > { JSON.stringify(loginInfo(), null, 2) } < /pre>
            < /Match>
            < Match when = { screen() == Screen.Login}>
                <form method='post' class='space-y-6' onSubmit = { submitLogin } >
                    <Show when={ error() }> <div>{ error() } < /div></Show >
                        <Username autofocus onInput = {(e: string) => setUser(e)} />
                            < Password onInput = {(e: string) => setPassword(e)} />
                                <BlueButton> { ln().signin } < /BlueButton>
                                <TextDivider> { ln().continueWith } < /TextDivider>
                                < LoginWith />
                                </form>
                                < div class="hidden mt-4" > <Spc />
                                    < Ab href = '../register' > { ln().ifnew } < /Ab>
                                        < Spc /> </div>
                                        < /Match>
                                        < /Switch>

                                        < /div>
}

*/


