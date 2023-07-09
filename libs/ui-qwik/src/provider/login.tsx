import { type Signal, component$, useSignal, Slot, useStore } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import { LoginApi, LoginInfo } from '../login/api';
import { ClientState } from '../login';
 
export interface Login {
    info?: LoginInfo
    api?: LoginApi 
    client?: ClientState
}
// this is initalized by loading the login page.


export const LoginContext = createContextId<Login>(
  'docs.login-context'
);

export const LoginProvider =  component$(() => {
    const login = useStore<Login>({});
    useContextProvider(LoginContext, login);
    return <Slot />
    })
    
export const useLogin = () => useContext(LoginContext);




