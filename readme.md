### ContactList
Ejemplo de lista de contactos en ionic

###### Requisitos previos:

  - NodeJS y npm
  - Ionic-cli `npm install -g ionic`
  - Bower `npm install -g bower`
  - Gulp `npm install -g gulp`

Instalación de dependencias de desarrollo: (desde el directorio raiz del proyecto)
```sh
$ npm install
```

Descarga de librerías javascript:
```sh
$ bower install
```

Inyección de librerías/css en index.html:
```sh
$ gulp inject
$ gulp wiredep
```

Preparación del proyecto ionic (plugins y plataformas):
```sh
$ ionic state reset
```

Test del desarrollo en navegador:
```sh
$ ionic serve
```

"Compilado" de templates, minificacion y test en dispositivo:
```sh
$ gulp build && mv www www_develop && mv dist www && ionic run android && rm -R www && mv www_develop www
```