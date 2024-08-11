class Thesis
  attr_accessor :center_note, :scale, :active_note

  def initialize(center_note = 'C4', scale = 'C major')
    @scale = scale
    @notes = get_scale_notes(scale)
    @center_note = note_to_midi(center_note)
    @active_note = nil
  end

  def play(midi_note)
    note_name = midi_to_note_name(midi_note)
    if @notes.include?(note_name)
      @active_note = midi_note
    else
      closest_note_in_scale = find_closest_note_in_scale(note_name)
      @active_note = note_to_midi(closest_note_in_scale)
    end
  end

  def center_note_out
    @center_note
  end

  def mirror_note_out
    interval = distance(@center_note, @active_note)
    inverted_interval = distance(@center_note, interval)
    inverted_note_in_scale = find_closest_note_in_scale(inverted_interval)
    note_to_midi(inverted_note_in_scale)
  end

  def middle_note_out
    interval = distance(@center_note, @active_note)
    half_interval = distance(interval, 'P5')
    middle_note = transpose(@center_note, half_interval)
    middle_note_in_scale = find_closest_note_in_scale(middle_note)
    note_to_midi(middle_note_in_scale)
  end

  def mirror_middle_note_out
    interval = distance(@center_note, @active_note)
    half_interval = distance(interval, 'P5')
    inverted_half_interval = distance(@center_note, half_interval)
    middle_note = transpose(@center_note, inverted_half_interval)
    middle_note_in_scale = find_closest_note_in_scale(middle_note)
    note_to_midi(middle_note_in_scale)
  end

  private

  def get_scale_notes(scale)
    # Implement a method to get the notes of the scale
    # This is a placeholder implementation
    ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  end

  def note_to_midi(note)
    # Implement a method to convert a note to its MIDI number
    # This is a placeholder implementation
    60
  end

  def midi_to_note_name(midi_note)
    # Implement a method to convert a MIDI number to its note name
    # This is a placeholder implementation
    'C'
  end

  def distance(note1, note2)
    # Implement a method to calculate the distance between two notes
    # This is a placeholder implementation
    7
  end

  def transpose(note, interval)
    # Implement a method to transpose a note by an interval
    # This is a placeholder implementation
    note
  end

  def find_closest_note_in_scale(note, round_mode = 'nearest')
    note_name = simplify(note)
    return note_name if @notes.include?(note_name)

    up = simplify(transpose(note, '1m'))
    down = simplify(transpose(note, '-1m'))

    if round_mode == 'ceil'
      @notes.include?(up) ? up : down
    elsif round_mode == 'floor'
      @notes.include?(down) ? down : up
    else
      up_distance = note_to_midi(up) - note_to_midi(note_name)
      down_distance = note_to_midi(note_name) - note_to_midi(down)
      up_distance <= down_distance ? up : down
    end
  end

  def simplify(note)
    # Implement a method to simplify a note
    # This is a placeholder implementation
    note
  end
end
