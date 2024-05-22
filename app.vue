
<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPwaAssets />
    <NuxtPwaManifest />
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
    *{
      box-sizing: border-box;
      font-family: Inconsolata;
    }
    h1{
      font-size: 2em;
    }
    .container{
      @apply p-8;
      max-width: none;
    }
</style>