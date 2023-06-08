<template>
    <div>
        <SideBar />
        <div class="main-content">
            <TopNav />
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">
                                            Productos
                                        </h6>
                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Editar Producto
                                        </h1>
                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/producto" class="nav-link">Todos los Productos
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active">Editar Producto</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-7">
                            <div class="row justify-content-between align-items-center">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <!-- Avatar -->
                                            <div class="avatar">
                                                <img class="avatar-img rounded-circle" :src="str_image" alt="...">
                                            </div>
                                        </div>
                                        <div class="col ms-n2">
                                            <!-- Heading -->
                                            <h4 class="mb-1">
                                                <b>Imagen del Producto</b>
                                            </h4>
                                            <!-- Text -->
                                            <small class="text-muted">
                                                PNG or JPG no bigger than 1000px wide and tall.
                                            </small>
                                        </div>
                                    </div> <!-- / .row -->
                                </div>
                                <div class="col-auto">
                                    <!-- Button -->
                                    <label for="file-upload" class="btn btn-sm btn-primary">
                                        Upload
                                    </label>
                                    <input style="display:none" id="file-upload" type="file"
                                        v-on:change="uploadImage($event)" />
                                </div>
                            </div> <!-- / .row -->
                            <!-- Divider -->
                            <hr class="my-3">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <!-- Email address -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="mb-1">
                                            Nombre del producto
                                        </label>
                                        <!-- Input -->
                                        <input type="text" class="form-control" placeholder="Nombre del producto"
                                            v-model="producto.titulo">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <!-- First name -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label mb-1">
                                            Categoria
                                        </label>
                                        <!-- Input -->
                                        <select name="" class="form-select" v-model="producto.categoria">
                                            <option :value="item.categoria.titulo" v-for="item in categorias">
                                                {{ item.categoria.titulo }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <!-- Last name -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label">
                                            Variedad
                                        </label>
                                        <!-- Input -->
                                        <input type="text" class="form-control" placeholder="Nombre de la Variedad"
                                            v-model="producto.str_variedad">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <!-- Last name -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label">
                                            Precio
                                        </label>
                                        <!-- Input -->
                                        <input type="number" readonly class="form-control" placeholder="Precio"
                                            v-model="producto.precio">
                                    </div>
                                </div>
                                <div class="col-12 col-md-12">
                                    <!-- Phone -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="form-label">
                                            Descripción
                                        </label>
                                        <!-- Input -->
                                        <textarea class="form-control" id="" rows="3" placeholder="Descripción"
                                            v-model="producto.descripcion"></textarea>
                                    </div>
                                </div>
                            </div> <!-- / .row -->

                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <!-- Public profile -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="mb-1">
                                            Producto Publicado
                                        </label>
                                        <div class="row">
                                            <div class="col-auto">
                                                <!-- Switch -->
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="switchOne"
                                                        v-model="producto.estado" />
                                                    <label class="form-check-label" for="switchOne"></label>
                                                </div>
                                            </div>
                                            <div class="col ms-n2">
                                                <!-- Help text -->
                                                <small class="text-muted">
                                                    Producto Publicado
                                                </small>
                                            </div>
                                        </div> <!-- / .row -->
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <!-- Allow for additional Bookings -->
                                    <div class="form-group">
                                        <!-- Label -->
                                        <label class="mb-1">
                                            En descuento
                                        </label>
                                        <div class="row">
                                            <div class="col-auto">
                                                <!-- Switch -->
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="switchTwo"
                                                        v-model="producto.descuento" />
                                                    <label class="form-check-label" for="switchTwo"></label>
                                                </div>
                                            </div>
                                            <div class="col ms-n2">
                                                <!-- Help text -->
                                                <small class="text-muted">
                                                    Descuento Desactivado
                                                </small>
                                            </div>
                                        </div> <!-- / .row -->
                                    </div>
                                </div>
                            </div> <!-- / .row -->
                            <!-- Button -->
                            <button class="btn btn-primary mt-2" v-on:click="validar()">
                                Actualizar producto
                            </button>
                            <!-- Divider -->
                            <hr class="mt-3 mb-3">
                            <div class="row justify-content-between align-items-center mb-3">
                                <div class="col-12">
                                    <!-- Heading -->
                                    <h2 class="mb-2">
                                        Variedades de producto
                                    </h2>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="col-lg-5">
                                    <small class="text-muted">
                                        Proveedor
                                    </small>
                                    <input type="text" class="form-control" placeholder="Empresa proveedora"
                                        v-model="variedad.proveedor">
                                </div>
                                <div class="col-lg-5">
                                    <small class="text-muted">
                                        Variedad
                                    </small>
                                    <input type="text" class="form-control" placeholder="Xbox One, PS4..."
                                        v-model="variedad.variedad">
                                </div>
                                <div class="col">
                                    <small class="text-muted">
                                    </small> <br>
                                    <button class="btn btn-primary btn-block" style="width: 100% !important;"
                                        v-on:click="validar_variedad()">Agregar</button>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body" v-if="variedades.length >= 1">
                                    <!-- List group -->
                                    <div class="list-group list-group-flush my-n3">
                                        <div class="list-group-item" v-for="item in variedades">
                                            <div class="row align-items-center">
                                                <div class="col">
                                                    <!-- Heading -->
                                                    <h4 class="mb-1">
                                                        {{ item.variedad.toUpperCase() }}
                                                    </h4>
                                                    <!-- Text -->
                                                    <small class="text-muted">
                                                        <b>SKU: </b>{{ item.sku }}
                                                    </small>
                                                </div>
                                                <div class="col">
                                                    <h4 class="mb-1">
                                                        {{ item.stock }}
                                                    </h4>
                                                    <small class="text-muted">
                                                        Unidades
                                                    </small>
                                                </div>
                                                <div class="col-auto">
                                                    <!-- Button -->
                                                    <button v-if="item.stock == 0" class="btn btn-sm btn-danger"
                                                        type="button" v-b-modal="'delete-' + item._id">
                                                        Eliminar
                                                    </button>
                                                    <button v-if="item.stock >= 1" disabled
                                                        class="btn btn-sm btn-danger" type="button">
                                                        Eliminar
                                                    </button>
                                                    <b-modal centered :id="'delete-' + item._id" title="BootstrapVue"
                                                        title-html="<h4 class='card-header-title'><b>Add a member<b></h4>"
                                                        @ok="eliminar(item._id)">
                                                        <p class="my-4">{{ item._id }}</p>
                                                    </b-modal>
                                                </div>
                                            </div> <!-- / .row -->
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body text-center" v-if="variedades.length == 0">
                                    <div class="col-12 text.center">
                                        <div class="spinner-grow text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                        <div class="spinner-grow text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- / .row -->
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import TopNav from '@/components/TopNav.vue';
import axios from 'axios';

export default {
    name: 'EditProductoApp',
    components: {
        SideBar,
        TopNav
    },
    data() {
        return {
            str_image: '/assets/img/producto.png',
            producto: {
                categoria: '',
                estado: false,
                descuento: false,
                portada: undefined,
            },
            portada: undefined,
            categorias: [],
            variedad: {},
            sku: '',
            variedades: []
        }
    },
    methods: {
        init_data() {
            axios.get(this.$url + '/obtener_producto_admin/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                this.producto = result.data;
                this.str_image = this.$url + '/obtener_portada_producto/' + this.producto.portada;
            });
        },
        init_categorias() {
            axios.get(this.$url + '/listar_categorias_admin', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.categorias = result.data;
            });
        },
        uploadImage($event) {
            var image;

            if ($event.target.files.length >= 1) {
                image = $event.target.files[0];
            }

            if (image.size <= 1000000) {
                if (image.type == 'image/jpeg' || image.type == 'image/png' || image.type == 'image/webp' || image.type == 'image/jpg') {
                    this.str_image = URL.createObjectURL(image);
                    this.portada = image;
                    this.producto.portada = this.portada;
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: 'El recurso debe ser una imagen.',
                        type: 'error'
                    });
                    this.portada = undefined;
                }
            } else {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'La imagen debe pesar menos de 1MB.',
                    type: 'error'
                });
                this.portada = undefined;
            }
        },
        validar() {
            if (!this.producto.titulo) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el nombre del producto.',
                    type: 'error'
                });
            } else if (!this.producto.categoria) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione una categoría.',
                    type: 'error'
                });
            } else if (!this.producto.descripcion) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese una descripción.',
                    type: 'error'
                });
            } else if (!this.producto.str_variedad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese una variedad.',
                    type: 'error'
                });
            } else if (this.producto.portada == undefined) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione una imagen para el producto.',
                    type: 'error'
                });
            } else {
                this.actualizar();
            }
        },
        actualizar() {
            var data;
            var content = '';

            if (this.portada != undefined) {
                data = new FormData();
                content = 'multipart/form-data';

                data.append('titulo', this.producto.titulo);
                data.append('categoria', this.producto.categoria);
                data.append('descripcion', this.producto.descripcion);
                data.append('str_variedad', this.producto.str_variedad);
                data.append('estado', this.producto.estado);
                data.append('descuento', this.producto.descuento);
                data.append('portada', this.producto.portada);
            } else {
                content = 'application/json';
                data = this.producto;
            }

            axios.put(this.$url + '/actualizar_producto_admin/' + this.$route.params.id, data, {
                headers: {
                    'Content-Type': content,
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                if (result.data.message) {
                    this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: result.data.message,
                        type: 'error'
                    });
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'SUCCESS',
                        text: 'Actualización Exitosa',
                        type: 'success'
                    });
                }
            })
        },
        validar_variedad() {
            if (!this.variedad.proveedor) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el proveedor del producto.',
                    type: 'error'
                });
            } else if (!this.variedad.variedad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese la variedad del producto.',
                    type: 'error'
                });
            } else {
                this.variedad.producto = this.$route.params.id;
                this.variedad.sku = this.generar_sku();
                this.registro_variedad();
            }
        },
        registro_variedad() {
            axios.post(this.$url + '/registro_variedad_producto', this.variedad, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                this.variedad = {};
                this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'Registro de Variedad Exitosa.',
                    type: 'success'
                });
                this.init_variedades();
            });
        },
        generar_sku() {
            let sku = this.producto.titulo.substr(0, 3) + '' + this.producto.str_variedad.substr(0, 3) + '' + this.variedad.variedad.substr(0, 3) + '' + this.variedad.proveedor.substr(0, 3);
            return sku.toUpperCase();
        },
        init_variedades() {
            axios.get(this.$url + '/obtener_variedades_producto/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                this.variedades = result.data;
                //     this.variedad = {};
                //     this.$notify({
                //         group: 'foo',
                //         title: 'SUCCESS',
                //         text: 'Registro de Variedad Exitosa.',
                //         type: 'success'
                //     });
            });
        },
        eliminar(id) {
            axios.delete(this.$url + '/eliminar_variedad_producto/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                if (result.data.message) {
                    this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: result.data.message,
                        type: 'error'
                    });
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'SUCCESS',
                        text: 'Eliminación de Variedad Exitosa.',
                        type: 'success'
                    });
                    this.init_variedades();
                }
            });
        }
    },
    beforeMount() {
        this.init_data();
        this.init_variedades();
        this.init_categorias();
    }
}
</script>
