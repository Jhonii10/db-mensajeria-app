# App Mensajeria

## Aplicacion web de envio de mensajeria o paquetes

### Tecnologias

1. Database : Postgres
2. Backend : Node.js con Express.js
3. Frontend : Next.js, redux y tailwind

## Ejecutar en local 

requerimientos

Docker y node.js

1. Clona el repositorio 
2. Inicia y siembra datos en la base de datos con docker  
```
cd database
docker build -t mensajeriadb .
docker run --name mensajeriadb -e POSTGRES_PASSWORD=pg123 -p 5432:5432 mensajeriadb
```
3. levantar backend con node.js
```
cd backend
npm install
npm start
```
4. Iniciar frontend con node.js
```
cd frontend
npm install
npm run dev
```
5. Abrir en el navegador [http://localhost:3000](http://localhost:3000)

6. Inicia secion con alguno de estos usuarios.

- administrador: correo: admin@admin.com, contraseña: admin123456
- cliente: correo: john@gmail.com, contraseña: 123456
- mensajero: correo: jane@gmail.com, contraseña: 123456