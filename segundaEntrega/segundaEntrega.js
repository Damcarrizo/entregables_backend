import fs from `fs`


class ProductManager{
    constructor ( title, description, price, thumbnail, code, stock){
        this.id = ProductManager.idRandom(6)
        this.title= title
        this.description = description
        this.price = price
        this.thumbnail= thumbnail
        this.code = code
        this.stock = stock
        this.path = ProductManager.productPath(this.id)
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

static productPath = (id) =>{
    fs.writeFileSync(`./${id}.txt`,`Product Id: ${id}`)

    if(fs.existsSync(`./${id}.txt`)){

    }
    return (`./${id}.txt`)
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
            title: `${this.title}`,
            description: `${this.description}`,
            price: `${this.price}`,
            thumbnail: `${this.thumbnail}`,
            code: `${this.code}`,
            stock: `${this.stock}`,
            path: `${this.path}`,
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

updateProduct = (idModificar) =>{
    fs.writeFileSync (`./${idModificar}.txt`,
            `id: ${this.id},
            title: ${this.title},
            description: ${this.description},
            price: ${this.price},
            thumbnail: ${this.thumbnail},
            code: ${this.code}
            stock: ${this.stock},`
    )
}

deleteProduct = (idEliminar) => {
    fs.unlinkSync (`./${idEliminar}.txt`)

}
}

let newProduct1 = new ProductManager ( "producto prueba 1", "Este es un producto prueba", 200, 'Sin imagen', "abc123", 25)

let newProduct2 = new ProductManager ("producto prueba 2", "Este es un producto prueba", 200, 'Sin imagen', "abc123", 25)

let newProduct3 = new ProductManager ("producto prueba 3", "Este es un producto prueba", 200, 'Sin imagen', "aaa222", 25)
