import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './dgh.css?inline';

export const Dgh = component$(() => {
  useStylesScoped$(styles);

  return <>Dgh works!</>;
});
