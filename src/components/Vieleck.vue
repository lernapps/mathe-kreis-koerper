<script setup lang="ts">
// A circle with a regular polygon inside and one outside. A slider sets the number of corners; the text below gives the
// two bounds for π. A magnifier view shows the top of the circle enlarged, so the learner sees how the polygons
// squeeze the circle. Logic in Vieleck.ts. It shows and checks nothing: the exercises stand below it.
import { computed, ref } from "vue";
import { STUFEN, eckenAussen, eckenInnen, punkte, satz } from "./Vieleck.ts";

const props = defineProps<{
  /** The label of the slider. */
  label: string;
  /** The sentence for the bounds, with {n}, {innen} and {aussen}. */
  ergebnis: string;
  /** What the figure shows, for screen readers, with {n}. */
  bild: string;
  /** The name of the magnifier view. */
  lupe: string;
  /** A sentence shown from 48 corners on: the picture no longer shows the difference, the numbers do. */
  fein: string;
}>();

const stufe = ref(0);
const n = computed(() => STUFEN[stufe.value] ?? 6);
const innen = computed(() => punkte(eckenInnen(n.value), 60, 80, 80));
const aussen = computed(() => punkte(eckenAussen(n.value), 60, 80, 80));
// the magnifier: a window on the top of the circle, 0.8 wide, drawn in units of the radius
const lupeInnen = computed(() => punkte(eckenInnen(n.value), 100, 0, 0));
const lupeAussen = computed(() => punkte(eckenAussen(n.value), 100, 0, 0));
const text = computed(() => satz(n.value, props.ergebnis));
</script>

<template>
  <div class="vieleck">
    <label class="vieleck-regler">
      <span
        >{{ label }}: <strong>{{ n }}</strong></span
      >
      <input v-model.number="stufe" type="range" min="0" :max="STUFEN.length - 1" step="1" :aria-valuetext="`${n}`" />
    </label>
    <div class="vieleck-bilder">
      <svg viewBox="0 0 160 160" role="img" :aria-label="bild.replace('{n}', String(n))" class="vieleck-gross">
        <circle cx="80" cy="80" r="60" fill="none" stroke="var(--page-text)" stroke-width="1.5" />
        <polygon :points="aussen" fill="none" stroke="var(--page-wrong)" stroke-width="1.5" stroke-dasharray="5 3" />
        <polygon :points="innen" fill="none" stroke="var(--page-accent)" stroke-width="1.5" />
        <rect x="53" y="12.8" width="54" height="24" fill="none" stroke="var(--page-muted)" stroke-width="1" />
      </svg>
      <svg viewBox="-45 -112 90 40" role="img" :aria-label="lupe" class="vieleck-lupe">
        <title>{{ lupe }}</title>
        <circle cx="0" cy="0" r="100" fill="none" stroke="var(--page-text)" stroke-width="1" />
        <polygon :points="lupeAussen" fill="none" stroke="var(--page-wrong)" stroke-width="1" stroke-dasharray="5 3" />
        <polygon :points="lupeInnen" fill="none" stroke="var(--page-accent)" stroke-width="1" />
      </svg>
    </div>
    <p class="vieleck-ergebnis" aria-live="polite">{{ text }}</p>
    <p v-if="n >= 48" class="vieleck-ergebnis">{{ fein }}</p>
  </div>
</template>

<style scoped>
.vieleck {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  max-width: 100%;
}
.vieleck-regler {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.vieleck-regler input {
  accent-color: var(--page-accent);
  width: 100%;
  min-height: 2.75rem;
}
.vieleck-bilder {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: flex-start;
}
.vieleck-gross {
  width: min(100%, 16rem);
  height: auto;
}
.vieleck-lupe {
  width: min(100%, 14rem);
  height: auto;
  border: 2px solid var(--page-border);
  border-radius: 0.5rem;
  background: var(--page-surface);
}
.vieleck-ergebnis {
  margin: 0;
  overflow-wrap: anywhere;
}
</style>
