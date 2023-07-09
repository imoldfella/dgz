import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Dgh } from './dgh';

test(`[Dgh Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Dgh />);
  expect(screen.innerHTML).toContain('Dgh works!');
});
