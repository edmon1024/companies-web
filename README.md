# Frontend de proyecto de compañias


#### Información general
Se usó javascript como lenguaje de programación, react y chakra-ui como librerias principales

Se encuentra la configuración para el despliegue en producción/desarrollo con docker


#### Configuración inicial
1.- Agregarlas en el archivo de variables de entorno en la siguiente ruta web/.env
2.- Instalar dependencias: npm install



##Scripts disponibles
En el directorio de "web" se encuentra el proyecto:

# Ejecutar proyecto
#### Con npm
```
npm run dev
```

#### Con docker compose
```
docker-compose -f docker-compose.[dev/prod].yml up -d
```


#### Puerto
3000.


####Para ejecutar en modo producción (Después de realizar el build):
```
npm run start
```


