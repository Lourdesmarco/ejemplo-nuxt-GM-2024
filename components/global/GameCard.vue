<template>
    <NuxtLink :to="`/gamesdet/${game.id}`">
        <article>
            <img :src="`https://picsum.photos/500/30${count}`" :alt="game.name">
            <div>
                <p>{{game.name}}</p>
                <p>{{game.updated}}</p>
            </div>    
        </article>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        game: {
            type: Object,
            required: false
        },
        count: {
            type: Number,
        }
    });
    const { game } = props;
    const { count } = props;
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