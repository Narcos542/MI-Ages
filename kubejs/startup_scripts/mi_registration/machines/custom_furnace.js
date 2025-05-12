let MI_FURNACE;

MIMachineEvents.registerRecipeTypes(event => {
    MI_FURNACE = event.register('mi_furnace')
    .withItemInputs()
    .withItemOutputs()
})

MIMachineEvents.registerMachines(event => {
    
    event.craftingSingleBlock(
        'Furnace', 'mi_furnace', MI_FURNACE, ["bronze", "steel", "electric"],
        186, event.progressBar(77, 33, "arrow"), event.efficiencyBar(38, 62), event.energyBar(18, 30),
        /* SLOT CONFIGURATION */
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        // Explanation: 3x3 grid of item slots starting at position (42, 27), then 1x3 grid of item slots starting at position (139, 27).
        items => items.addSlots(56, 35, 1, 1).addSlots(102, 35, 1, 1), fluids => {},
        /* MODEL CONFIGURATION */
        // front overlay?, top overlay?, side overlay?
        true, false, false,
    );
})