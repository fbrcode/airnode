import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import * as validator from '../src/validator';

const cases = {
  basic: [
    ['basic valid', 'valid-specs', 'valid-template', 'valid-out'],
    ['basic invalid', 'invalid-specs', 'valid-template', 'invalid-out'],
    ['object valid', 'obj-valid-specs', 'obj-template', 'valid-out'],
    ['object invalid', 'obj-invalid-specs', 'obj-template', 'obj-invalid-out'],
    ['array valid', 'array-valid-specs', 'array-template', 'valid-out'],
    ['array invalid', 'array-invalid-specs', 'array-template', 'array-invalid-out'],
  ],
};

let category: keyof typeof cases;
for (category in cases) {
  describe(category, () => {
    for (const c of cases[category]) {
      const path = resolve(join(__dirname, 'fixtures', category));
      const result = validator.validate(join(path, `${c[1]}.json`), join(path, `${c[2]}.json`));
      const expected = JSON.parse(readFileSync(join(path, `${c[3]}.json`), 'utf8'));
      it(c[0], () => expect(result).toEqual(expected));
    }
  });
}
