<script setup lang="ts">
import { ageOptions, gradeOptions, programOptions } from '~/data/site'

const config = useRuntimeConfig()

const submitted = ref(false)
const loading = ref(false)
const errorMessage = ref('')

async function onSubmit(e: Event) {
  e.preventDefault()
  errorMessage.value = ''

  const formUrl = config.public.applicationFormUrl
  if (!formUrl) {
    errorMessage.value =
      'Application form is not configured yet. Please contact us directly.'
    return
  }

  const form = e.target as HTMLFormElement
  const data = new FormData(form)

  const payload = {
    secret: config.public.applicationFormSecret || '',
    firstName: String(data.get('firstName') || '').trim(),
    email: String(data.get('email') || '').trim(),
    phone: String(data.get('phone') || '').trim(),
    program: String(data.get('program') || '').trim(),
    age: String(data.get('age') || '').trim(),
    grade: String(data.get('grade') || '').trim(),
    address: String(data.get('address') || '').trim(),
    message: String(data.get('message') || '').trim(),
  }

  loading.value = true

  try {
    const response = await fetch(formUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })

    const result = (await response.json()) as { ok?: boolean; error?: string }

    if (!response.ok || !result.ok) {
      throw new Error(result.error || 'Submission failed. Please try again.')
    }

    submitted.value = true
    form.reset()
  } catch (err) {
    errorMessage.value =
      err instanceof Error
        ? err.message
        : 'Something went wrong. Please try again or contact us directly.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="space-y-4" @submit="onSubmit">
    <div
      v-if="submitted"
      class="rounded-xl bg-green/10 px-4 py-3 text-sm text-green"
      role="status"
    >
      Thank you! We received your application and sent a confirmation to your
      email. We will be in touch within 24 hours.
    </div>

    <div
      v-if="errorMessage"
      class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
      role="alert"
    >
      {{ errorMessage }}
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">First Name</span>
        <input
          type="text"
          name="firstName"
          required
          :disabled="loading"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
          placeholder="First name"
        >
      </label>
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Email</span>
        <input
          type="email"
          name="email"
          required
          :disabled="loading"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
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
          :disabled="loading"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
          placeholder="Phone number"
        >
      </label>
      <label class="block">
        <span class="mb-1.5 block text-sm font-medium text-navy">Programme of Interest</span>
        <select
          name="program"
          :disabled="loading"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
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
          :disabled="loading"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
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
          :disabled="loading"
          class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
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
        :disabled="loading"
        class="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
        placeholder="Address"
      >
    </label>

    <label class="block">
      <span class="mb-1.5 block text-sm font-medium text-navy">Message</span>
      <textarea
        name="message"
        rows="4"
        :disabled="loading"
        class="w-full resize-y rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-green focus:ring-1 focus:ring-green disabled:opacity-60"
        placeholder="Tell us about your goals"
      />
    </label>

    <AppButton
      type="submit"
      variant="primary"
      icon="arrow"
      block
      :disabled="loading"
    >
      {{ loading ? 'Submitting…' : 'Submit Application' }}
    </AppButton>

    <p class="text-center text-xs text-gray-body">
      By submitting, you agree to be contacted by Fame College International
      School regarding your enquiry.
    </p>
  </form>
</template>
