# ESLint config for Inline Manual

## How to add to project

Add module `@inlinemanual/eslint-config` as a dev dependency to your project:

```
npm install @inlinemanual/eslint-config --save
```

Then [extend your ESLint config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) with `@inlinemanual`. For example, if you use `.eslintrc.json`, it could look like this:

```json
{
    "extends": "@inlinemanual"
}
```

## Different linting for development and build

The rules in this config use `warn` instead of `error`. This allows you to bash out ugly code while developing, but it will force you to clean it up before you do the build. Here's what you should do:

Create two linter tasks in your project. One for regular development (e.g. `eslint`) and one for build (e.g. `eslint:build`):

```json
{
  "scripts": {
      "eslint": "eslint ./src/**/*.js",
      "eslint:build": "npm run eslint -- --max-warnings 0"
  }
}
```

This way you can use the regular lint task while developing (e.g. as a part of your test watcher task) and it will allow you to do all kinds of stuff (e.g. using `console.log`), but then you should use the build lint task when building (e.g. as a part of `preversion` task) and it will prevent you to create a build that contains debug or mis-formatted code.