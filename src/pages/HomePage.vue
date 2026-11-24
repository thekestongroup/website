<script setup lang="ts">
import { Card, Link } from '@thekestongroup/ui'

// Wording is a first draft: replace with the real descriptions.
const products = [
  { name: 'Keston ID', text: 'One secure account for every Keston app.', href: '/id/', external: false },
  { name: 'Keston Admin', text: 'Manage your organisation, its people and their access.', href: 'https://admin.keston.co', external: true },
  { name: 'Keston Utilities', text: 'Small, private tools that run on your own device.', href: 'https://utilities.keston.co', external: true }
]
</script>

<template>
  <h1 class="text-4xl font-bold">The Keston Group</h1>
  <p class="mt-3 max-w-prose text-lg text-black/75">Software for organisations.</p>

  <h2 class="mt-10 text-2xl font-bold">Our products</h2>
  <ul class="mt-4 grid gap-4 sm:grid-cols-3">
    <li v-for="p in products" :key="p.name">
      <Card :title="p.name" :heading-level="3" class="h-full">
        <p class="text-sm text-black/75">{{ p.text }}</p>
        <template #footer>
          <Link :href="p.href" :new-tab="p.external">{{ p.external ? 'Open' : 'Find out more' }}</Link>
        </template>
      </Card>
    </li>
  </ul>
</template>
