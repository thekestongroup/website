<script setup lang="ts">
import { AppLauncher, Footer, Header, Link } from '@thekestongroup/ui'

// Pages on this site, so these stay in the same tab.
const footer = {
  appName: 'The Keston Group',
  version: __APP_VERSION__,
  build: __APP_BUILD__ || undefined,
  links: [
    { label: 'Help & support', href: '/help/', newTab: false },
    { label: 'Privacy Policy', href: '/privacy/', newTab: false },
    { label: 'Terms & Conditions', href: '/terms/', newTab: false }
  ]
}
</script>

<template>
  <div class="flex min-h-dvh flex-col bg-background text-black">
    <Header title="The Keston Group" title-to="/" :sign-in="false" sticky>
      <nav class="ml-6 hidden items-center gap-5 sm:flex" aria-label="Main">
        <Link href="/id/" :icon="false">Keston ID</Link>
        <Link href="/help/" :icon="false">Help</Link>
      </nav>
      <template #trailing><AppLauncher /></template>
    </Header>
    <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
      <slot />
    </main>
    <Footer v-bind="footer" />
  </div>
</template>
