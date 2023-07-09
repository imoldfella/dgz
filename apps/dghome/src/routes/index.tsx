import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Onboard } from '@dgz/dgh'

export default component$(() => {
  return  <Onboard/>
});

export const head: DocumentHead = {
  title: 'Datagrove',
  meta: [
    {
      name: 'Fearless sharing',
      content: 'Datagrove',
    },
  ],
};
