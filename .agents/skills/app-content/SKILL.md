---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Explainer "Kreis und Körper berechnen" (Issue lernapps/apps#429, Strang `mathematik/groessen-und-messen`, Stufen 9-10).
Gemeinsame Regeln des Mathe-Epics: `regeln.md` (Schreibweisen, Aufgaben, Quellen, Recap); sie gelten zusätzlich.

## Curriculum

Klassen 9-10, Gymnasium (Hessen, Annahme). Die Reihenfolge gibt die Lernlandkarte Mathematik (`mathematik.json`, gelesen
am 2026-11-23); ein Lehrplan wurde nicht geöffnet (nicht geprüft) und ist nicht nötig. Es gibt kein eigenes Material des
Auftraggebers; alles sind eigene Herleitungen und Aufgaben. Die Abgrenzung: wir rechnen. Prisma und Quader: #398 (Recap);
Körper bauen: #432; Sätze (Pythagoras, Strahlensätze, Trigonometrie): #399; Sinus- und Kosinusfunktion: #396.
Nicht in dieser App: Beweis, dass π irrational ist; Integralrechnung für die Kugel (Archimedes nur als Bild).

## Competencies

Kapitel `kreis` (Kreis, π und Bogenmaß):
- `kreis-umfang-flaeche` – „Ich kann Umfang und Flächeninhalt eines Kreises berechnen und die Zahl Pi am Kreis erklären.“
  Seiten `kreis/pi`, `kreis/umfang`, `kreis/flaeche`.
- `bogenmass` – „Ich kann Winkel im Bogenmaß angeben und zwischen Grad- und Bogenmaß wechseln.“ Seiten
  `kreis/einheitskreis`, `kreis/bogenmass`.

Kapitel `koerper` (Körper und Vielecke berechnen):
- `volumen-oberflaeche-zylinder` – „Ich kann Volumen und Oberflächeninhalt von Zylindern berechnen.“ Seite `koerper/zylinder`.
- `volumen-oberflaeche-pyramide-kegel-kugel` – „Ich kann Volumen und Oberflächeninhalt von Pyramide, Kegel und Kugel
  berechnen.“ Seiten `koerper/pyramide-kegel`, `koerper/kugel`.
- `berechnungen-dreiecke-vielecke` – „Ich kann Streckenlängen und Winkel in Dreiecken und Vielecken mit Pythagoras,
  Ähnlichkeit und Trigonometrie berechnen.“ Seiten `koerper/schulhof`, `koerper/vielecke`.

Recap-Seiten (ohne Aufgaben, mit `Kurztest`): `kreis/start` (`flaeche-umfang-quadrat-rechteck`, `dezimalbrueche-rechnen`,
`trigonometrie`), `koerper/start` (`volumen-oberflaeche-prisma`, `satz-des-pythagoras`,
`grundkoerper-pyramide-kegel-kugel`), `koerper/dreiecke-start` (`strahlensaetze`, `trigonometrie`).
Die Ids der Aufgaben stehen auf den Seiten (`<thema>-<art>`, zum Beispiel `pi-schranken`).

## Content structure

Eine Seite hat die Abschnitte (Ids gleich auf jeder Seite, nicht jede Seite hat alle): `einstieg` (erste Handlung vor der
Erklärung: Schätzung, Messwerte, Komponente), `herleitung` (Annähern, Umlegen, Zerlegen), `beispiel` (Beispielkasten mit
Rechenweg), `uebung` (mindestens drei Aufgaben je Baustein, steigend; die erste ohne Vorwissen aus dem Kapitel lösbar),
`rueckblick` (ein bis zwei Sätze „Das kannst du jetzt“). Höchstens 350 Wörter Text je Seite, höchstens vier Textblöcke in
Folge. Der Rahmen: Messungen auf dem Schulhof (Brunnenrand, Dose, Baum, Fluss), ohne erfundene Kinder. Recap-Seiten:
je Baustein Überschrift (Name der Karte), **fette** Begriffe mit Beispiel, `Kurztest`, Schlussliste „Du bist bereit, wenn du …“.

## Terminology

Wörter der Karte: Kreisumfang, Kreisfläche, Bogenmaß, Zylinder, Pyramide, Kegel, Kugel, Mantellinie. Neue Wörter am Beispiel
einführen, dann `definition` (je Begriff nur einmal im Explainer, W34). Dezimalkomma; ab fünf Stellen Dreiergruppen mit
schmalem geschütztem Leerzeichen, in Überschriften keine; Minus `−`; `·` und `:`; Einheiten mit geschütztem Leerzeichen
(`3 cm`), `cm²`, `cm³`; Winkel mit `∠` (U+2220) und `\alpha`, Grad `30^\circ`; Brüche gesetzt (`\frac`), in Kurztest- und
`mistakes`-Texten `a/b` (W28, im Plan gezählt). Anrede „du“. π ist die Zahl; `\pi` in Formeln. Rundung steht in der Aufgabe.
Keine `links:` an Aufgaben, sofern `lernapps check` besteht.

## Exercise patterns

- *Berechnen mit Einheit*: `generated`, `given` ganze Zahlen mit `step`, Antwort mit `round(…, n)` und `compare: number`
  mit `decimals`, `tolerance`, `unit`; je 2-3 `mistakes` mit Grund; `hint`; `steps`. Beispiel: `src/kreis/umfang.yaml`, Id
  `umfang-berechnen`.
- *Fehlertypen* (immer benennen): d statt r, U ↔ A, r statt r², ⅓ vergessen, Höhe statt Mantellinie, nur Mantel statt
  Oberfläche, Taschenrechner RAD statt DEG, falsche Kathete, falsches Streckenverhältnis.
- *Entscheiden*: `single-choice` mit `info` zu jeder Option („welches Dreieck, welches Verfahren“).
- *Zuordnen/ordnen*: `matching` (Grad ↔ Bogenmaß), `ordering` (Rechenschritte).
- *Komponenten* (`src/components/`, je `<Name>.vue/.ts/.test.ts`): `Kurztest` (Recap-Selbsttest, Vorlage des Epics, mit W42),
  `Vieleck`, `Torte`, `Einheitskreis`, `Umschuetten`. Sie zeigen und prüfen nichts; die Aufgaben stehen darunter.
  Jede hat eine statische Form (`nojs`), Tastatur und einen Test.

## Figures

Eigene SVG in `src/images/`, `source: eigene Zeichnung`, `licence: CC0-1.0`; `alt` sagt, was zu sehen ist, `caption`, worauf
man achten soll. Konventionen: Radius blau, Durchmesser grau, Winkel mit Bogen und α, Schnur/Bogen orange; Farbe nie allein
(Beschriftung und Linienart). Breite höchstens 360 px lesbar. Figuren: `pi-vieleck`, `torte-rechteck`, `einheitskreis-bogen`,
`zylinder-mantel`, `kegel-dreieck`, `pyramide-dreieck`, `kugel-archimedes`, `schulhof-baum`, `schulhof-fluss`, `sechseck-dreiecke`.

## Sources

Lernlandkarte Mathematik (geöffnet), eigene Herleitungen, eigene Zeichnungen. Fakten wie der Zusammenhang
Kegel : Kugel : Zylinder = 1 : 2 : 3 sind selbst hergeleitet und vom fachlichen Prüfer nachgerechnet. Nichts aus Schulbüchern
oder Arbeitsblättern; keine externen Seiten und keine `links:`. KMK-Bildungsstandards und Hessisches Kerncurriculum:
nicht geöffnet (nicht geprüft). Dritt-Inhalte: keine.

## Adding a chapter or round

1. Baustein in `mathematik.json` suchen (id, Ich-kann-Satz, `requires`). 2. Ordner `src/<kapitel>/` mit `chapter.yaml`, in
`src/app.yaml` unter `chapters` eintragen. 3. Recap-Seite für Voraussetzungen von außen (`recap:` plus `Kurztest`).
4. Je Seite `competencies`, Abschnitte nach „Content structure“, Aufgaben nach den Mustern, Komponenten nur wenn kein Block
reicht. 5. `npx vp check --fix`, `npx vp build`, `npx --no -- lernapps check`. 6. Dieses Dokument im selben Commit anpassen.

## Rules learned from mistakes

- Kein geschütztes Leerzeichen in `title` (auch nicht im `title` eines `example`-Kastens): der No-JS-Test vergleicht Überschriften normalisiert (W16).
- Beim Ziehen von Zufallswerten prüfen, dass kein `mistakes`-Wert für einen gezogenen Wert gleich der Antwort ist (zum Beispiel U = A bei r = 2); Wertebereich verengen.
- Lange Formeln in einem Beispielkasten in zwei `formula`-Blöcke teilen (axe: scrollbarer Bereich bei 360 px).
- Im Formeltext `3,14` statt `3{,}14`.
