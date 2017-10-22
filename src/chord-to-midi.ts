import * as teoria from 'teoria'

export function chordToMidi(chord: string): string[] {
  return teoria.chord(chord).notes().map(n => n.midi())
}
