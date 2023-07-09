import { type Signal, component$, useSignal, Slot, useStore, JSXChildren } from '@builder.io/qwik';
import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
 
export interface Language {
  ln: string
  lc: string
  dir: 'ltr'|'rtl'|'auto'
  avail: string[]
}
export const LanguageContext = createContextId<Language>(
  'docs.theme-context'
);

const rtl = ["iw","ar"]
 
export interface Props {
  avail: string[]
  default: string
  defaultlc?: string
}
export const LanguageProvider =  component$((props: Props) => {
  const loc = useLocation()
  let ln = loc.url.pathname.split('/')[1]
  if (!props.avail.includes(ln)) {
    ln = props.default
  }
  const lang = useStore<Language>({
    ln: ln,
    lc: props.defaultlc ?? props.default,
    dir: rtl.includes(props.default) ? 'rtl' : 'ltr',
    avail: props.avail,
  })
  useContextProvider(LanguageContext, lang);
  return <Slot />
});

export const useLanguage = () => useContext(LanguageContext);
 
