<script setup lang="ts">
// The unit circle (radius 1). A slider sets the angle in steps of 15°; the arc it cuts out is drawn thick, and the text
// gives its length: the angle in radians, as a decimal number and as a multiple of π. The point P at the end of the arc is marked. Logic in Einheitskreis.ts. It shows and checks nothing: the exercises stand below.
import { computed, ref } from "vue";
import { WINKEL, bildPunkt, bogenPfad, bogen, exakt, exaktWorte, zahl } from "./Einheitskreis.ts";

const props = defineProps<{
  /** The label of the slider. */
  label: string;
  /** The sentence for the arc: "Winkel {grad}°: Bogenlänge {bogen}", with {grad} and {bogen}. */
  ergebnis: string;
  /** The words before the multiple of π ("Als Vielfaches von π:"). */
  exaktText: string;
  /** What the figure shows, for screen readers, with {grad}. */
  bild: string;
}>();

const stufe = ref(2);
const grad = computed(() => WINKEL[stufe.value] ?? 30);
const R = 110;
const C = 150;
const pfad = computed(() => bogenPfad(grad.value, R, C, C));
const p = computed(() => bildPunkt(grad.value, R, C, C));
const bruch = computed(() => exakt(grad.value));
const oben = computed(() => (bruch.value.zaehler === 1 ? "π" : `${bruch.value.zaehler} π`));
const worte = computed(() => exaktWorte(grad.value));
const text = computed(() =>
  props.ergebnis.replace("{grad}", String(grad.value)).replace("{bogen}", zahl(bogen(grad.value), 3)),
);
const alt = computed(() => props.bild.replace("{grad}", String(grad.value)));
</script>

<template>
  <div class="einheitskreis">
    <label class="ek-regler">
      <span
        >{{ label }}: <strong>{{ grad }}°</strong></span
      >
      <input
        v-model.number="stufe"
        type="range"
        min="0"
        :max="WINKEL.length - 1"
        step="1"
        :aria-valuetext="`${grad}°`"
      />
    </label>
    <svg viewBox="0 0 300 300" role="img" :aria-label="alt" class="ek-bild">
      <line x1="20" y1="150" x2="280" y2="150" stroke="var(--page-muted)" stroke-width="1" />
      <line x1="150" y1="20" x2="150" y2="280" stroke="var(--page-muted)" stroke-width="1" />
      <circle cx="150" cy="150" r="110" fill="none" stroke="var(--page-text)" stroke-width="1.5" />
      <path v-if="grad > 0" :d="pfad" fill="none" stroke="var(--page-wrong)" stroke-width="6" stroke-linecap="butt" />
      <line :x1="150" :y1="150" :x2="p[0]" :y2="p[1]" stroke="var(--page-accent)" stroke-width="2" />
      <circle :cx="p[0]" :cy="p[1]" r="5" fill="var(--page-accent)" />
      <text x="190" y="143" font-size="13" fill="var(--page-text)">r = 1</text>
    </svg>
    <p class="ek-ergebnis" aria-live="polite">
      {{ text }}.
      {{ exaktText }}
      <span v-if="bruch.zaehler === 0">0</span>
      <span v-else-if="bruch.nenner === 1" role="math" :aria-label="worte">{{ oben }}</span>
      <span v-else class="ek-bruch" role="math" :aria-label="worte">
        <span class="ek-zaehler">{{ oben }}</span>
        <span class="ek-nenner">{{ bruch.nenner }}</span> </span
      >.
    </p>
  </div>
</template>

<style scoped>
.einheitskreis {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  max-width: 100%;
}
.ek-regler {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.ek-regler input {
  width: 100%;
  min-height: 2.75rem;
}
.ek-bild {
  width: min(100%, 20rem);
  height: auto;
}
.ek-ergebnis {
  margin: 0;
  overflow-wrap: anywhere;
}
.ek-bruch {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  line-height: 1.2;
}
.ek-zaehler {
  padding: 0 0.2em;
  border-bottom: 1px solid currentcolor;
}
.ek-nenner {
  padding: 0 0.2em;
}
</style>
