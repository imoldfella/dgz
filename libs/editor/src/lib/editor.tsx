import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './editor.css?inline';
import { qwikify$ } from '@builder.io/qwik-react';
import { QGreetings } from './react';


export const Editor = component$(() => {
  useStylesScoped$(styles);

  return <QGreetings/>;
});
