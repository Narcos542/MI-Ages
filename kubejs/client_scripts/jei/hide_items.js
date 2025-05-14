// Create constant list for work with regular expression
const list = [
	'ytech:tin_ingot',
	'modern_industrialization:steel_block',
	'immersiveengineering:ethanol_bucket',
	'immersiveengineering:biodiesel_bucket',
	/immersiveengineering:.*coke.*/,
    /immersiveengineering:plate.*/,
    /immersiveengineering:wire.*/,
    /immersiveengineering:stick.*/,
    /immersiveengineering:dust.*/,
    /immersiveengineering:ingot.*/,
    /immersiveengineering:raw.*/,
    /immersiveengineering:nugget.*/,
    /immersiveengineering:.*blast.*/
	
]

// Hide items
RecipeViewerEvents.removeEntries('item', event => {

	event.remove(list)
})
