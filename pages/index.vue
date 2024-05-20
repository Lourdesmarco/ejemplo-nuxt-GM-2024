<template>
    <main>
        <header-image :source="'https://picsum.photos/1024/200?grayscale'" />
        <section class="container">
            <h1>{{title}}</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium minima, quis porro sint eveniet nobis sequi mollitia quibusdam consectetur culpa, earum maxime omnis pariatur vero cum, suscipit tenetur velit.
            </p>
        </section>
        <section class="container cards-section">
            <article-card 
                v-for="(article, index) in articles"
                :key="index"
                :article="article"
                />
        </section>
    </main>
</template>

<script setup>
    import { ref } from 'vue'
    const title = ref('Página de inicio')
    const articles = ref([
        {
            id: 1,
            title: "Artículo 1",
            url: "https://picsum.photos/500/300"
        },
        {
            id: 2,
            title: "Artículo 2",
            url: "https://picsum.photos/500/301"
        },
        {
            id: 3,
            title: "Artículo 3",
            url: "https://picsum.photos/500/302"
        },
        {
            id: 4,
            title: "Artículo 4",
            url: "https://picsum.photos/500/303"
        },
    ])
</script>

<style lang="postcss">
    .cards-section{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        article{
            border: 2px solid black;
            width: 100%;
        }
        
     
    }
</style>
