<template>
  <div class="max-w-6xl m-auto bg-white min-h-screen">
    <header class="mt-6 flex justify-center w-full">
      <CommonNav />
    </header>
    <main class="pt-24 px-8 md:px-20 lg:px-32">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>
