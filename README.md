### Installation and version check :

npm i -g typescript
tsc -- version => gives you the current TypeScript version

### Configure the TypeScript Compiler :

tsc --init => Created a tsconfig.json with : ...

- "target": "ES2016", => Safest Version
- "rootDir": "./src", => Create a src Directory and make it the root folder
- "outDir": "./dist", => When we compile the code the JavaScript will be stored in dist / distributable folder

- "removeComments": true, => The Compiled Javascript will have no Comments for shorter and cleaner purposes
- "noEmitOnError": true, => When Error code will not be compiled to JavaScript
- "noUnusedLocals": true, => Enable error reporting when local variables aren't read.
- "noUnusedParameters": true, => Raise an error when a function parameter isn't read.
- "noImplicitReturns": true, => Enable error reporting for codepaths that do not explicitly return in a function.

### Compiling :

- Use tsc filename inside your terminal => example : tsc app.ts
- After Configuration you should use only tsc for compilation

### Debugging :

"sourceMap": true, => Source maps are files that represent the mapping between TypeScript and JavaScript code. They’re used for debugging
"preLaunchTask" : "tsc: build - tsconfig.json",

### About :
- Since TypeScript is a superset of JavaScript, it includes all the built-in types in JavaScript (eg number,string, boolean, object, etc) as well as additional types (eg any, unknown, never, enum, tuple, etc).
- Dynamically typed languages like JavaScript Python the type of variables is dynamic and can change between numbers and strings
- Tuples are fixed-length arrays where each element has a specific type. We often use them for representing two or three related values.
- In TypeScript, we set the type of our variables by annotating them
- Enums represent a list of related constants.

### TypeScript Benefits :

- Static Typing => for example you can declare an integer and it can only hold integers just like c++ or java
- Code completion
- Refactoring
- Shorthand notations

### TypeScript Drawbacks :

- Transpilation => it is always compiling to .js
- Simple applications you have to use javascript because Typescript might get on your way and it is made for larger projects

## Types in JavaScript : number , string , boolean , null , undefined , object

## Types in TypeScript : any , unknown , never , enum , tuple
