---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: explore
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: {}
---

# Plan: mathe-kreis-koerper, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit.*

## Goal

Lernende der Klassen 9-10 berechnen Umfang und Fläche des Kreises, geben Winkel im Bogenmaß an, berechnen Volumen und
Oberfläche von Zylinder, Pyramide, Kegel und Kugel und Strecken und Winkel in Dreiecken und Vielecken. Sie entdecken
π und das versteckte rechtwinklige Dreieck selbst (Annähern, Umlegen, Zerlegen), bevor sie rechnen.

## Key decisions

- Archetype `explainer`: Lernende brauchen Herleitungen, Bilder und Aufgaben dazwischen; Komponenten (Vieleck, Torte,
  Einheitskreis, Kegel-Umschütten) nur dort, wo kein Block reicht, je mit statischer Form, `nojs` und Tastatur.
- Strang `mathematik/groessen-und-messen`, Format 2 (Issue #429).
- Zwei Kapitel wie im Issue; je ein Recap am Kapitelanfang (regeln.md, Abschnitt 7) mit Komponente `Kurztest`. (guess: Recap
  von Kapitel 2 auf zwei Seiten geteilt, Körper / Dreiecke, damit es je Baustein höchstens ein Bildschirm bleibt.)
- Rahmen: Schulhof-Messungen (Baumhöhe, Flussbreite) als reale Fälle ohne erfundene Kinder (Klasse 10: Fall mit Daten). (guess)
- Keine `links:` an Aufgaben; verlangt das Werkzeug einen, zeigt er auf die Kartenseite des Bausteins (Fund W4/W45).

## Notes

**Strang:** `mathematik/groessen-und-messen`, Stufen 9-10. Karte gelesen (mathematik.json, 2026-11-23); alle fünf Bausteine
sind Lücken (`practisedBy` leer).

**Bausteine nach Kapitel** (Name und Ich-kann-Satz der Karte, nicht umformuliert):

| Kap. | id | Schritt | öffnet |
|---|---|---|---|
| 1 | `kreis-umfang-flaeche` – Kreisumfang und Kreisfläche: „Ich kann Umfang und Flächeninhalt eines Kreises berechnen und die Zahl Pi am Kreis erklären.“ | 1 | 5 |
| 1 | `bogenmass` – Bogenmaß: „Ich kann Winkel im Bogenmaß angeben und zwischen Grad- und Bogenmaß wechseln.“ | 4 | 2 |
| 2 | `volumen-oberflaeche-zylinder` – „Ich kann Volumen und Oberflächeninhalt von Zylindern berechnen.“ | 2 | 1 |
| 2 | `volumen-oberflaeche-pyramide-kegel-kugel` – „… von Pyramide, Kegel und Kugel berechnen.“ | 3 | 0 |
| 2 | `berechnungen-dreiecke-vielecke` – „Ich kann Streckenlängen und Winkel in Dreiecken und Vielecken mit Pythagoras, Ähnlichkeit und Trigonometrie berechnen.“ | 4 | 0 |

**Voraussetzungen von außen (Recap, in der Reihenfolge der `requires`):**
- Kap. 1: `flaeche-umfang-quadrat-rechteck` (#398), `dezimalbrueche-rechnen` (#389), `trigonometrie` (#399, für das Bogenmaß).
- Kap. 2: `volumen-oberflaeche-prisma` (#398), `satz-des-pythagoras`, `grundkoerper-pyramide-kegel-kugel` (#432),
  `strahlensaetze`, `trigonometrie` (kurz, ohne den Begriff erneut als `definition`, Fund W34) (#399).
- Innerhalb des Strangs liegt `kreis-umfang-flaeche` vor `bogenmass`, `volumen-oberflaeche-zylinder` vor Pyramide/Kegel/Kugel.

**Bestand:** keiner (leeres Repo). Nichts zu überschreiben.

**Abhängigkeiten für „Veröffentlichen“:** #389, #398, #399, #432 zuerst; #396 baut auf Baustein `bogenmass` auf.

**Seitenentwurf (Baustein → Seite)** (Richtung, im Plan-Checkpoint zu bestätigen):
1. `kreis/start` Recap Kap. 1 (3 Bausteine, je Kurztest).
2. `kreis/pi` · kreis-umfang-flaeche: π durch Annähern (Vielecke innen und außen; Schnur an Dose/Teller: U : d). Komponente
   `Vieleck`.
3. `kreis/umfang` · kreis-umfang-flaeche: U = π · d = 2 · π · r, rechnen, Rückwärts (r aus U).
4. `kreis/flaeche` · kreis-umfang-flaeche: Tortenstücke zum Fast-Rechteck, A = π · r², Fehlertyp d statt r.
5. `bogenmass/einheitskreis` · bogenmass: Bogenlänge am Einheitskreis als Winkelmaß (neue Einheit).
6. `bogenmass/umrechnen` · bogenmass: Grad ↔ Bogenmaß, Taschenrechner-Modus (RAD/DEG), Verbindung zu sin.
7. `koerper/start` Recap Kap. 2a (Prisma, Grundkörper, Pythagoras); 8. `zylinder/zylinder` · Zylinder (Prisma mit Kreis,
   Volumen, Mantel, Oberfläche); 9. `koerper/pyramide-kegel` · Pyramide, Kegel: Höhe, Radius, Mantellinie als verstecktes
   Dreieck; Drittel (Umschütten); 10. `koerper/kugel` · Kugel nach Archimedes (V, O).
11. `dreiecke/start` Recap Kap. 2b (Strahlensätze, Trigonometrie); 12. `dreiecke/schulhof` · berechnungen-dreiecke-vielecke:
   Baumhöhe (Winkel + Abstand), Flussbreite (Strahlensatz/Winkel); 13. `dreiecke/vielecke` · reguläre Vielecke: Mittelpunktsdreieck,
   Seiten, Winkel, Fläche.
Jeder Baustein bekommt mindestens drei Aufgaben (steigend; die erste ohne Vorwissen aus dem Kapitel), Rückmeldung mit Grund
und Fehlertyp, nach dem zweiten Fehlversuch der Weg, Zufallswerte mit festem Seed (`generated`), Rechenprobe im Test.

**Üben (Muster):** berechnen mit Einheit und Rundung (`generated`, `mistakes`: d statt r, U statt A, Grad statt Bogenmaß, Taschenrechner
RAD/DEG, Mantellinie statt Höhe, 1/3 vergessen); erklären (Auswahl mit Begründung); ablesen (Schaubild); Zuordnung Grad ↔ Bogenmaß.

**Abgrenzung (Issue):** wir rechnen. Prisma und Quader wurden in #398 geübt (Recap), Körper bauen ohne Rechnen in #432, Sätze
(Pythagoras, Strahlensätze, Trigonometrie) in #399, Sinus- und Kosinusfunktion in #396. Kein Beweis, dass π irrational ist;
kein Integral für Kugel (Archimedes/Cavalieri als Bild).

**Technische Regeln:** Schreibweisen nach regeln.md 2 (Komma, −, ·, :, ∠ statt `\angle`, Einheiten mit geschütztem
Leerzeichen, keine gruppierten Zahlen in Überschriften); Komponenten mit Tastatur, Textalternative, statischer Form;
Kurztest-Vorlage mit der Korrektur W42 (`min-width: 0`) kopieren; Bruchformen in Kurztest-Rückmeldungen `a/b`, gezählt (W28).

**Quellen:** nur Karte (mathematik.json, geöffnet), eigene Herleitungen und Aufgaben, eigene SVG. KMK-Bildungsstandards (2022)
und Hessisches Kerncurriculum: noch nicht geöffnet, **nicht geprüft**; sie sind nicht nötig, die Karte gibt die Reihenfolge.
Fakten (zum Beispiel Archimedes-Verhältnis 2 : 3, Bogenmaß-Definition) werden selbst hergeleitet und vom fachlichen Prüfer
nachgerechnet. Lizenz Inhalte: CC BY 4.0, Code MIT (nach Skill).

**Wie Lernende dahin kommen (je Baustein) und welcher Fehler die Rückmeldung fängt:**
- `kreis-umfang-flaeche`: π aus dem Verhältnis U : d messen und mit Vielecken einschließen (herleiten), Torte → Fast-Rechteck
  (A = π · r · r). Fehler: Durchmesser statt Radius in A; U und A verwechselt; π = 3,14 als exakt; Einheit cm statt cm².
- `bogenmass`: Bogenlänge am Einheitskreis (r = 1) als Winkelmaß; 360° ↔ 2π. Fehler: Taschenrechner in DEG statt RAD,
  ·π:180 mit : π · 180 vertauscht, Bogenmaß ohne π falsch gekürzt.
- `volumen-oberflaeche-zylinder`: Prisma mit Kreis als Grundfläche, Mantel abrollen zum Rechteck (2 · π · r mal h). Fehler: d statt r,
  Mantel ohne Deckel/Boden, Oberfläche und Volumen verwechselt.
- `volumen-oberflaeche-pyramide-kegel-kugel`: Umschütten Kegel → Zylinder (Drittel), verstecktes Dreieck (h, r, s) für s, Kugel nach
  Archimedes (V_Kugel : V_Kegel : V_Zylinder = 2 : 1 : 3 bei Kegel/Zylinder um die Kugel). Fehler: Höhe statt Mantellinie in der
  Mantelfläche, 1/3 vergessen, r³ vs. r².
- `berechnungen-dreiecke-vielecke`: im Bild das rechtwinklige Dreieck suchen, entscheiden Pythagoras / Strahlensatz / sin, cos, tan.
  Fehler: falsche Kathete, Taschenrechner-Modus, Strahlensatz mit falschem Verhältnis, Winkel im Vieleck (Zentriwinkel statt halber).

**Offene Punkte / Funde:** K-Funde keine neuen. Die Karte nennt bei `bogenmass` `trigonometrie` als Voraussetzung, im Recap
Kap. 1 begründet (Verbindung zu sin im Bogenmaß-Modus).

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [ ] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [ ] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

- Goal: Der Auftrag (Issue #429, Orchestrator in Vertretung des Menschen): „Ich verstehe, wie man Größen bestimmt, die man nicht auslegen
  kann: den Kreis durch Annähern, Strecken und Winkel durch ein verstecktes rechtwinkliges Dreieck.“
- Learners: Mathematik, Klassen 9-10; Vorwissen: Fläche/Umfang Rechteck, Dezimalbrüche, Prisma, Pythagoras, Strahlensätze,
  Trigonometrie (alles im Recap).
- Model and focus: Auftrag: Annähern und das versteckte Dreieck tragen den Explainer; Visualisierungen und Aufgaben. Vorbild: andere Mathe-Explainer des Epics (Muster siehe Orchestrator).
- Hurdles: Siehe Notes („Wie Lernende dahin kommen“); Messungen am Schulhof (Baum, Fluss) geben die Fälle.
- Content: Claude schreibt, aus Karte und eigenen Herleitungen; kein fremdes Material (regeln.md 4).
- Amount: 2 Kapitel, 5 Bausteine, ca. 13 Seiten wie im Seitenentwurf; mindestens 3 Aufgaben je Baustein.
- Languages: Deutsch (guess; Issue nennt keine zweite Sprache).
- Look and feel: fixed by the archetype (ruhig wie ein Arbeitsblatt, Laufzeit-Look); kein Punktestand, keine Rangliste (regeln.md 3).
- Terms: Wörter der Karte (Kreisumfang, Kreisfläche, Bogenmaß, Mantellinie …), Einführung am Beispiel; „Zahlengerade“ nur wenn nötig.
- Finding the app: Kreis berechnen, Umfang, Fläche, π, Bogenmaß, Zylinder, Kegel, Kugel, Volumen, Oberfläche, Pyramide, Trigonometrie Klasse 9 10.

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [ ] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [ ] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [ ] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [ ] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [ ] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [ ] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [ ] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.

### Content method

<!-- One line each: the patterns and where; the figures and how they are made; the data files; each component, what it
checks and what it cannot; how a later agent adds a chapter. It becomes the content guide in Code. -->
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [ ] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [ ] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [ ] Load skill `lernapps-explainer`.
- [ ] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [ ] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
<!-- tasks: pattern: the one page or screen that is the pattern for the others -->
- [ ] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
<!-- tasks: pages: the other pages or screens, after the pattern -->
- [ ] Update the content guide so that it describes the app as built (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [ ] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [ ] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [ ] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->
