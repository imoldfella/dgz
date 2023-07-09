import { type Signal, component$, useSignal, Slot, useStore } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
 
export interface Language {
  ln: string
  lc: string
  dir: 'ltr'|'rtl'|'auto'
  avail: string[]
}
export const LanguageContext = createContextId<Language>(
  'docs.theme-context'
);
 
export const LanguageProvider =  component$(() => {
  const lang = useStore<Language>({
    ln: 'en',
    lc: 'en-us',
    dir: 'ltr',
    avail: ['en', 'es', 'iw'],
  })
  useContextProvider(LanguageContext, lang);
  return (
    <>
      <Slot />
    </>
  );
});

export const useLanguage = () => useContext(LanguageContext);
 
