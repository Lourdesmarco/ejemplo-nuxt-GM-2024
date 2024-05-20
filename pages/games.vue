<template>
    <div>
        <header-image :source="'https://picsum.photos/1024/201?grayscale'" />
        <main class="container">
            <h1>Traer juegos de una API</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium minima, quis porro sint eveniet nobis sequi mollitia quibusdam consectetur culpa, earum maxime omnis pariatur vero cum, suscipit tenetur velit.
            </p>
            <section class="container cards-section" v-if="data.results != null">
                <game-card 
                    v-for="(game, index) in data.results"
                    :key="index"
                    :game="game"
                    :count="index"
                    />
            </section>
        </main>
    </div>
</template>


<script setup>
  const { data } = useFetch('https://api.rawg.io/api/games?key=d45f1e8e88654d059e56f179e27d9327')
</script>


