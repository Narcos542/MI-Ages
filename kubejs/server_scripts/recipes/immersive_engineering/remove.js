// Create constants
const removing_by_recipe_id = [
    /immersiveengineering:crafting\/.*hammercrushing.*/,
    /immersiveengineering:arcfurnace\/.*aluminum/,
    /immersiveengineering:arcfurnace\/.*platinum/,
    /immersiveengineering:arcfurnace\/.*tungsten/,
    /immersiveengineering:arcfurnace\/.*uranium/,
    /immersiveengineering:crusher\/.*aluminum/,
    /immersiveengineering:blastfurnace.*/
]

// Remove IE recipes
ServerEvents.recipes(event => {
    event.remove({ output:[
        'immersiveengineering:ethanol_bucket',
        'immersiveengineering:biodiesel_bucket',
        'immersiveengineering:ethanol',
        'immersiveengineering:biodiesel',
        /immersiveengineering:.*coke.*/,
        /immersiveengineering:plate.*/,
        /immersiveengineering:wire.*/,
        /immersiveengineering:stick.*/,
        /immersiveengineering:dust.*/,
        /immersiveengineering:ingot.*/,
        /immersiveengineering:raw.*/,
        /immersiveengineering:nugget.*/,
        /immersiveengineering:.*blast.*/
    ]})

    event.remove({ input:[
        'immersiveengineering:ethanol_bucket',
        'immersiveengineering:biodiesel_bucket',
        'immersiveengineering:ethanol',
        'immersiveengineering:biodiesel',
        /immersiveengineering:.*coke.*/,
        /immersiveengineering:plate.*/,
        /immersiveengineering:wire.*/,
        /immersiveengineering:stick.*/,
        /immersiveengineering:dust.*/,
        /immersiveengineering:ingot.*/,
        /immersiveengineering:raw.*/,
        /immersiveengineering:nugget.*/
    ]})

    removing_by_recipe_id.forEach(id => {
        event.remove({id: id})
    })
})