# Thesis - Compositional tool
This tool can be used to generate musical lines

## Concept

### 1. Mirror

Mirroring notes (-) on a not sounding center (=).

```
---
   ----        ----(input)
       --------
===================(center)
       --------
   ----        ----(mirror) <-- calculated
---
```

### 2. Middle

Find the note (.) in the middle of the center (=) and mirror tone (-).

```
-------        ----(input)
       --------
.......        ....(middle) <-- calculated
       ........
===================
       ........
.......        ....(mirror middle) <-- calculated
       --------
-------        ----(mirror)
```



### 3. Octaflip

The flip note takes a middle or mirror middle note and transposes it to the other side of the center in octaves.

## Usage

### Installation

To use this tool, you need to have Ruby installed on your system. You can install the required gems by running:

```sh
bundle install
```

### Running the tool

You can run the tool by executing the following command:

```sh
ruby lib/midi.rb
```

### Example

Here is an example of how to use the `Thesis` class in Ruby:

```ruby
require_relative 'lib/thesis'

thesis = Thesis.new('C4', 'C major')

# Set the center note
thesis.set_center_note(67)

# Play a note
thesis.play(64)

# Get the center note output
center_note = thesis.center_note_out
puts "Center Note: #{center_note}"

# Get the mirror note output
mirror_note = thesis.mirror_note_out
puts "Mirror Note: #{mirror_note}"

# Get the middle note output
middle_note = thesis.middle_note_out
puts "Middle Note: #{middle_note}"

# Get the mirror middle note output
mirror_middle_note = thesis.mirror_middle_note_out
puts "Mirror Middle Note: #{mirror_middle_note}"
```
