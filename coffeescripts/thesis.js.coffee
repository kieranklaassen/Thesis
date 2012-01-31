# Een stuk tijd
class Thesis
	constructor : ->
		@toonsoort = [0,2,4,5,7,9,11] # C majeur / a mineur
		@middentoon = 60

# een Horizontale harmonie
class Toon
	constructor : ->
		@toon1 = 0
		@toon2 = 0
		@middentoon = 0
	spiegel: ->
		(verschil() * -1) + @middentoon
	midden: ->
		@middentoon - (verschil() / 2)
	spiegelMidden: ->
		@middentoon + (verschil() / 2)
	verschil: ->
		@toon1 - @middentoon