import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Editor } from './editor';

test(`[Editor Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Editor />);
  expect(screen.innerHTML).toContain('Editor works!');
});
