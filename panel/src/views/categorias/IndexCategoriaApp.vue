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
                                            Categorias
                                        </h6>
                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Categorias
                                        </h1>
                                    </div>
                                </div> <!-- / .row -->
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-12">
                                <button v-if="!section_form" class="btn btn-primary btn-sm"
                                    v-on:click="section_form = true;">Nueva categoria</button>
                                <button v-if="section_form" class="btn btn-primary btn-sm"
                                    v-on:click="section_form = false;">Ocultar</button>
                            </div>
                            <div class="col-12 mt-3" v-if="section_form">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Nueva categoria"
                                        v-model="nueva_categoria">
                                    <button class="btn btn-dark" v-on:click="crear_categoria()">Crear categoría</button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush list my-n3">
                                    <li class="list-group-item" v-for="item in categorias">
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <!-- Avatar -->
                                                <a href="profile-posts.html" class="avatar">
                                                    <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                                                        alt="..." class="avatar-img rounded-circle">
                                                </a>
                                            </div>
                                            <div class="col ms-n2">
                                                <!-- Title -->
                                                <h4 class="mb-1 name">
                                                    <a href="profile-posts.html">{{ item.categoria.titulo }}
                                                        ({{ item.nproductos }} Productos)</a>
                                                </h4>
                                                <!-- Time -->
                                                <p class="small mb-0" v-if="item.categoria.estado">
                                                    <span class="text-success">●</span> Publicado
                                                </p>
                                                <p class="small mb-0" v-if="!item.categoria.estado">
                                                    <span class="text-danger">●</span> Oculto
                                                </p>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Button -->
                                                <a v-b-modal="'estado-' + item.categoria._id" v-if="item.categoria.estado" href="#!" class="btn btn-sm btn-danger text-white"
                                                    style="margin-right: 1rem;">
                                                    Ocultar
                                                </a>
                                                <a v-b-modal="'estado-' + item.categoria._id" v-if="!item.categoria.estado" href="#!"
                                                    class="btn btn-sm btn-primary text-white"
                                                    style="margin-right: 1rem;">
                                                    Mostrar
                                                </a>
                                                <b-modal centered :id="'estado-' + item.categoria._id" title="BootstrapVue"
                                                    title-html="<h4 class='card-header-title'><b>Cambiar Estado<b></h4>"
                                                    @ok="cambiar_estado(item.categoria._id, item.categoria.estado)">
                                                    <p class="my-4">{{ item.categoria._id }}</p>
                                                </b-modal>
                                            </div>
                                        </div>
                                        <!-- / .row -->
                                    </li>
                                </ul>
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
    name: 'IndexCategoriaApp',
    components: {
        SideBar,
        TopNav
    },
    data() {
        return {
            section_form: false,
            nueva_categoria: '',
            categorias: []
        }
    },
    methods: {
        init_data() {
            axios.get(this.$url + '/listar_categorias_admin', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.categorias = result.data;
            });
        },
        crear_categoria() {
            if (this.nueva_categoria) {
                console.log(this.nueva_categoria);
                axios.post(this.$url + '/crear_categoria_admin', { titulo: this.nueva_categoria }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.token,
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
                        this.nueva_categoria = '';
                        this.$notify({
                            group: 'foo',
                            title: 'SUCCESS',
                            text: 'Se registró la categoria.',
                            type: 'success'
                        });
                    }

                });
            } else {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el título de la categoría.',
                    type: 'error'
                });
            }
        },
        cambiar_estado(id, estado) {
            axios.put(this.$url + '/cambiar_estado_producto_admin/' + id, { estado: estado }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token,
                }
            }).then((result) => {
                this.init_data();
                this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'Se cambió el estado de la Categoria.',
                    type: 'success'
                });
            });
        }
    },
    beforeMount() {
        this.init_data();
    }
}
</script>
