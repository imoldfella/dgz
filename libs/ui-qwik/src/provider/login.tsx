import { type Signal, component$, useSignal, Slot, useStore } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
 
export interface Login {
    name: string;
}
export const LoginContext = createContextId<Login>(
  'docs.theme-context'
);

export const LoginProvider =  component$(() => {
    const login = useStore<Login>({
        name: ''});
    useContextProvider(LoginContext, login);
    return <Slot />
    })
    
export const useLogin = () => useContext(LoginContext);

