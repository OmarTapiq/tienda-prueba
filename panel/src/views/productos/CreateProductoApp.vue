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
                                            Nuevo Producto
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
                                                <a class="nav-link active">Nuevo Producto</a>
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
                                                PNG, JPG, JPEG, WEBP no mayor de 1000px de ancho y alto.
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
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option :value="item.categoria.titulo" v-for="item in categorias">{{item.categoria.titulo}}</option>
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
                                        <input type="number" class="form-control" placeholder="Precio"
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
                                                    Descuento desactivado
                                                </small>
                                            </div>
                                        </div> <!-- / .row -->
                                    </div>
                                </div>
                            </div> <!-- / .row -->
                            <!-- Divider -->
                            <hr class="mt-2 mb-3">
                            <!-- Button -->
                            <button class="btn btn-primary" v-on:click="validar()">
                                Crear producto
                            </button>
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
    name: 'CreateProductoApp',
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
            categorias: []
        }
    },
    methods: {
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
            } else if (!this.producto.precio) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese un precio.',
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
                this.registro();
            }
        },
        registro() {
            var fm = new FormData();

            fm.append('titulo', this.producto.titulo);
            fm.append('categoria', this.producto.categoria);
            fm.append('precio', this.producto.precio);
            fm.append('descripcion', this.producto.descripcion);
            fm.append('str_variedad', this.producto.str_variedad);
            fm.append('estado', this.producto.estado);
            fm.append('descuento', this.producto.descuento);
            fm.append('portada', this.producto.portada);

            axios.post(this.$url + '/registro_producto_admin', fm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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
                        text: 'Registro Exitoso',
                        type: 'success'
                    });

                    this.$router.push({ name: 'producto-index' });
                }
            })
        }
    },
    beforeMount() {
        this.init_categorias();
    }
}
</script>
