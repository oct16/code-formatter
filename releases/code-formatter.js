/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./packages/formatter/index.ts */ \"./src/packages/formatter/index.ts\");\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/packages/formatter/args.ts":
/*!****************************************!*\
  !*** ./src/packages/formatter/args.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst yargs_1 = __importDefault(__webpack_require__(/*! yargs */ \"yargs\"));\nconst table_1 = __webpack_require__(/*! ./table */ \"./src/packages/formatter/table.ts\");\nexports.FILE_TYPES = ['ts', 'js', 'all'];\nconst CHANGE_TYPES = ['cached', 'all'];\nconst options = yargs_1.default\n    .option({\n    file_type: {\n        describe: 'Specify the file type',\n        demandOption: true,\n        default: exports.FILE_TYPES[0]\n    }\n})\n    .choices('file_type', exports.FILE_TYPES)\n    .option({\n    change_type: {\n        describe: 'Specify the change type',\n        demandOption: true,\n        default: CHANGE_TYPES[1]\n    }\n})\n    .choices('change_type', CHANGE_TYPES)\n    .option({\n    path: {\n        describe: 'Specify the path for the files include',\n        demandOption: true,\n        default: 'src'\n    }\n})\n    .option({\n    exclude: {\n        describe: 'Specify the path for the files exclude',\n        demandOption: true,\n        default: 'node_modules'\n    }\n})\n    .help().argv;\nconst { $0, _, ...args } = options;\nconst tableData = Object.entries(args).reduce((acc, cur) => {\n    acc.body.push(cur);\n    return acc;\n}, {\n    head: ['name', 'value'],\n    body: []\n});\nconst { head, body } = tableData;\nconst tResult = table_1.createCliTable(head, body);\nfunction getArgs() {\n    return {\n        args: args,\n        table: tResult\n    };\n}\nexports.default = getArgs;\n\n\n//# sourceURL=webpack:///./src/packages/formatter/args.ts?");

/***/ }),

/***/ "./src/packages/formatter/files.ts":
/*!*****************************************!*\
  !*** ./src/packages/formatter/files.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst child = __importStar(__webpack_require__(/*! child_process */ \"child_process\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst args_1 = __webpack_require__(/*! ./args */ \"./src/packages/formatter/args.ts\");\nconst { exec } = child;\nfunction getFiles(args) {\n    return new Promise(resolve => {\n        const { file_type, change_type, path: argPath, exclude } = args;\n        if (change_type === 'cached') {\n            exec('git diff --name-only --cached', (error, stdout, stderr) => {\n                if (error) {\n                    throw new Error(error.message);\n                }\n                const files = stdout\n                    .split('\\n')\n                    .filter(Boolean)\n                    .map(itemPath => {\n                    const fullPath = path_1.default.join(process.cwd(), itemPath);\n                    return fullPath;\n                });\n                resolve(filterByFileType(files, file_type));\n            });\n        }\n        else {\n            const rootDir = process.cwd();\n            const findByExcludeSyntax = exclude ? `! -path \"${path_1.default.join(rootDir, exclude)}/*\"` : '';\n            const findFileMatches = file_type === 'all' ? '' : `-name '*.${file_type}'`;\n            const findPath = argPath ? (argPath.startsWith('/') ? argPath : `/${argPath}`) : '';\n            const findSyntax = `find ${rootDir}${findPath} -type f ${findByExcludeSyntax} ${findFileMatches}`;\n            exec(findSyntax, (error, stdout, stderr) => {\n                const files = stdout.split('\\n').filter(Boolean);\n                resolve(filterByFileType(files, file_type));\n            });\n        }\n    });\n}\nexports.getFiles = getFiles;\nfunction filterByFileType(files, fileType) {\n    return files.filter(fullPath => {\n        if (fileType !== 'all') {\n            return fullPath.endsWith(fileType);\n        }\n        return args_1.FILE_TYPES.slice(0, args_1.FILE_TYPES.length - 1).some(type => fullPath.endsWith(type));\n    });\n}\n\n\n//# sourceURL=webpack:///./src/packages/formatter/files.ts?");

/***/ }),

/***/ "./src/packages/formatter/index.ts":
/*!*****************************************!*\
  !*** ./src/packages/formatter/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"chalk\"));\nconst ora_1 = __importDefault(__webpack_require__(/*! ora */ \"ora\"));\nconst args_1 = __importDefault(__webpack_require__(/*! ./args */ \"./src/packages/formatter/args.ts\"));\nconst files_1 = __webpack_require__(/*! ./files */ \"./src/packages/formatter/files.ts\");\nconst prettier_1 = __webpack_require__(/*! ./prettier */ \"./src/packages/formatter/prettier.ts\");\nconst bootstrap = async () => {\n    const spinner = ora_1.default(chalk_1.default.cyan('Use Script Options:')).start();\n    spinner.succeed();\n    const { args, table } = args_1.default();\n    console.log(table);\n    await files_1.getFiles(args).then(prettier_1.formatWithPrettier);\n};\nbootstrap();\n\n\n//# sourceURL=webpack:///./src/packages/formatter/index.ts?");

/***/ }),

/***/ "./src/packages/formatter/options.ts":
/*!*******************************************!*\
  !*** ./src/packages/formatter/options.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst prettier_1 = __importDefault(__webpack_require__(/*! prettier */ \"prettier\"));\nexports.getPrettierOptions = () => {\n    const prettierOptions = prettier_1.default.resolveConfig.sync(path_1.default.resolve(process.cwd(), '.prettierrc'));\n    return prettierOptions;\n};\n\n\n//# sourceURL=webpack:///./src/packages/formatter/options.ts?");

/***/ }),

/***/ "./src/packages/formatter/prettier.ts":
/*!********************************************!*\
  !*** ./src/packages/formatter/prettier.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"chalk\"));\n// @ts-ignore\nconst cli_progress_1 = __importDefault(__webpack_require__(/*! cli-progress */ \"cli-progress\"));\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst ora_1 = __importDefault(__webpack_require__(/*! ora */ \"ora\"));\nconst prettier_1 = __importDefault(__webpack_require__(/*! prettier */ \"prettier\"));\nconst options_1 = __webpack_require__(/*! ./options */ \"./src/packages/formatter/options.ts\");\nconst prettierOptions = options_1.getPrettierOptions();\nasync function formatWithPrettier(files) {\n    await executePrettier(await checkFilesIfDiff(files));\n}\nexports.formatWithPrettier = formatWithPrettier;\nasync function executePrettier(files) {\n    const count = files.length;\n    const bar = new cli_progress_1.default.SingleBar({\n        format: chalk_1.default.cyan('|{bar}| {percentage}% | {value}/{total}'),\n        hideCursor: true,\n        clearOnComplete: true\n    }, cli_progress_1.default.Presets.rect);\n    if (count > 0) {\n        bar.start(count, 0);\n        let pTask = Promise.resolve();\n        const ease = () => new Promise(r => setTimeout(() => r(), 20));\n        files.forEach(filePath => {\n            pTask = pTask.then(async () => {\n                await format(filePath, prettierOptions);\n                await ease();\n                bar.increment();\n            });\n        });\n        await pTask;\n        bar.stop();\n        ora_1.default(`Success! Formatted ${count} files`).succeed();\n    }\n    else {\n        ora_1.default('No files needs to be update').warn();\n    }\n}\nasync function checkFilesIfDiff(files) {\n    const spinner = ora_1.default('Analyzing files...').start();\n    await new Promise(r => setTimeout(() => r(), 1000));\n    spinner.succeed(`Found ${files.length} files`);\n    const bar = new cli_progress_1.default.SingleBar({\n        format: chalk_1.default.cyan('|{bar}| {percentage}% | {value}/{total}'),\n        hideCursor: true,\n        clearOnComplete: true\n    }, cli_progress_1.default.Presets.rect);\n    bar.start(files.length, 0);\n    if (!prettierOptions) {\n        throw new Error('Do not find a prettierc config file');\n    }\n    const ease = () => Promise.resolve();\n    const checkedFiles = [];\n    for (const filePath of await Promise.resolve(files)) {\n        await ease();\n        const formatted = checkFileIsFormatted(filePath, prettierOptions);\n        bar.increment();\n        if (!formatted) {\n            checkedFiles.push(filePath);\n        }\n    }\n    bar.stop();\n    spinner.succeed('Analyzed files');\n    process.stdout.write('\\r\\x1b[K');\n    return checkedFiles;\n}\nfunction checkFileIsFormatted(filePath, options) {\n    const file = fs_1.default.readFileSync(filePath, 'utf8');\n    try {\n        const isFormated = prettier_1.default.check(file, options);\n        return isFormated;\n    }\n    catch (error) {\n        console.log(chalk_1.default.bgRed(filePath));\n        console.log(chalk_1.default.bgRed(error));\n        process.exit(1);\n    }\n}\nexports.checkFileIsFormatted = checkFileIsFormatted;\nfunction format(filePath, options) {\n    const file = fs_1.default.readFileSync(filePath, 'utf8');\n    const formated = prettier_1.default.format(file, options);\n    fs_1.default.writeFileSync(filePath, formated);\n    return Promise.resolve();\n}\n\n\n//# sourceURL=webpack:///./src/packages/formatter/prettier.ts?");

/***/ }),

/***/ "./src/packages/formatter/table.ts":
/*!*****************************************!*\
  !*** ./src/packages/formatter/table.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst chalk_1 = __importDefault(__webpack_require__(/*! chalk */ \"chalk\"));\n// @ts-ignore\nconst cli_table2_1 = __importDefault(__webpack_require__(/*! cli-table2 */ \"cli-table2\"));\nfunction createCliTable(head, body) {\n    const table = new cli_table2_1.default({\n        head: head.map(val => chalk_1.default.cyan(val))\n    });\n    table.push(...body);\n    return table.toString();\n}\nexports.createCliTable = createCliTable;\n\n\n//# sourceURL=webpack:///./src/packages/formatter/table.ts?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "cli-progress":
/*!*******************************!*\
  !*** external "cli-progress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cli-progress\");\n\n//# sourceURL=webpack:///external_%22cli-progress%22?");

/***/ }),

/***/ "cli-table2":
/*!*****************************!*\
  !*** external "cli-table2" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cli-table2\");\n\n//# sourceURL=webpack:///external_%22cli-table2%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "ora":
/*!**********************!*\
  !*** external "ora" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ora\");\n\n//# sourceURL=webpack:///external_%22ora%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prettier":
/*!***************************!*\
  !*** external "prettier" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prettier\");\n\n//# sourceURL=webpack:///external_%22prettier%22?");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yargs\");\n\n//# sourceURL=webpack:///external_%22yargs%22?");

/***/ })

/******/ });