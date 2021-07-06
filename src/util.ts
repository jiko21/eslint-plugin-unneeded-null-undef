import { TSESTree } from '@typescript-eslint/experimental-utils'

export const ieNotEqEqOrNotEqEqEq = (op: string): boolean => {
  return op === '!=' || op === '!=='
}

export const isNull = (exp: TSESTree.Expression): boolean => {
  return exp.type === 'Literal' && exp.raw === 'null'
}

export const isUndef = (exp: TSESTree.Expression): boolean => {
  return exp.type === 'Identifier' && exp.name === 'undefined'
}
