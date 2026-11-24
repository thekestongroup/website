<script setup lang="ts">
import { Button } from '@thekestongroup/ui'
import Prose from '../components/Prose.vue'
// Wording is a first draft: replace with the real marketing copy.
</script>

<template>
  <Prose>
    <h1>Keston ID</h1>
    <p>One secure account for every Keston app. Sign in once, and your organisation decides who can use what.</p>
    <h2>Why Keston ID</h2>
    <ul>
      <li>One sign-in for all Keston apps.</li>
      <li>Managed by your organisation, so access follows the people who need it.</li>
      <li>Built on open standards (OpenID Connect and OAuth 2.0).</li>
    </ul>
    <p class="not-prose pt-2"><Button as="a" href="https://id.keston.co" variant="primary">Sign in</Button></p>
  </Prose>
</template>
