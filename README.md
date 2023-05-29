# Coder Proyecto Backend

### `node run dev`

Ejecuta el servidor express el cual esta corriendo en el puerto 8080.

**http://localhost:8080/**

El proyecto ya cuenta con mas de 10 registros de productos.
Ademas de 1 carrito con 3 productos registrados -> **id** del cart: "6468ce68d7e6aac234e40a88";

***

### `Motor de Plantillas Handlebars`

#### `http://localhost:8080/`

Muestra el index el cual tiene un Navbar con las opciones de navegacion.

#### `http://localhost:8080/api/products/home`

Muestra el listado de productos.

#### `http://localhost:8080/api/products/realTimeProducts`

Muestra el mismo listado pero tiene las funciones de agregar y elimar productos, 
utiliza websocket para actualzar los productos cuando se de cada caso.

***

### `Peticiones GET API Products`

#### `http://localhost:8080/api/products/`

Devuelve todos los productos

#### `http://localhost:8080/api/products/?limit=:qty&page=:num&query=:cat&sort=:sort` 
###(:qty => cantidad de productos por pagina, :num => numero de pagina, :cat => categoria de producto, :sort => orden (asc o desc) por precio)


Devuelve los **:qty** primeros productos del N° **:num** de pagina asignada, por defecto la cantidad es 10 y la pagina es 1,
ademas tenemos los parametros de query y sort los cuales hacen un filtro por **:cat** (Categoria) y un orden **:sort** (Asc o Desc) por el precio.

#### `http://localhost:8080/api/products/:pid` (:pid => codigo del producto)

Devuelve el producto con el **id = :pid**.

***

### `Peticiones POST API Products`

#### `http://localhost:8080/api/products/`

Crea un producto con los siguientes atributos **title, description, price, thumbnail, code, stock, category, status**
siendo todos los campos obligatorios, a excepcion de _`thumbnail`_ y _`status`_.

***

### `Peticiones PUT API Products`

#### `http://localhost:8080/api/products/:pid` (:pid => codigo del producto)

Toma el producto de acuerdo al **id** que se envia por _`param`_ y lo actualiza por los campos enviados desde el _`body`_.

#### `http://localhost:8080/api/carts/:cid` (:cid => codigo del carrito)

Actualiza el carrito con **:cid** indicado, con una lista de productos enviados por **body**, con el formato {"products": [{"id_prod": **id**, "cant": **qty**}, ...]}.

#### `http://localhost:8080/api/carts/:cid/products/:pid` (:cid => codigo del carrito, :pid => codigo del producto)

Actualiza la cantidad de un producto enviado por body con el formato {"cant": **qty**}, a travez del **:pid** indicado del producto, 
en el carrito indicado a traves de su **:pid**.

***

### `Peticiones DELETE API Products`

#### `http://localhost:8080/api/products/:pid` (:pid => codigo del producto)

Elimina el producto con **id** indicado.

#### `http://localhost:8080/api/carts/:cid/products/:pid` (:cid => codigo del carrito, :pid => codigo del producto)

Elimina el producto con **:pid** indicado del carrito con **:cid** indicado.

#### `http://localhost:8080/api/carts/:cid` (:cid => codigo del carrito)

Elimina todos los productos de un carrito especificado por el **:cid**.

***

### `Peticiones GET API Carts`

#### `http://localhost:8080/api/carts/:cid` (:pid => codigo del carrito)

Devuelve el carrito con su arreglo de productos, a travez del _`param`_ que indica el codigo del carrito.

### `Peticiones POST API Carts`

#### `http://localhost:8080/api/carts/`

Crea un nuevo carrito con un **id** auto incrementable y un Array vacio de productos.

#### `http://localhost:8080/api/carts/:cid/products/:pid` (:cid => codigo del carrito, :pid => codigo del producto)

Agrega un producto al arreglo de productos del carrito indicado por el **id**.