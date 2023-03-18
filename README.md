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