<script setup lang="ts">
// A cone and a cylinder with the same base and the same height. A button pours the full cone into the cylinder; the
// water level rises by one third each time. Logic in Umschuetten.ts. It shows and checks nothing: the exercises stand below.
import { computed, ref } from "vue";
import { satz, wasserHoehe } from "./Umschuetten.ts";

const props = defineProps<{
  /** The label of the button that pours once more, and of the button that starts again. */
  weiter: string;
  neu: string;
  /** The sentence shown instead of the pouring button once the cylinder is full. */
  voll: string;
  /** The sentence under the figure, with {k} and {rest}. */
  ergebnis: string;
  /** What the figure shows, for screen readers, with {k}. */
  bild: string;
}>();

const k = ref(0);
const H = 90;
const wasser = computed(() => wasserHoehe(k.value, H));
const text = computed(() => satz(k.value, props.ergebnis));
const alt = computed(() => props.bild.replace("{k}", String(k.value)));
function giessen(): void {
  if (k.value < 3) k.value += 1;
}
</script>

<template>
  <div class="umschuetten">
    <svg viewBox="0 0 300 130" role="img" :aria-label="alt" class="us-bild">
      <!-- the cone, tip down; it is filled again before every pouring -->
      <polygon points="30,20 130,20 80,110" fill="none" stroke="var(--page-text)" stroke-width="1.5" />
      <polygon
        points="30,20 130,20 80,110"
        fill="var(--page-accent)"
        fill-opacity="0.45"
        stroke="var(--page-text)"
        stroke-width="1.5"
      />
      <!-- the cylinder -->
      <rect x="180" y="20" width="100" height="90" fill="none" stroke="var(--page-text)" stroke-width="1.5" />
      <rect
        v-if="k > 0"
        x="180"
        :y="110 - wasser"
        width="100"
        :height="wasser"
        fill="var(--page-accent)"
        fill-opacity="0.45"
        stroke="var(--page-accent)"
        stroke-width="1.5"
      />
      <line x1="180" y1="80" x2="280" y2="80" stroke="var(--page-muted)" stroke-width="1" stroke-dasharray="4 3" />
      <line x1="180" y1="50" x2="280" y2="50" stroke="var(--page-muted)" stroke-width="1" stroke-dasharray="4 3" />
    </svg>
    <div class="us-knoepfe">
      <button v-if="k < 3" type="button" class="us-knopf" @click="giessen">{{ weiter }}</button>
      <strong v-else class="us-voll">{{ voll }}</strong>
      <button v-if="k > 0" type="button" class="us-knopf us-zweit" @click="k = 0">{{ neu }}</button>
    </div>
    <p class="us-ergebnis" aria-live="polite">{{ text }}</p>
  </div>
</template>

<style scoped>
.umschuetten {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
  max-width: 100%;
}
.us-bild {
  width: min(100%, 24rem);
  height: auto;
}
.us-knoepfe {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.us-knopf {
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--page-accent);
  border-radius: 0.375rem;
  background: var(--page-accent);
  color: var(--page-on-accent);
  font: inherit;
  cursor: pointer;
}
.us-zweit {
  background: var(--page-background);
  color: var(--page-accent);
}
.us-knopf:focus-visible {
  outline: 3px solid var(--page-text);
  outline-offset: 2px;
}
.us-voll {
  align-self: center;
}
.us-ergebnis {
  margin: 0;
  overflow-wrap: anywhere;
}
</style>
