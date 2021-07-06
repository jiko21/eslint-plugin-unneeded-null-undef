import { TSESLint } from '@typescript-eslint/experimental-utils'
import { unneededNullUndef } from '../../src/rules/unneeded-null'

const ruleName = 'unneeded-null-undef'
const tester = new TSESLint.RuleTester({
  parser: require.resolve('espree'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
})

describe('test', () => {
  tester.run(ruleName, unneededNullUndef, {
    valid: [{ code: 'const a = undefined' }, { code: 'const a = null' }, { code: 'null' }, { code: 'undefined' }],
    invalid: [
      {
        code: 'a !== undefined',
        errors: [{ messageId: 'unneededNullUndef' }],
        output: 'a'
      },
      {
        code: 'a !== null',
        errors: [{ messageId: 'unneededNullUndef' }],
        output: 'a'
      },
      {
        code: 'a != undefined',
        errors: [{ messageId: 'unneededNullUndef' }],
        output: 'a'
      },
      {
        code: 'a != null',
        errors: [{ messageId: 'unneededNullUndef' }],
        output: 'a'
      }
    ]
  })
})
