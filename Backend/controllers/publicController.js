var Producto = require('../models/producto');
var Categoria = require('../models/categoria');

const obtener_nuevos_productos = async function (req, res) {
    var productos = await Producto.find({ estado: true }).sort({ createdAt: -1 }).limit(4);
    res.status(200).send(productos);
}

const obtener_productos_descuento = async function (req, res) {
    var productos = await Producto.find({ descuento: true, estado: true }).limit(4);
    res.status(200).send(productos);
}

const obtener_productos_shop = async function (req, res) {
    var productos = await Producto.find({ estado: true }).sort({ createdAt: -1 });
    res.status(200).send(productos);
}

const listar_categorias_shop = async function (req, res) {
    var regs = await Categoria.find({ estado: true }).sort({ titulo: 1 });
    var categorias = [];

    for (var item of regs) {
        var productos = await Producto.find({ categoria: item.titulo });

        categorias.push({
            categoria: item,
            nproductos: productos.length
        });
    }

    res.status(200).send(categorias);
}

module.exports = {
    obtener_nuevos_productos,
    obtener_productos_descuento,
    obtener_productos_shop,
    listar_categorias_shop
}