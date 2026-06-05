import { useEventListener } from '@vueuse/core'

export function useScrollSpy(
  hrefs: MaybeRefOrGetter<readonly string[]>,
  getOffset: MaybeRefOrGetter<number> = 80,
) {
  const activeHref = ref('')

  function update() {
    const ids = toValue(hrefs)
    const offset = toValue(getOffset)
    const scrollY = window.scrollY
    const triggerLine = scrollY + offset

    let current: string | undefined
    for (const href of ids) {
      const id = href.replace(/^#/, '')
      const el = document.getElementById(id)
      if (!el) continue

      const top = el.getBoundingClientRect().top + scrollY
      if (top <= triggerLine) {
        current = href
      }
    }

    activeHref.value = current ?? ''
  }

  let ticking = false
  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      update()
      ticking = false
    })
  }

  onMounted(() => {
    update()
    useEventListener(window, 'scroll', onScroll, { passive: true })
    useEventListener(window, 'resize', onScroll, { passive: true })

    if (window.location.hash) {
      requestAnimationFrame(update)
      setTimeout(update, 150)
    }
  })

  return { activeHref, update }
}
