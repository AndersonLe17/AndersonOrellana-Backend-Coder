# Coder Desafio N° 3

### `node run dev`

Ejecuta el servidor express el cual esta corriendo en el puerto 8080.

**http://localhost:8080/**

El proyecto ya cuenta con 10 registros de productos.
Ademas de 1 carrito con 3 productos registrados;

### `Peticiones GET API Products`

#### `http://localhost:8080/api/products/`

Devuelve todos los productos

#### `http://localhost:8080/api/products/?limit=:qty` (:qty => la cantidad de productos)

Devuelve los **:qty** primeros productos del total que se encuentran registrados.

#### `http://localhost:8080/api/products/:pid` (:pid => codigo del producto)

Devuelve el producto con el **id = :pid**.

### `Peticiones POST API Products`

#### `http://localhost:8080/api/products/`

Crea un producto con los siguientes atributos **title, description, price, thumbnail, code, stock, category, status**
siendo todos los campos obligatorios, a excepcion de _`thumbnail`_ y _`status`_.

### `Peticiones PUT API Products`

#### `http://localhost:8080/api/products/:pid` (:pid => codigo del producto)

Toma el producto de acuerdo al **id** que se envia por _`param`_ y lo actualiza por los campos enviados desde el _`body`_.

### `Peticiones DELETE API Products`

#### `http://localhost:8080/api/products/:pid` (:pid => codigo del producto)

Elimina el producto con **id** indicado.



### `Peticiones GET API Carts`

#### `http://localhost:8080/api/carts/:cid` (:pid => codigo del carrito)

Devuelve el carrito con su arreglo de productos, a travez del _`param`_ que indica el codigo del carrito.

### `Peticiones POST API Carts`

#### `http://localhost:8080/api/carts/`

Crea un nuevo carrito con un **id** auto incrementable y un Array vacio de productos.

#### `http://localhost:8080/api/carts/:cid/product/:pid` (:pid => codigo del carrito, :pid => codigo del producto)

Agrega un producto al arreglo de productos del carrito indicado por el **id**.
