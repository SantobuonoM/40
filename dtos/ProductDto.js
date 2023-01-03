export default class ProductDto {
    constructor({ nombre, precio, imagen }) {
        this.title = nombre
        this.price = precio
        this.thumbnail = imagen
    }
}

export function asDto(prod) {
    if (Array.isArray(prod))
        return prod.map(p => new ProductDto(p))
    else
        return new ProductDto(prod)
}
