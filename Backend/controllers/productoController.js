var Producto = require('../models/producto');
var Categoria = require('../models/categoria');
var Galeria = require('../models/galeria');
var Variedad = require('../models/variedad');
var Ingreso = require('../models/variedad');
var Ingreso_detalle = require('../models/ingreso_detalle');
var slugify = require('slugify');
var fs = require('fs');
var path = require('path');

const registro_producto_admin = async function (req, res) {
    if (req.user) {
        let data = req.body;
        let productos = await Producto.find({ titulo: data.titulo });
        console.log(productos.length);

        if (productos.length >= 1) {
            res.status(200).send({ data: undefined, message: 'El nombre del producto ya existe.' });
        } else {
            // Registro del producto
            var img_path = req.files.portada.path;
            var str_img = img_path.split('\\');
            var str_portada = str_img[2];

            data.portada = str_portada;
            data.slug = slugify(data.titulo);

            try {
                let producto = await Producto.create(data);
                res.status(200).send({ data: producto });
            } catch (error) {
                res.status(200).send({ data: undefined, message: 'Error al guardar el producto.' });
            }
        }
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const listar_productos_admin = async function (req, res) {
    if (req.user) {
        let filtro = req.params['filtro'];
        let productos = await Producto.find({
            $or: [
                { titulo: new RegExp(filtro, 'i') },
                { categoria: new RegExp(filtro, 'i') }
            ]
        }).sort({ createdAt: -1 });
        res.status(200).send(productos);
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const obtener_portada_producto = async function (req, res) {
    let img = req.params['img'];

    fs.stat('./uploads/productos/' + img, function (err) {
        if (err) {
            let path_img = './uploads/default.jpg';
            res.status(200).sendFile(path.resolve(path_img));
        } else {
            let path_img = './uploads/productos/' + img;
            res.status(200).sendFile(path.resolve(path_img));
        }
    });
}

const obtener_producto_admin = async function (req, res) {
    if (req.user) {
        let id = req.params['id'];

        try {
            let producto = await Producto.findById({ _id: id });
            res.status(200).send(producto);
        } catch (error) {
            res.status(200).send(undefined);
        }
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const actualizar_producto_admin = async function (req, res) {
    if (req.user) {
        let data = req.body;
        let id = req.params['id'];
        let productos = await Producto.find({ titulo: data.titulo });
        console.log(productos.length);

        if (productos.length >= 1) {
            if (productos[0]._id == id) {
                if (req.files) {
                    // Registro del producto
                    var img_path = req.files.portada.path;
                    var str_img = img_path.split('\\');
                    var str_portada = str_img[2];

                    data.portada = str_portada;
                    data.slug = slugify(data.titulo);

                    try {
                        let producto = await Producto.findByIdAndUpdate({ _id: id }, {
                            titulo: data.titulo,
                            categoria: data.categoria,
                            descripcion: data.descripcion,
                            str_variedad: data.str_variedad,
                            estado: data.estado,
                            descuento: data.descuento,
                            portada: data.portada
                        });
                        res.status(200).send({ data: producto });
                    } catch (error) {
                        res.status(200).send({ data: undefined, message: 'Error al guardar el producto.' });
                    }
                } else {
                    data.slug = slugify(data.titulo);

                    try {
                        let producto = await Producto.findByIdAndUpdate({ _id: id }, {
                            titulo: data.titulo,
                            categoria: data.categoria,
                            descripcion: data.descripcion,
                            str_variedad: data.str_variedad,
                            estado: data.estado,
                            descuento: data.descuento
                        });
                        res.status(200).send({ data: producto });
                    } catch (error) {
                        res.status(200).send({ data: undefined, message: 'Error al guardar el producto.' });
                    }
                }
            } else {
                res.status(200).send({ data: undefined, message: 'El nombre del producto ya existe.' });
            }
        } else {
            if (req.files) {
                // Registro del producto
                var img_path = req.files.portada.path;
                var str_img = img_path.split('\\');
                var str_portada = str_img[2];

                data.portada = str_portada;
                data.slug = slugify(data.titulo);

                try {
                    let producto = await Producto.findByIdAndUpdate({ _id: id }, {
                        titulo: data.titulo,
                        categoria: data.categoria,
                        descripcion: data.descripcion,
                        str_variedad: data.str_variedad,
                        estado: data.estado,
                        descuento: data.descuento,
                        portada: data.portada
                    });
                    res.status(200).send({ data: producto });
                } catch (error) {
                    res.status(200).send({ data: undefined, message: 'Error al guardar el producto.' });
                }
            } else {
                data.slug = slugify(data.titulo);

                try {
                    let producto = await Producto.findByIdAndUpdate({ _id: id }, {
                        titulo: data.titulo,
                        categoria: data.categoria,
                        descripcion: data.descripcion,
                        str_variedad: data.str_variedad,
                        estado: data.estado,
                        descuento: data.descuento
                    });
                    res.status(200).send({ data: producto });
                } catch (error) {
                    res.status(200).send({ data: undefined, message: 'Error al guardar el producto.' });
                }
            }
        }
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const registro_variedad_producto = async (req, res) => {
    if (req.user) {
        let data = req.body;
        let variedad = await Variedad.create(data);
        res.status(200).send({ data: variedad });
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const obtener_variedades_producto = async function (req, res) {
    if (req.user) {
        let id = req.params['id'];
        let variedades = await Variedad.find({ producto: id }).sort({ stock: -1 });
        res.status(200).send(variedades);
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const eliminar_variedad_producto = async function (req, res) {
    if (req.user) {
        let id = req.params['id'];
        let reg = await Variedad.findById({ _id: id });
        if (reg.stock == 0) {
            let variedad = await Variedad.findByIdAndRemove({ _id: id });
            res.status(200).send(variedad);
        } else {
            res.status(200).send({ data: undefined, message: 'No se puede eliminar esta variedad' });
        }
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const listar_activos_productos_admin = async function (req, res) {
    if (req.user) {
        let productos = await Producto.find({ estado: true }).sort({ createdAt: -1 });
        res.status(200).send(productos);
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const registro_ingreso_admin = async function (req, res) {
    if (req.user) {
        let data = req.body;
        let detalles = data.detalles;

        var img_path = req.files.documento.path;
        var str_img = img_path.split('\\');
        var str_documento = str_img[2];
        data.documento = str_documento;
        data.usuario = req.user.sub;

        let ingreso = await Ingreso.create(data);
        res.status(200).send(ingreso);
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const subir_imagen_producto_admin = async function (req, res) {
    if (req.user) {
        let data = req.body;

        // Registro del producto
        var img_path = req.files.imagen.path;
        var str_img = img_path.split('\\');
        var str_imagen = str_img[2];

        data.imagen = str_imagen;

        try {
            let imagen = await Galeria.create(data);
            res.status(200).send(imagen);
        } catch (error) {
            res.status(200).send({ data: undefined, message: 'Error al guardar el producto.' });
        }
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const obtener_galeria_producto = async function (req, res) {
    let img = req.params['img'];

    fs.stat('./uploads/galeria/' + img, function (err) {
        if (err) {
            let path_img = './uploads/default.jpg';
            res.status(200).sendFile(path.resolve(path_img));
        } else {
            let path_img = './uploads/galeria/' + img;
            res.status(200).sendFile(path.resolve(path_img));
        }
    });
}

const obtener_galeria_producto_admin = async function (req, res) {
    if (req.user) {
        let id = req.params['id'];
        let galeria = await Galeria.find({ producto: id });
        res.status(200).send(galeria);
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const eliminar_galeria_producto_admin = async function (req, res) {
    if (req.user) {
        let id = req.params['id'];

        try {
            let reg = await Galeria.findById({ _id: id });
            let path_img = './uploads/galeria/' + reg.imagen;
            fs.unlinkSync(path_img);
            let galeria = await Galeria.findByIdAndDelete({ _id: id });
            res.status(200).send(galeria);
        } catch (error) {
            res.status(200).send({ data: undefined, message: 'Error al eliminar la imagen.' });
        }

    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const crear_categoria_admin = async function (req, res) {
    if (req.user) {
        let data = req.body;

        try {
            var reg = await Categoria.find({ titulo: data.titulo });

            if (reg.length == 0) {
                data.slug = slugify(data.titulo).toLowerCase();
                var categoria = await Categoria.create(data);
                res.status(200).send(categoria);
            } else {
                res.status(200).send({ data: undefined, message: 'La categoria ya existe.' });
            }
        } catch (error) {
            res.status(200).send({ data: undefined, message: 'Ocurrió un error durante el proceso.' });
        }
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const listar_categorias_admin = async function (req, res) {
    if (req.user) {
        var regs = await Categoria.find().sort({ titulo: 1 });
        var categorias = [];

        for (var item of regs) {
            var productos = await Producto.find({ categoria: item.titulo });

            categorias.push({
                categoria: item,
                nproductos: productos.length
            });
        }

        res.status(200).send(categorias);

    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

const cambiar_estado_producto_admin = async function (req, res) {
    if (req.user) {
        let id = req.params['id'];
        let data = req.body;
        let nuevo_estado = false;

        if (data.estado) {
            nuevo_estado = false;
        } else {
            nuevo_estado = true;
        }

        let categoria = await Categoria.findByIdAndUpdate({ _id: id }, {
            estado: nuevo_estado
        });

        res.status(200).send(categoria);
    } else {
        res.status(500).send({ data: undefined, message: 'ErrorToken' });
    }
}

module.exports = {
    registro_producto_admin,
    listar_productos_admin,
    obtener_portada_producto,
    obtener_producto_admin,
    actualizar_producto_admin,
    registro_variedad_producto,
    obtener_variedades_producto,
    eliminar_variedad_producto,
    listar_activos_productos_admin,
    registro_ingreso_admin,
    subir_imagen_producto_admin,
    obtener_galeria_producto,
    obtener_galeria_producto_admin,
    eliminar_galeria_producto_admin,
    crear_categoria_admin,
    listar_categorias_admin,
    cambiar_estado_producto_admin
}