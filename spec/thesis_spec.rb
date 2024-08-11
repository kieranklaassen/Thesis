require_relative '../lib/thesis'

RSpec.describe Thesis do
  let(:thesis) { Thesis.new('C4', 'C major') }

  describe '#initialize' do
    it 'sets the center note and scale' do
      expect(thesis.center_note).to eq(60)
      expect(thesis.scale).to eq('C major')
    end
  end

  describe '#play' do
    it 'sets the active note if it is in the scale' do
      thesis.play(64)
      expect(thesis.active_note).to eq(64)
    end

    it 'sets the closest note in the scale if it is not in the scale' do
      thesis.play(61)
      expect(thesis.active_note).to eq(60)
    end
  end

  describe '#center_note_out' do
    it 'returns the center note' do
      expect(thesis.center_note_out).to eq(60)
    end
  end

  describe '#mirror_note_out' do
    it 'returns the mirror note' do
      thesis.play(64)
      expect(thesis.mirror_note_out).to eq(56)
    end
  end

  describe '#middle_note_out' do
    it 'returns the middle note' do
      thesis.play(64)
      expect(thesis.middle_note_out).to eq(58)
    end
  end

  describe '#mirror_middle_note_out' do
    it 'returns the mirror middle note' do
      thesis.play(64)
      expect(thesis.mirror_middle_note_out).to eq(62)
    end
  end
end
