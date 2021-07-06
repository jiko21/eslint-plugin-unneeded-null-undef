# eslint-plugin-unneeded-null-or-undefined

`!== undefined`や`!==null`のような値の存在判定を簡略化する Lint rule

## How to use it

add plugin and rule to `.eslintrc`
```json
{
  "plugins": ["unneeded-null-undef"],
  "rules": {
    "unneeded-null-undef/unneededNullUndef": "error"
  }
}
```
