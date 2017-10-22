"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teoria = require("teoria");
function chordToMidi(chord) {
    return teoria.chord(chord).notes().map(function (n) { return n.midi(); });
}
exports.chordToMidi = chordToMidi;
//# sourceMappingURL=chord-to-midi.js.map