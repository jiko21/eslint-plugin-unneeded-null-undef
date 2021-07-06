import { unneededNullUndef } from './rules/unneeded-null'

export = {
  rules: {
    unneededNullUndef: unneededNullUndef
  },
  configs: {
    all: {
      plugins: ['unneeded-null-undef'],
      rules: {
        'unneeded-null-undef': 'error'
      }
    }
  }
}
