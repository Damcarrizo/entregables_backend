class ProductManager{
    constructor ( title, description, price, thumbnail, code, stock){
        //this.id = ProductManager.idRandom(6)//
        this.id= 0;
        this.title= title;
        this.description = description;
        this.price = price;
        this.thumbnail= thumbnail;
        this.code = code;
        this.stock = stock;
       // this.path = ProductManager.productPath(this.id);//
        this.productos = [];
    }
    
    listar(id){
        let prod = this.productos.find(prod=> prod.id == id)
        return prod || { error: " Producto no encontrado"}
    }

    listarAll(){
        return this.productos.lenght? this.productos : {error: 'No hay productos cargados'}
    }

    guardar(prod){
        prod.id = ++this.id
        this.productos.push(prod)
    }

    actualizar(prod,id){
        prod.id = Number(id)
        let index = this.productos.findIndex(prod=> prod.id ==id)
        this.productos.splice(index,1,prod)
    }

    borrar(id){
        let index = this.productos.findIndex(pord=> prod.id == id)
        return this.productos.splice(index,1)
    }

}

export default ProductManager