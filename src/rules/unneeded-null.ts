import { TSESLint } from '@typescript-eslint/experimental-utils'
import { ieNotEqEqOrNotEqEqEq, isNull, isUndef } from '../util'

export const unneededNullUndef: TSESLint.RuleModule<'unneededNullUndef', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Possible Errors',
      description: 'Check unneeded non-null or non-undef check',
      recommended: 'error',
      url: ''
    },
    messages: {
      unneededNullUndef: 'Remove unnecessary null or undef'
    },
    schema: [],
    fixable: 'code'
  },
  create: (context) => {
    return {
      BinaryExpression: (node) => {
        const op = node.operator
        const right = node.right
        if (ieNotEqEqOrNotEqEqEq(op) && (isNull(right) || isUndef(right))) {
          context.report({
            node,
            messageId: 'unneededNullUndef',
            fix(fixer) {
              return fixer.removeRange([node.left.range[1], node.right.range[1]])
            }
          })
        }
      }
    }
  }
}
