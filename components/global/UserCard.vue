<template>
    <article>
        <img :src="`https://picsum.photos/500/30${user.id}`" :alt="user.name.firstname">
        <div>
            <p>{{user.username}}</p>
            <p>{{user.password}}</p>
        </div>    
    </article>
    
</template>

<script setup>
    const props = defineProps({
        user: {
            type: Object,
            required: false
        }
    });
    const { user } = props;
</script>


<style lang="postcss">
    article{
        @apply p-1 m-2;
       
        img{
            @apply h-32 w-full;
            object-fit: cover;
        }
        button{
            @apply p-5 bg-gray-200 w-full;
            text-align: center;
        }
    }
</style>