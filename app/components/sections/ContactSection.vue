<script setup lang="ts">
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-vue-next'
import { address, email, phones } from '~/data/site'
</script>

<template>
  <section id="contact" class="py-16 lg:py-24">
    <div class="section-container">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionEyebrow label="GET IN TOUCH" />
          <h2
            class="mt-4 font-serif text-3xl font-normal leading-tight text-navy sm:text-4xl"
          >
            Begin Your Child's Fame College Journey.
          </h2>
          <p class="mt-5 text-base text-gray-body">
            Speak with an admissions advisor or send us a message — we'll respond
            within one business day.
          </p>

          <div class="mt-8 space-y-3">
            <div
              class="flex gap-4 rounded-2xl border border-border bg-white p-5"
            >
              <span
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-bg text-white"
              >
                <Phone class="size-5" aria-hidden="true" />
              </span>
              <div>
                <p class="font-semibold text-navy">Call Us</p>
                <p class="mt-1 text-sm text-gray-body">
                  {{ phones.join(' • ') }}
                </p>
              </div>
            </div>

            <div
              class="flex gap-4 rounded-2xl border border-border bg-white p-5"
            >
              <span
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-bg text-white"
              >
                <Mail class="size-5" aria-hidden="true" />
              </span>
              <div>
                <p class="font-semibold text-navy">Email</p>
                <a
                  :href="`mailto:${email}`"
                  class="mt-1 block text-sm text-gray-body hover:text-green"
                >
                  {{ email }}
                </a>
              </div>
            </div>

            <a
              href="#"
              class="relative flex gap-4 rounded-2xl bg-green p-5 text-white transition hover:bg-green/90"
            >
              <span
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white"
              >
                <MessageCircle class="size-5" aria-hidden="true" />
              </span>
              <div class="flex-1">
                <p class="font-semibold">WhatsApp</p>
                <p class="mt-1 text-sm text-white/90">Chat with admissions</p>
              </div>
              <ArrowUpRight class="absolute right-5 top-5 size-5" aria-hidden="true" />
            </a>

            <div
              class="flex gap-4 rounded-2xl border border-border bg-white p-5"
            >
              <span
                class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-bg text-white"
              >
                <MapPin class="size-5" aria-hidden="true" />
              </span>
              <div>
                <p class="font-semibold text-navy">Visit Campus</p>
                <p class="mt-1 text-sm leading-relaxed text-gray-body">
                  {{ address }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-3xl border border-border bg-white p-6 shadow-lg sm:p-8">
          <h3 class="font-serif text-2xl font-normal text-navy">
            Application Form
          </h3>
          <p class="mt-2 text-sm text-gray-body">
            Fill in your details and we'll be in touch within 24 hours.
          </p>
          <div class="mt-8">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
