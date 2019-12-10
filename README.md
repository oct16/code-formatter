## Code Formatter ![](https://travis-ci.org/oct16/code-formatter.svg?branch=master)

### A code automatically formatting tool

![Preview](screen-recording.gif)


### Install
```bash
$ yarn add @oct16/code-formatter
$ npm install @oct16/code-formatter
```


### Feature

- Simple, Robust and Easy to use
- Custom RC formatters (via e.g. prettierrc)
- Supports a variety of type formatting


### Usage

```bash
// In root dir (Directory of rc files)

$ code-formatter

// installed in local
$ npx code-formatter
```

### Options

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


### License

MIT License

Copyright (c) 2019 oct16

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
