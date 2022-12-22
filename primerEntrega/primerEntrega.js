//-Se creará una instancia de la clase “ProductManager”
//-Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
//-Se llamará al método “addProduct” con los campos:
//-title: “producto prueba”
//-description:”Este es un producto prueba”
//-price:200,
//-thumbnail:”Sin imagen”
//-code:”abc123”,
//-stock:25
//-El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
//-Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
//-Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
//-Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo


class ProductManager{
    constructor ( title, description, price, thumbnail, code, stock){
        this.id = ProductManager.idRandom(6)
        this.title= title
        this.description = description
        this.price = price
        this.thumbnail= thumbnail
        this.code = code
        this.stock = stock
    }

static productsList =[]

static idRandom= (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

getProducts = () => {
    console.log(ProductManager.productsList)
}

addProducts = () => {
    if ( ProductManager.productsList.find(item=> item.code === this.code))
    {console.log("Producto encontrado, prueba otro")}
    else{
        ProductManager.productsList.push({
            id: `${this.id}`,
            title: `${tis.title}`,
            description: `${tis.description}`,
            price: `${tis.price}`,
            thumbnail: `${tis.thumbnail}`,
            code: `${tis.code}`,
            stock: `${tis.stock}`,
        })
        console.log(`Se agrego correctamente tu producto " ${this.title} "`)
    }
}

getProductByid = (idSearch) =>{
    let searchResult = ProductManager.productsList.find (item => item.code === idSearch)

    if(
        searchResult === idSearch
    ){
        console.log(searchResult)
    }
    else{
        console.log(`No encontramos el producto`)
    }
}



}

let newProduct1 = new ProductManager ( "producto prueba 1", "Este es un producto prueba", 200, 'Sin imagen', "abc123", 25)

let newProduct2 = new ProductManager ("producto prueba 2", "Este es un producto prueba", 200, 'Sin imagen', "abc123", 25)

let newProduct3 = new ProductManager ("producto prueba 3", "Este es un producto prueba", 200, 'Sin imagen', "aaa222", 25)
