/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    parseCreationOptionsFromJSON,
    create,
    get as getPasskey,
    parseRequestOptionsFromJSON,
} from "@github/webauthn-json/browser-ponyfill";
import { security } from "./crypto";

import { Login } from "../provider"
import { LoginApi, LoginInfo } from "./api"

// only instantiated on the client
export class ClientState {
    abort = new AbortController()
    error = ""

    constructor(public login: Login) {
    }

    get api() {
        if (!this.login.api) throw new Error("no api")
        return this.login.api
    }

    // we need to abort the wait before we can register a new key.
    async webauthnLogin(crox: any) { // id: string, not needed?
        this.abort.abort()
        const o = await getPasskey(crox)
        const reg = this.api.login2(o)
        return reg
        //setLogin(reg)
        // instead of navigate we need get the site first
        // then we can navigate in it. the site might tell us the first url

    }

        // when we set this up we need to start a promise to gather passkeys that are offered
    // This points out the case that we get a passkey that we don't know
    // in this case we still need to get the user name and password
    async watchPasskey() {
        try {
            const i = await login.client.initPasskey(login.api)
            if (i) {
                login.info = i
            }
            else console.log("passkey watch cancelled")
        }
        catch (e) {
            error.value = (e + "")
        }
    }
   // we might nag them here to add a second factor, or even require it.
    // if they send a password, but require a passkey, we need to trigger that
    // if they give a passkey, but we need a password anyway, we need to handle that.
    // we can't easily not advertise passkey, because don't know who will log in.
    const submitLogin = async (e: any) => {
        e.preventDefault()
        // we clicked submit, so not a passkey. We need to check the login and potentially ask for second factor
        //setScreen(Screen.Suspense)
        let [ch, err] = await props.api.loginpassword(user(), password())
        //await ws.rpcje<ChallengeNotify>("loginpassword", { username: user(), password: password() })
        console.log("loginpassword", ch, err)
        if (err) {
            setError(err)
            return
        }
        ch = ch!
        abortController.abort()
        // if the challenge type is 0 then we would ask for a second factor
        const typ = ch?.challenge_type ?? 0
        switch (typ) {
            case 0:
                // we are logged in, but we should ask for a second factor
                setScreen(Screen.AddKey)// we need to add a passkey
                setLoginInfo(ch?.login_info)
                break
            case Factor.kPasskey:
            case Factor.kPasskeyp:
                const li = await webauthnLogin()
                props.setLogin(li)
                break
            case Factor.kNone:
                // we must have login here, because if we didn't we would have gotten an error
                props.setLogin(ch.login_info!)
                break
            default:
                setScreen(Screen.Secret)
        }
    }
    // called when the user has confirmed the secret or has given up
    const confirmSecret = (ok: boolean) => {
        // either way we close the dialog
        if (ok) {
            setScreen(Screen.Login)
            if (!loginInfo()) {
                setError("challenge failed")
            } else {
                props.setLogin(loginInfo()!)
            }
        }
    }

    const onCloseAddKey = (choice: PasskeyChoice, err: string) => {
        console.log("closed passkey dialog")
        setScreen(Screen.Suspense)
        // we must have login info here, or we wouldn't be asking to add a passkey
        props.setLogin(loginInfo()!)
    }

    const validate = async (secret: string) => {
        // this must be a socket call
        const [log, e] = await props.api.loginpassword2(secret)
        // await ws.rpcje<LoginInfo>("loginpassword2", { challenge: secret })
        if (e) {
            setError(e)
            return false
        }
        setLoginInfo(log)
        return true
    }
    // returns null if the login is aborted
    async initPasskey(login: Login): Promise<LoginInfo | null> {
        if (!window.PublicKeyCredential
            // @ts-ignore
            || !PublicKeyCredential.isConditionalMediationAvailable
            // @ts-ignore
            || !await PublicKeyCredential.isConditionalMediationAvailable()
        ) {
            return null
        }
        this.abort.abort()
        this.abort = new AbortController()
        //const ws = createWs()
        const sec = security()

        // if we loop here, do we need to do first  part twice
        // this will return nil if the user is not registered?
        // that doesn't seem right
        {
            try {
                const o2 = await api.login(sec.deviceDid)
                // await ws.rpcj<any>("login", {
                //     device: sec.deviceDid,
                // })

                const cro = parseRequestOptionsFromJSON(o2)
                setCrox(cro)
                console.log("waiting for sign")
                const o = await get({
                    publicKey: cro.publicKey,
                    signal: abortController.signal,
                    // @ts-ignore
                    mediation: 'conditional'
                })
                console.log("got sign")
                if (abortController.signal.aborted) {
                    console.log("aborted")
                    return null
                }


                // token is not the socket challenge, it can be shared across tabs.
                // we need to get back the site store here, does it also keep a token?
                // we will eventually write the store into opfs
                // rejected if the key is not registered. loop back then to get another?
                //return await ws.rpcj<LoginInfo>("login2", o.toJSON())
            } catch (e: any) {
                // don't show error here, we probably just aborted the signal
                console.log("error", e)
            }
        }
        // instead of navigate we need get the site first
        // then we can navigate in it. the site might tell us the first url
        return null
    }

}