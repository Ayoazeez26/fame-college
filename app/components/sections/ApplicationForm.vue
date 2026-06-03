<script setup lang="ts">
import { ageOptions, gradeOptions, programOptions } from '~/data/site'

const submitted = ref(false)

function onSubmit(e: Event) {
  e.preventDefault()
  submitted.value = true
}
</script>

<template>
  <form class="space-y-4" @submit="onSubmit">
    <div v-if="submitted" class="rounded-xl bg-green/10 px-4 py-3 text-sm text-green">
      Thank you! We will be in touch within 24 hours.
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">First Name</span>
        <input
          type="text"
          name="firstName"
          required
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
          placeholder="First name"
        >
      </label>
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Email</span>
        <input
          type="email"
          name="email"
          required
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
          placeholder="you@email.com"
        >
      </label>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Phone No.</span>
        <input
          type="tel"
          name="phone"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
          placeholder="Phone number"
        >
      </label>
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Programme of Interest</span>
        <select
          name="program"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
        >
          <option value="">Select programme</option>
          <option v-for="opt in programOptions" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </label>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Age</span>
        <select
          name="age"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
        >
          <option value="">Select age</option>
          <option v-for="opt in ageOptions" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </label>
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Grade Level</span>
        <select
          name="grade"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
        >
          <option value="">Select grade</option>
          <option v-for="opt in gradeOptions" :key="opt" :value="opt">
            {{ opt }}
          </option>
        </select>
      </label>
    </div>

    <label class="block">
      <span class="mb-1.5 block text-sm font-medium text-navy">Address</span>
      <input
        type="text"
        name="address"
        class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
        placeholder="Address"
      >
    </label>

    <label class="block">
      <span class="mb-1.5 block text-sm font-medium text-navy">Message</span>
      <textarea
        name="message"
        rows="4"
        class="w-full resize-y rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green"
        placeholder="Tell us about your goals"
      />
    </label>

    <AppButton type="submit" variant="primary" icon="arrow" block>
      Submit Application
    </AppButton>

    <p class="text-center text-xs text-gray-body">
      By submitting, you agree to be contacted by Fame College International
      School regarding your enquiry.
    </p>
  </form>
</template>
