import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './editor.css?inline';
import { QGreetings } from './react';

export const Editor = component$(() => {
  useStylesScoped$(styles);

  return <QGreetings/>;
});
