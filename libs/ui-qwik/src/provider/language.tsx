import { type Signal, component$, useSignal, Slot } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
 
export const LanguageContext = createContextId<Signal<string>>(
  'docs.theme-context'
);
 
export const LanguageProvider =  component$(() => {
  const theme = useSignal('dark');
  useContextProvider(LanguageContext, theme);
  return (
    <>
      <Slot />
    </>
  );
});

export const useLanguage = () => useContext(LanguageContext);
 
