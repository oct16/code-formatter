## Code Formatter

#### A code automatically formatting tool

![Preview](screen-recording.gif)


#### Install
```
$ yarn add @oct16/code-formatter
$ npm install @oct16/code-formatter
```


#### Feature

- Simple, Robust and Easy to use
- Custom RC formatters (via e.g. prettierrc)
- Supports a variety of type formatting


#### Usage

```
// In root dir (Directory of rc files)

$ code-formatter

// installed in local
$ npx code-formatter
```

#### Options

`--file_type`
describe: Specify the file type   
default: `ts`   
choices: `ts` `js` `all`

`--change_type`
describe: Specify the change type   
default: `all`   
choices: `cached` `all`

`--path`
describe: Specify the path for the files include   
default: `src`

`--exclude`  
describe: Specify the path for the files exclude   
default: `node_modules`


