<template>
    <div>
        <form @submit.prevent="submitForm" class="modal">
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="formData.name" id="name" placeholder="eg. John98" />
            </div>

            <div>
                <label for="password">Email</label>
                <input type="password" v-model="formData.password" id="password" placeholder="****" />
            </div>

            
                <button type="submit">Enviar</button>
                <button @click.prevent="handleCancel">Cancelar</button>
            
        </form>
    </div>
</template>

<script setup>

    import { ref } from 'vue'
    const emit = defineEmits(["closeModal"])
    const formData = ref({
        name: '',
        password: ''
    })

    const submitForm = async () => {
        const { data: responseData } = await $fetch('https://fakestoreapi.com/auth/login', {
            method: 'post',
            body: JSON.stringify({
                username: formData.value.name,
                password: formData.value.password
            })
        })
        emit("closeModal", "logged");
    }
    const handleCancel = () => {
        emit("closeModal");
    }
</script>

<style lang="postcss">
.modal{
    position: absolute;
    right: 0;
    top: 60px;
    background-color: white;
    @apply p-4;
    button{
        @apply p-4;
    }
}
</style>