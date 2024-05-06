<template>
    <div>
        <header-image :source="'https://picsum.photos/1024/201?grayscale'" />
        <main class="container">
            <h1>Traer usuarios de una API</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium minima, quis porro sint eveniet nobis sequi mollitia quibusdam consectetur culpa, earum maxime omnis pariatur vero cum, suscipit tenetur velit.
            </p>
            <section class="container cards-section">
                <user-card 
                    v-for="(user, index) in data"
                    :key="index"
                    :user="user"
                    />
            </section>
        </main>
    </div>
</template>


<script setup>
    const { data } = await useFetch('https://fakestoreapi.com/users', {
        lazy: true,
        server: false,
    })
</script>