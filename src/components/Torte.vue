<script setup lang="ts">
// A circle cut into pieces. A slider sets the number of pieces; a button lays the pieces next to each other, and the
// figure becomes almost a rectangle. The text below gives its width in units of r. Logic in Torte.ts. It shows and
// checks nothing: the exercises stand below it.
import { computed, ref } from "vue";
import { STUFEN, gesamtbreite, kreisStuecke, satz, umgelegt } from "./Torte.ts";

const props = defineProps<{
  /** The label of the slider. */
  label: string;
  /** The label of the button before and after laying the pieces next to each other. */
  umlegen: string;
  zurueck: string;
  /** The sentence for the width, with {n} and {b}. */
  ergebnis: string;
  /** What the figure shows, for screen readers, with {n}. */
  bildKreis: string;
  bildRechteck: string;
}>();

const stufe = ref(0);
const liegt = ref(false);
const n = computed(() => STUFEN[stufe.value] ?? 4);
const R = 60;
const kreis = computed(() => kreisStuecke(n.value, R, 150, 70));
const breit = computed(() => gesamtbreite(n.value, R));
const flach = computed(() => umgelegt(n.value, R, (300 - breit.value) / 2, 100));
const stuecke = computed(() => (liegt.value ? flach.value : kreis.value));
const text = computed(() => satz(n.value, props.ergebnis));
const alt = computed(() => (liegt.value ? props.bildRechteck : props.bildKreis).replace("{n}", String(n.value)));
</script>

<template>
  <div class="torte">
    <label class="torte-regler">
      <span
        >{{ label }}: <strong>{{ n }}</strong></span
      >
      <input v-model.number="stufe" type="range" min="0" :max="STUFEN.length - 1" step="1" :aria-valuetext="`${n}`" />
    </label>
    <button type="button" class="torte-knopf" :aria-pressed="liegt" @click="liegt = !liegt">
      {{ liegt ? zurueck : umlegen }}
    </button>
    <svg viewBox="0 0 300 140" role="img" :aria-label="alt" class="torte-bild">
      <path
        v-for="(s, i) in stuecke"
        :key="`${liegt}-${n}-${i}`"
        :d="s.d"
        :fill="s.hoch ? 'var(--page-surface)' : 'var(--page-wrong-background)'"
        stroke="var(--page-text)"
        stroke-width="1.2"
        :stroke-dasharray="s.hoch ? '0' : '4 2'"
      />
    </svg>
    <p class="torte-ergebnis" aria-live="polite">{{ text }}</p>
  </div>
</template>

<style scoped>
.torte {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  max-width: 100%;
}
.torte-regler {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.torte-regler input {
  accent-color: var(--page-accent);
  width: 100%;
  min-height: 2.75rem;
}
.torte-knopf {
  align-self: flex-start;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--page-accent);
  border-radius: 0.375rem;
  background: var(--page-accent);
  color: var(--page-on-accent);
  font: inherit;
  cursor: pointer;
}
.torte-knopf:focus-visible {
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}
.torte-bild {
  width: 100%;
  max-width: 28rem;
  height: auto;
}
.torte-ergebnis {
  margin: 0;
  overflow-wrap: anywhere;
}
</style>
