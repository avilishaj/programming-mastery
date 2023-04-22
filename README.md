### Installation and version check :

- Install TypeScript : npm i -g typescript
- Get TypeScript version : tsc --version

### Configure the TypeScript Compiler :

- Create a config file : tsc --init

### Toggle true in configuration file :

- "target": "ES2016", => Safest Version
- "rootDir": "./src", => Create a src Directory and make it the root folder
- "outDir": "./dist", => When we compile the code the JavaScript will be stored in dist / distributable folder
- "removeComments": true, => The Compiled Javascript will have no Comments for shorter and cleaner purposes
- "noEmitOnError": true, => When Error code will not be compiled to JavaScript
- "noUnusedLocals": true, => Enable error reporting when local variables aren't read.
- "noUnusedParameters": true, => Raise an error when a function parameter isn't read.
- "noImplicitReturns": true, => Enable error reporting for codepaths that do not explicitly return in a function.
- "allowUnreachableCode": false, => Disable error reporting for unreachable code.
- "strictNullChecks": true, => When type checking, take into account 'null' and 'undefined'.

### Compiling :

- Before Configuration : tsc app.ts
- After Configuration : tsc

### Debugging :

- Create a sourceMap by toggling the sourceMap option true in the configuration file
- Use : "preLaunchTask" : "tsc: build - tsconfig.json",

### About :

- Since TypeScript is a superset of JavaScript, it includes all the built-in types in JavaScript (eg number,string, boolean, object, etc) as well as additional types (eg any, unknown, never, enum, tuple, etc).
- Dynamically typed languages like JavaScript Python the type of variables is dynamic and can change between numbers and strings
- In TypeScript, we set the type of our variables by annotating them

### TypeScript Benefits :

- Static Typing => for example you can declare an integer and it can only hold integers just like c++ or java
- Code completion
- Refactoring
- Shorthand notations

### TypeScript Drawbacks :

- Transpilation => it is always compiling to .js
- Simple applications you have to use javascript because Typescript might get on your way and it is made for larger projects

### Types in JavaScript : number , string , boolean , null , undefined , object

### Types in TypeScript : any , unknown , never , enum , tuple
