# Node-ts-multiplication-table-app

1. Instalar TypeScript y otras dependencias
```
npm i -D typescript @types/node ts-node nodemon rimraf
```

2. Inicializar el archivo de configuración de TypeScript 
```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear archivo de configuración Nodemon - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```

4. Crear scripts para dev, build y start
```
  "dev": "nodemon",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```