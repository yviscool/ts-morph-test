// import { createProject, ts } from "@ts-morph/bootstrap";

// (async ()=> {
  
//   const project = await createProject();

//   const file = await project.addSourceFileAtPath("./main.ts");

//   const typeChecker = project.createProgram().getTypeChecker();

//   const classDecs = file.statements.filter(s => { 
//     return ts.isClassDeclaration(s);
//   }) ;


//   for (const classDec of classDecs ){

//     const type = typeChecker.getTypeAtLocation(classDec);

//     // 获取继承
//     for (const parent of type.getBaseTypes() ){
//       console.log('ClassName: ', typeChecker.typeToString(parent))
//     }

//     // 获取属性
//     for (const property of type.getProperties()) {
//         const propertyType = typeChecker.getTypeOfSymbolAtLocation(property, classDec);
//         console.log("Name:", property.name, "Type:", typeChecker.typeToString(propertyType));
//     }
//   }

// })();


import { Project } from "ts-morph";

const log = console.log.bind(console);

const project = new Project({
  // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
  // If you initialize with a tsconfig.json, then it will automatically populate the project
  // with the associated source files.
  // Read more: https://ts-morph.com/setup/
});


const source = project.addSourceFileAtPath("./main.d.ts");

// const sourceList = project.addSourceFilesAtPaths("dist/**/*.ts");

const classList = source.getClasses();

for (const cls of classList){

  log('ClassName: ',cls.getName());

  log('BaseClass: ',cls.getBaseClass()?.getText());

  for (const property  of cls.getProperties() ){
    // log( property.getText() );
    log('Name: ', property.getName(), 'Type: ', property.getType()?.getText())
  }
}
      
// const classList = source.getTypeAliases();

// for (const cls of classList) {

//   log(cls);

//   log('typeName: ', cls.getName());

//   log(cls.getType().getTypeArguments().map(t => t.getText()))

//   for (const property of cls.getType().getProperties()) {
//     log('Name: ', property.getName(), 'Type: ', property.getValueDeclaration()?.getType()?.getText());
//     // log('Name: ', property.getName(), 'Type: ', property.getValueDeclaration()?.getKindName())
//   }
//   // for (const property  of cls.get() ){
//   //   // log( property.getText() );
//   //   log('Name: ', property.getName(), 'Type: ', property.getType()?.getText())
//   // }
// }
