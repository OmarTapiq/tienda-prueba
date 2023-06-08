<template>
  
    <div>
        <section class="hero" style="margin-top: 10rem;">
            <div class="container">
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading mb-0">Zona del Cliente</h1>
                </div>
            </div>
        </section>
        <!-- customer login-->
        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="block">
                            <div class="block-header">
                                <h6 class="text-uppercase mb-0">Iniciar Sesión</h6>
                            </div>
                            <div class="block-body">
                                <p class="lead">¿Ya tiene una cuenta?</p>
                                <p class="text-muted">Ingrese su correo electrónico y contraseña con el que realizó el
                                    registro.</p>
                                <hr>
                                <form action="customer-orders.html" method="get">
                                    <div class="mb-4">
                                        <label class="form-label" for="email1">Correo Electrónico</label>
                                        <input class="form-control" id="email1" type="text"
                                            placeholder="nombre@extension.com" autocomplete="off" v-model="email">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="password1">Contraseña</label>
                                        <input class="form-control" id="password1" type="password"
                                            placeholder="Ingrese su contraseña" autocomplete="off" v-model="password">
                                    </div>
                                    <div class="alert alert-danger d-flex align-items-center mb-4" role="alert"
                                        v-if="msm_error_login">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor"
                                            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                            viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path
                                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div>{{ msm_error_login }}</div>
                                    </div>
                                    <div class="mb-4 text-center">
                                        <button class="btn btn-outline-dark" type="button" v-on:click="login()"><i
                                                class="fa fa-sign-in-alt me-2"></i>Iniciar Sesión</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="block">
                            <div class="block-header">
                                <h6 class="text-uppercase mb-0">Nueva Cuenta</h6>
                            </div>
                            <div class="block-body">
                                <p class="lead">¿No tiene una cuenta?</p>
                                <p class="text-muted">Cree una cuenta para poder realizar compras en nuestro sitio.</p>
                                <hr>
                                <form action="customer-orders.html" method="get">
                                    <div class="mb-4">
                                        <label class="form-label" for="name">Nombre</label>
                                        <input class="form-control" id="name" type="text" placeholder="Nombre Completo"
                                            autocomplete="off" v-model="cliente.nombres">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="email">Correo Electrónico</label>
                                        <input class="form-control" id="email" type="text"
                                            placeholder="nombre@extension.com" autocomplete="off"
                                            v-model="cliente.email">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="password">Contraseña</label>
                                        <input class="form-control" id="password" type="password"
                                            placeholder="Ingrese su contraseña" autocomplete="off"
                                            v-model="cliente.password">
                                    </div>
                                    <div class="alert alert-danger d-flex align-items-center mb-4" role="alert"
                                        v-if="msm_error">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor"
                                            class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                                            viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path
                                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div>{{ msm_error }}</div>
                                    </div>
                                    <div class="mb-4 text-center">
                                        <button class="btn btn-outline-dark" type="button" 
                                            v-on:click="validar_registro()"><i
                                                class="far fa-user me-2"></i>Registrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Swal from 'sweetalert';

import axios from 'axios';

export default {
    name: 'LoginApp',
    data() {
        return {
            cliente: {},
            msm_error: '',
            msm_error_login: '',
            email: '',
            password: ''
        }
    },
    methods: {
        validar_registro() {
            if (!this.cliente.nombres) {
                this.msm_error = 'Ingrese los nombres.';
            } else if (!this.cliente.email) {
                this.msm_error = 'Ingrese un correo electrónico.';
            } else if (!this.cliente.password) {
                this.msm_error = 'Ingrese una contraseña.';
            } else {
                this.msm_error = '';
                Swal('Registrado', 'El registro se realizó correctamente', 'success'); // Mostrar mensaje de registro exitoso    
                axios.post(this.$url + '/registro_cliente_ecommerce', this.cliente, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((result) => {
                    if (result.data.message) {
                        this.msm_error = result.data.message;
                        
                    } else {
                        this.msm_error = '';
                        console.log(result);
                         Swal('No Registrado', 'El registro no se realizó', 'info'); // Mostrar mensaje de registro no realizado 
              
                    }
                });
            }
            console.log(this.cliente);
        },
        login() {
            if (!this.email) {
                this.msm_error_login = 'Ingrese un correo electrónico.';
            } else if (!this.password) {
                this.msm_error_login = 'Ingrese una contraseña.';
            } else {
                this.msm_error_login = '';

                let data = {
                    email: this.email,
                    password: this.password
                };
             Swal('Sesion', 'Inicio de sesion correcto', 'success'); // Mostrar mensaje de registro exitoso       
                axios.post(this.$url + '/login_cliente', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((result) => {
                    console.log(result);
                    if (result.data.message) {
                        this.msm_error_login = result.data.message;
                    } else {
                        this.$store.dispatch('saveToken', result.data.token);
                        this.$router.push({ name: 'home' });
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }
        },mostrarAlerta() {
      Swal('Correcto', 'Registro completado', 'success');
    },mostrarAlerta2() {
      Swal('Incorrecto', 'Registro no completado', 'success');
    }
    }
}
</script>