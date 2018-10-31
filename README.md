# styled-jsx-bug

Reproduction steps for styled-jsx issue

## Issue

After upgrading to Babel 7 (via `[babel-upgrade](https://github.com/babel/babel-upgrade)`), imported constants used in styled-jsx template string are undefined in jest.

To reproduce, run:

```
npm i && npm test
```

Jest will throw the following error:

> ReferenceError: color is not defined
