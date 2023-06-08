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
                                            Colaboradores
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Listado de Colaboradores
                                        </h1>
                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <a class="nav-link active">
                                                    Todos los Colaboradores
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/colaborador/create" class="nav-link">Nuevo Colaborador
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="contactsListPane" role="tabpanel"
                                aria-labelledby="contactsListTab">
                                <!-- Card -->
                                <div class="card"
                                    data-list='{"valueNames": ["item-name", "item-title", "item-email", "item-phone", "item-score", "item-company"], "page": 10, "pagination": {"paginationClass": "list-pagination"}}'
                                    id="contactsList">
                                    <div class="card-header">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <!-- Form -->
                                                <form>
                                                    <div
                                                        class="input-group input-group-flush input-group-merge input-group-reverse">
                                                        <input class="form-control list-search" type="search"
                                                            v-model="filtro" placeholder="Buscar Colaborador">
                                                        <span class="input-group-text">
                                                            <i class="fe fe-search"></i>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-auto">
                                                <!-- Dropdown -->
                                                <button class="btn btn-sm btn-white" type="button"
                                                    v-on:click="filtrar()">
                                                    <i class="fe fe-sliders me-1"></i> Filtrar <span
                                                        class="badge bg-primary ms-1 d-none">0</span>
                                                </button>
                                            </div>
                                        </div> <!-- / .row -->
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-sm table-hover table-nowrap card-table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <a class="list-sort text-muted">Nombres</a>
                                                    </th>
                                                    <th>
                                                        <a class="list-sort text-muted">Cargo</a>
                                                    </th>
                                                    <th>
                                                        <a class="list-sort text-muted">Email</a>
                                                    </th>
                                                    <th>
                                                        <a class="list-sort text-muted">Estado</a>
                                                    </th>
                                                    <th>
                                                        <a class="list-sort text-muted" data-sort="item-score"
                                                            href="#">Acciones</a>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <paginate tag="tbody" ref="colaboradores" name="colaboradores"
                                                :list="colaboradores" :per="perPage" class="list fs-base">
                                                <tr v-if="!load_data" v-for="item in paginated('colaboradores')">
                                                    <td>
                                                        <!-- Avatar -->
                                                        <div class="avatar avatar-xs align-middle me-2">
                                                            <img class="avatar-img rounded-circle"
                                                                src="/assets/img/avatar-1.jpg" alt="...">
                                                        </div> <a class="item-name text-reset">{{ item.nombres }}
                                                            {{ item.apellidos }}</a>
                                                    </td>
                                                    <td>
                                                        <!-- Text -->
                                                        <span class="item-title">{{ item.rol }}</span>
                                                    </td>
                                                    <td>
                                                        <!-- Email -->
                                                        <a class="item-email text-reset">{{ item.email }}</a>
                                                    </td>
                                                    <td>
                                                        <!-- Badge -->
                                                        <span v-if="!item.estado"
                                                            class="item-score badge bg-danger-soft">Offline</span>
                                                        <span v-if="item.estado"
                                                            class="item-score badge bg-success-soft">Online</span>
                                                    </td>
                                                    <td class="text-end">
                                                        <!-- Dropdown -->
                                                        <div class="dropdown">
                                                            <a class="dropdown-ellipses dropdown-toggle" href="#"
                                                                role="button" data-bs-toggle="dropdown"
                                                                aria-haspopup="true" aria-expanded="false">
                                                                <i class="fe fe-more-vertical"></i>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <router-link
                                                                    :to="{ name: 'colaborador-edit', params: { id: item._id } }"
                                                                    class="dropdown-item">Editar</router-link>
                                                                <a style="cursor:pointer" class="dropdown-item"
                                                                    v-b-modal="'delete-' + item._id">
                                                                    <span v-if="item.estado">Offline</span>
                                                                    <span v-if="!item.estado">Online</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <b-modal centered :id="'delete-' + item._id"
                                                            title="BootstrapVue"
                                                            title-html="<h4 class='card-header-title'><b>Add a member<b></h4>"
                                                            @ok="eliminar(item._id, item.estado)">
                                                            <p class="my-4">{{ item._id }}</p>
                                                        </b-modal>
                                                    </td>
                                                </tr>
                                            </paginate>
                                            <tr v-if="load_data">
                                                <td colspan="5" class="text-center">
                                                    <div class="spinner-border mt-5 mb-5" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between">
                                        <!-- Pagination (prev) -->
                                        <ul class="list-pagination-prev pagination pagination-tabs card-pagination">
                                            <li class="page-item">
                                                <a class="page-link ps-0 pe-4 border-end" v-on:click="goPrev()"
                                                    style="cursor:pointer">
                                                    <i class="fe fe-arrow-left me-1"></i> Prev
                                                </a>
                                            </li>
                                        </ul>
                                        <!-- Pagination -->
                                        <paginate-links @change="onLangsPageChange" for="colaboradores"
                                            :classes="{ 'ul': ['list-pagination', 'pagination', 'pagination-tabs', 'card-pagination'], 'a': ['page'] }">
                                        </paginate-links>
                                        <!-- Pagination (next) -->
                                        <ul class="list-pagination-next pagination pagination-tabs card-pagination">
                                            <li class="page-item">
                                                <a class="page-link ps-4 pe-0 border-start" v-on:click="goNext()"
                                                    style="cursor:pointer">
                                                    Next <i class="fe fe-arrow-right ms-1"></i>
                                                </a>
                                            </li>
                                        </ul>
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
import store from '@/store/index';

export default {
    name: 'IndexColaboradorApp',
    data() {
        return {
            colaboradores: [],
            colaboradores_const: [],
            paginate: ['colaboradores'],
            currentPage: 1,
            perPage: 10,
            filtro: '',
            load_data: false,
        }
    },
    components: {
        SideBar,
        TopNav
    },
    methods: {
        onLangsPageChange(toPage, fromPage) {
            this.currentPage = toPage;
            console.log(this.currentPage);
        },
        goPrev() {
            if (this.currentPage == 1) {
                this.$refs.colaboradores.goToPage(1);
            } else {
                this.$refs.colaboradores.goToPage(this.currentPage--);
            }
        },
        goNext() {
            if (this.currentPage == Math.ceil(this.colaboradores.length / this.perPage)) {
                this.$refs.colaboradores.goToPage(Math.ceil(this.colaboradores.length / this.perPage));
            } else {
                this.$refs.colaboradores.goToPage(this.currentPage++);
            }
        },
        filtrar() {
            console.log(this.filtro);
            let term = new RegExp(this.filtro, 'i');
            // this.colaboradores = this.colaboradores_const.filter(item => term.test(item.nombres) || term.test(item.apellidos) || term.test(item.email));
            this.init_data();
        },
        init_data() {
            this.load_data = true;
            axios.get(this.$url + '/listar_usuario_admin/' + this.filtro, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$token
                }
            }).then((result) => {
                this.colaboradores = result.data;
                this.colaboradores_const = this.colaboradores;
                this.load_data = false;
                console.log(this.colaboradores);
            }).catch((error) => {
                console.log(error);
            })
        },
        eliminar(id, estado) {
            axios.put(this.$url + '/cambiar_estado_usuario_admin/' + id, { estado: estado }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': store.state.token,
                }
            }).then((result) => {
                this.init_data();
                this.$notify({
                    group: 'foo',
                    title: 'SUCCESS',
                    text: 'Se cambió el estado del Colaborador',
                    type: 'success'
                });
            });
        }
    },
    beforeMount() {
        this.init_data();
    },
}
</script>
