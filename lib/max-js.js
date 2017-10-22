"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chord_to_midi_1 = require("./chord-to-midi");
inlets = 1;
outlets = 1;
Global.mChordToMidi = function (chord) {
    var notes = chord_to_midi_1.chordToMidi(chord);
    size = notes.length;
    outlet(0, notes);
};
//# sourceMappingURL=max-js.js.map