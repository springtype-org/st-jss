const json = require('mdn-data/css/properties.json')
const fs = require('fs');
const path = require('path');

const result = ['/* this code is generated */',
  'export const cssLengthRawKeys: { [cssProperty: string]: boolean } = {'
];
Object.entries(json).filter(([key, value]) => !key.startsWith('-') && value.syntax.indexOf('<length>') > -1)
  .forEach(([key, value]) => {
    result.push(`  // syntax: ${value.syntax.trim()}`)
    if (key.indexOf('-') > -1) {
      result.push(`  '${key}': true,`)
    } else {
      result.push(`  ${key}: true,`)
    }
  });
result.push('};\n');

fs.writeFileSync(path.join(__dirname, 'src', 'cssLengthRawKeys.ts'), result.join('\n'))

