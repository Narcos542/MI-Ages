ServerEvents.recipes(event => {
    event.remove({output: [
            'modern_industrialization:netherite_hammer', 
            'modern_industrialization:steel_hammer', 
            'modern_industrialization:diamond_hammer', 
            'modern_industrialization:iron_hammer'
        ]})

        const removing_by_recipe_id = [
            /modern_industrialization:materials\/.*\/craft\/ring/,
        ]

        removing_by_recipe_id.forEach(id => {
        event.remove({id: id})
    });



    })