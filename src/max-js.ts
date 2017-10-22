/* global Global, post, inlets, outlets, outlet */
declare const Global: any;
declare function post(o: any): void;
declare let inlets: any;
declare let size: any;
declare let outlets: any;
declare function outlet(n: number, o: any): void;

import {chordToMidi} from './chord-to-midi'

inlets = 1
outlets = 1

Global.mChordToMidi = function mChordToMidi(chord: string) {
  const notes = chordToMidi(chord)
  Global.size = notes.length
  outlet(0, notes)
}
