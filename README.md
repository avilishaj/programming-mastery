### Installation and version check :

npm i -g typescript
tsc -- version => gives you the current TypeScript version

### Configure the TypeScript Compiler : 

tsc --init   => Created a tsconfig.json with : ... 
 - "target": "ES2016", => Safest Version 
 - "rootDir": "./src", => Create a src Directory and make it the root folder 
 - "outDir": "./dist", => When we compilt the code the JavaScript will be stored in dist or distributable folder
 - "removeComments": true, => The Compiled Javascript will have no Comments for shorter and cleaner purposes
 - "noEmitOnError": true, => When Error code will not be compiled to JavaScript 


### Compiling : 

- Use tsc filename inside your terminal =>  example : tsc app.ts
- After Configuration you should use only tsc for compilation 


### Debugging : 
"sourceMap": true, => creates a map file that specifies how the typescript maps our javascript code   // it is for machines 
 "preLaunchTask" : "tsc: build - tsconfig.json", 

### About :
- Dynamically typed languages like JavaScript Python the type of variables is dynamic and can change between numbers and strings
- Typescript Compiler uses ES5 

### TypeScript Benefits :

- Static Typing => for example you can declare an integer and it can only hold integers just like c++ or java
- Code completion
- Refactoring
- Shorthand notations

### TypeScript Drawbacks :

- Transpilation => it is always compilint to .js
- Simple applications you have to use javascript because Typescript might get on your way and it is made for larger projects


