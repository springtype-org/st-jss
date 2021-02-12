import { Selector } from 'testcafe';

// eslint-disable-next-line
fixture`Smoke test`.page`http://localhost:1234/`;

test('Shows the HomePage when user navigates to path /', async (t) => {
  await t.wait(20);
});
