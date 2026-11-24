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

Kapitel `koerper` (Zylinder, Kegel, Kugel und Vielecke berechnen):
- `volumen-oberflaeche-zylinder` – „Ich kann Volumen und Oberflächeninhalt von Zylindern berechnen.“ Seite `koerper/zylinder`.
- `volumen-oberflaeche-pyramide-kegel-kugel` – „Ich kann Volumen und Oberflächeninhalt von Pyramide, Kegel und Kugel
  berechnen.“ Seiten `koerper/pyramide-kegel`, `koerper/kugel`.
- `berechnungen-dreiecke-vielecke` – „Ich kann Streckenlängen und Winkel in Dreiecken und Vielecken mit Pythagoras,
  Ähnlichkeit und Trigonometrie berechnen.“ Seiten `koerper/schulhof` (Baumhöhe, Flussbreite, Strahlensatz, Verfahrenswahl), `koerper/vielecke` (regelmäßiges n-Eck, Apothem).

Recap-Seiten (höchstens zwei normale Übungen je Seite, `single-choice` mit Rückmeldung zu jeder Option; die Komponente `Kurztest` gibt es nicht mehr): `kreis/start` (`flaeche-umfang-quadrat-rechteck`, `dezimalbrueche-rechnen`,
`trigonometrie`), `koerper/start` (`volumen-oberflaeche-prisma`, `satz-des-pythagoras`,
`grundkoerper-pyramide-kegel-kugel`), `koerper/dreiecke-start` (`strahlensaetze`, `trigonometrie`). Alle drei stehen am Anfang ihres Kapitels bzw. Abschnitts; die Begriffe der Recaps sind `definition`-Blöcke (Glossar): Flächeninhalt, Umfang, Stellenwert, Runden, Hypotenuse, Gegenkathete und Ankathete, Sinus Kosinus Tangens, Prisma, Volumen, Oberfläche, Satz des Pythagoras, Pyramide, Kegel, Kugel, Strahlensatz; in den Seiten kommen Kreiszahl π, Bogenmaß, Einheitskreis, Kreisfläche, Mantel, Mantellinie, Kugel (Formeln), Apothem dazu. Jeder Begriff steht nur einmal als `definition` (W34).
Die Ids der Aufgaben stehen auf den Seiten (`<thema>-<art>`, zum Beispiel `umfang-aus-radius`, `kegel-volumen`, `mast-winkel`, `pyramide-oberflaeche`). Mindestens drei je Baustein, steigend; `generated` mit benannten Fehlertypen in `mistakes`, daneben `number`, `single-choice`, `true-false`, `matching`, `ordering`.

## Content structure

Eine Seite hat die Abschnitte (Ids gleich auf jeder Seite, nicht jede Seite hat alle): `einstieg` (erste Handlung vor der
Erklärung: Schätzung, Messwerte, Komponente), `herleitung` (Annähern, Umlegen, Zerlegen), `beispiel` (Beispielkasten mit
Rechenweg), `uebung` (mindestens drei Aufgaben je Baustein, steigend; die erste ohne Vorwissen aus dem Kapitel lösbar),
`rueckblick` (ein bis zwei Sätze „Das kannst du jetzt“). Jede Seite und jeder Abschnitt beginnt mit dem Anlass („Wenn du wissen willst/musst …, dann …“), erst danach kommt das Verfahren (regeln.md 9.8); davor steht kein Verfahren, das die Lernenden nicht brauchen. Inhaltsseiten wiederholen nichts Früheres: keine Wiederholungsaufgaben, keine Auffrischung zwischen den neuen Inhalten, das steht im Recap (9.7). Höchstens 350 Wörter Text je Seite, höchstens vier Textblöcke in
Folge. Der Rahmen: Messungen auf dem Schulhof (Brunnenrand, Dose, Baum, Fluss), ohne erfundene Kinder. Recap-Seiten:
je Baustein Überschrift (Name der Karte), **fette** Begriffe mit Beispiel (`definition`-Block und Beispielkasten), die zwei Übungen unter passenden Abschnitten, Schlussliste „Du bist bereit, wenn du …“.

## Terminology

Wörter der Karte (Radius und Durchmesser stehen im Recap `kreis/start`): Kreisumfang, Kreisfläche, Bogenmaß, Zylinder, Pyramide, Kegel, Kugel, Mantellinie. Neue Wörter am Beispiel
einführen, dann `definition` (je Begriff nur einmal im Explainer, W34). Dezimalkomma; ab fünf Stellen Dreiergruppen mit
schmalem geschütztem Leerzeichen, in Überschriften keine; Minus `−`; `·` und `:`; Einheiten mit geschütztem Leerzeichen
(`3 cm`), `cm²`, `cm³`; Winkel mit `∠` (U+2220) und `\alpha`, Grad `30^\circ`; Brüche gesetzt (`\frac`), in Rückmeldungen von Komponenten und
`mistakes`-Texten ist `a/b` erlaubt (W28); in dieser App gibt es keine solche Stelle (gezählt: 0). Anrede „du“. π ist die Zahl; `\pi` in Formeln. Rechenaufgaben nennen den Wert („mit π ≈ 3,14“, in `kreis/bogenmass` „mit der π-Taste“) und die verlangte Rundung; bei π ≈ 3,14 ist die Toleranz 0, bei der π-Taste 0,01. Der Taschenrechner steht auf DEG für Grad und RAD für Bogenmaß.
Keine `links:` an Aufgaben, sofern `lernapps check` besteht.

## Exercise patterns

- *Berechnen mit Einheit*: `generated`, `given` ganze Zahlen mit `step`, Antwort mit `round(…, n)` und `compare: number`
  mit `decimals`, `tolerance`, `unit`; je 2-3 `mistakes` mit Grund; `hint`; `steps`. Beispiel: `src/kreis/umfang.yaml`, Id
  `umfang-berechnen`.
- *Fehlertypen* (immer benennen): d statt r, U ↔ A, r statt r², ⅓ vergessen, Höhe statt Mantellinie, nur Mantel statt
  Oberfläche, Taschenrechner RAD statt DEG, falsche Kathete, falsches Streckenverhältnis.
- *Entscheiden*: `single-choice` mit `info` zu jeder Option („welches Dreieck, welches Verfahren“).
- *Zuordnen/ordnen*: `matching` (Grad ↔ Bogenmaß), `ordering` (Rechenschritte).
- *Komponenten* (`src/components/`, je `<Name>.vue/.ts/.test.ts`): `Vieleck` (kreis/pi: 6-96 Ecken, Regler, Lupe), `Torte` (kreis/flaeche: Stücke, Knopf „Stücke umlegen“), `Einheitskreis`
  (kreis/einheitskreis: Winkel 0-360° in 15°-Schritten, Bogenlänge, Punkt P), `Umschuetten` (koerper/pyramide-kegel: Kegel
  dreimal in den Zylinder). Sie zeigen und prüfen nichts; die Aufgaben stehen darunter. Jede hat eine statische Form (`nojs`),
  Tastatur (Regler, Knöpfe) und einen Test. Knöpfe nur mit sichtbarer Wirkung (ein Knopf, der im letzten Zustand nichts mehr ändert, wird ausgeblendet; `Umschuetten` zeigt dann einen Satz) und in der Gestaltung der Laufzeit (2 px Rand in `--page-accent`, Radius 0,375 rem, Fokusrahmen 3 px `--page-text`). Datenlisten (je `pick: 1`): `src/data/messungen.yaml` (Dose: Durchmesser und Umfang), `src/data/tripel.yaml` (Radius, Höhe, Mantellinie des Kegels), `src/data/pyramiden.yaml` (Kante, Höhe, Seitenhöhe der Pyramide); alle ganzzahlig, damit Rechenwege ohne Wurzeln gehen.
- *Weitere Muster*: `matching` (Winkel ↔ Bogenmaß, Situation ↔ Verfahren), `ordering` (Schritte zur Oberfläche), `true-false`, `number`.

## Figures

Eigene SVG in `src/images/`, `source: eigene Zeichnung`, `licence: CC0-1.0`; `alt` sagt, was zu sehen ist, `caption`, worauf man achten soll. Konventionen: Radius und Teildreieck blau (Füllung leicht), Hilfslinien gestrichelt, Winkel mit Bogen und α, Farbe nie allein (Beschriftung und Linienart). Die Figuren im SVG-Text nutzen feste dunkle Farben (Textkontrast 4,5:1 geprüft von `lernapps check`).
Dateien: `sechseck-dreiecke.svg` (kreis/pi), `zylinder-mantel.svg` (koerper/zylinder), `kegel-dreieck.svg` und `pyramide-dreieck.svg` (koerper/pyramide-kegel), `kugel-archimedes.svg` (koerper/kugel), `schulhof-baum.svg` und `schulhof-fluss.svg` (koerper/schulhof), `vieleck-dreieck.svg` (koerper/vielecke). Bewegliche Bilder sind Komponenten (siehe Exercise patterns).

## Sources

Lernlandkarte Mathematik (geöffnet), eigene Herleitungen, eigene Zeichnungen. Fakten wie der Zusammenhang
Kegel : Kugel : Zylinder = 1 : 2 : 3 sind selbst hergeleitet und vom fachlichen Prüfer nachgerechnet. Nichts aus Schulbüchern
oder Arbeitsblättern; keine externen Seiten und keine `links:`. KMK-Bildungsstandards und Hessisches Kerncurriculum:
nicht geöffnet (nicht geprüft). Dritt-Inhalte: keine.

## Adding a chapter or round

1. Baustein in `mathematik.json` suchen (id, Ich-kann-Satz, `requires`). 2. Ordner `src/<kapitel>/` mit `chapter.yaml`, in
`src/app.yaml` unter `chapters` eintragen. 3. Recap-Seite für Voraussetzungen von außen (`recap:`, höchstens zwei Übungen).
4. Je Seite `competencies`, Abschnitte nach „Content structure“, Aufgaben nach den Mustern, Komponenten nur wenn kein Block
reicht. 5. `npx vp check --fix`, `npx vp build`, `npx --no -- lernapps check`. 6. 1 bis 3 ihrer Übungen in `selfAssessment` (in `chapter.yaml`) aufnehmen, wie Skill `lernapps-explainer-self-assessment` sagt: möglichst `generated`, ohne Bezug auf die Seite („oben“, „im Bild“) lesbar. Bisher je Kapitel zwei Aufgaben je Seite (Recap-Seiten sind nie dabei).
7. Dieses Dokument im selben Commit anpassen.

## Rules learned from mistakes

- Kein geschütztes Leerzeichen in `title` (auch nicht im `title` eines `example`-Kastens): der No-JS-Test vergleicht Überschriften normalisiert (W16).
- Beim Ziehen von Zufallswerten prüfen, dass kein `mistakes`-Wert für einen gezogenen Wert gleich der Antwort ist (zum Beispiel U = A bei r = 2); Wertebereich verengen.
- Lange Formeln in einem Beispielkasten in zwei `formula`-Blöcke teilen (axe: scrollbarer Bereich bei 360 px).
- Eine Formel höchstens etwa 45 Zeichen lang (360 px); `\qquad`-Doppelformeln teilen; sonst axe `scrollable-region-focusable`.
- Im Formeltext `3,14` statt `3{,}14`; einzige Ausnahme `114{,}6^\circ`, weil ein Komma vor `^\circ` sonst einen Leerraum erzeugt.
