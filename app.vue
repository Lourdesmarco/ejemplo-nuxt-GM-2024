
<template>
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" sizes="any">
      <link rel="icon" href="/logo.svg" type="image/svg+xml">
      <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    </Head>
    <NuxtPwaAssets />
    <NuxtLoadingIndicator />
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