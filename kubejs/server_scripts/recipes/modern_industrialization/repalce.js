// Replace MI recipe
ServerEvents.recipes(event => {

    event.replaceOutput(
    { output:'modern_industrialization:steel_block'},
    'modern_industrialization:steel_block',
    'immersiveengineering:storage_steel'
    )

    event.replaceInput(
    { input:'modern_industrialization:steel_block'},
    'modern_industrialization:steel_block',
    'immersiveengineering:storage_steel'
    )
})