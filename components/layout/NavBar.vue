<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/users">Usuarios (fetch)</NuxtLink>
            </li>
        </ul>
        
        <button 
            v-if="!logged && !modalActive"
            @click="modalActive = !modalActive"
        >
            Iniciar sesión
        </button>
        <div 
            v-else-if="!modalActive"
            class="user"
            @click="panelActive = !panelActive">
            <Icon name="ph:user" size="1.2em" color="white"/>
        </div>
        <div 
            class="panel" 
            v-show="panelActive">
            <ul>
                <li 
                    class="cerrarSesion"
                    @click="logged = !logged; panelActive = !panelActive">
                    Cerrar sesión
                </li>
            </ul>
        </div>

        <Modal 
            v-show="modalActive" 
            @close-modal="closeModal"
        />
        
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    const panelActive = ref(false)
    const modalActive = ref(false)
    const logged = ref(false)

    const closeModal = (e) => {
        modalActive.value = false;
        if(e == "logged"){
            logged.value = true;
        }
    }
</script>

<style lang="postcss">
    nav{
        @apply flex items-center;
        justify-content: space-between;
        ul{
            @apply flex;
            li a{
                @apply p-4;
                display: block;
                border: 3px solid transparent;
                &:hover{
                    border-bottom: 3px solid #ccc;
                    
                }
                &.router-link-active{
                    border-bottom: 3px solid black;
                }
            }
        }
    }
    .user{
        @apply bg-blue-500 flex justify-center items-center mx-4;
        cursor: pointer;
        border-radius: 50px;
        height: 40px;
        width: 40px;
    }
    .panel{
        @apply bg-blue-500 absolute;
        height: 120px;
        width: 120px;
        z-index: 2;
        right: 0;
        top: 61px;
        .cerrarSesion{
            cursor: pointer;
        }
    }
</style>
