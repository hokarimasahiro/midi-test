input.onButtonPressed(Button.A, function () {
    piano.note(midi.frequencyToKey(330), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(349), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(330), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(294), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(262), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(294), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(262), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(0), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(262), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(349), music.beat(BeatFraction.Double))
    piano.note(midi.frequencyToKey(349), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(349), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(392), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(440), music.beat(BeatFraction.Whole))
    piano.note(midi.frequencyToKey(392), music.beat(BeatFraction.Double))
})
let piano: midi.MidiController = null
serial.redirect(
SerialPin.P14,
SerialPin.P0,
BaudRate.BaudRate31250
)
midi.useRawSerial()
piano = midi.channel(1)
piano.setInstrument(MidiInstrument.Harmonica)
piano.controlChange(7, 64)
