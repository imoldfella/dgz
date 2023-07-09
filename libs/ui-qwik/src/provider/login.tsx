import { type Signal, component$, useSignal, Slot, useStore } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import {  LoginInfo } from '../login/api';
import { ClientState } from '../login/passkey';
import { useNavigate } from '@builder.io/qwik-city';

export interface Login {
    info?: LoginInfo
    alt?: LoginInfo[]
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




// logout is tricky, we can't get the context from an event handler can we?
// log out of all tabs
export const useLogout = () => {
  const navigate = useNavigate()
  return () => {
    sessionStorage.removeItem('token');
    navigate('/');
  }
}
