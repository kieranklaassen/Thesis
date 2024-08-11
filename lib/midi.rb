require 'midilib'

class MidiHandler
  def initialize
    @input = MIDI::Input.new
    @output = MIDI::Output.new
    @thesis = Thesis.new
    @thesis.set_center_note(67)
  end

  def start
    @input.open_virtual_port('Thesis')
    @output.open_virtual_port('Thesis')

    @input.each do |message|
      process_message(message)
    end
  end

  private

  def process_message(message)
    @output.puts(message)
    mirror_message = [message[0], @thesis.mirror_note_out(message[1]), message[2]]
    middle_message = [message[0], @thesis.middle_note_out(message[1]), message[2]]
    @output.puts(mirror_message)
    @output.puts(middle_message)

    puts "mirrorMessage: #{mirror_message}"
    puts "middleMessage: #{middle_message}"
  end
end

midi_handler = MidiHandler.new
midi_handler.start
