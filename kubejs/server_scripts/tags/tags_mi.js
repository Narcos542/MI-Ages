// Remove & add tags for MI items
ServerEvents.tags('item', event => {

    event.add('c:wires', /modern_industrialization:.*_wire/)
    event.add('c:wires/copper', 'modern_industrialization:copper_wire')
    event.add('c:wires/electrum', 'modern_industrialization:electrum_wire')
    event.add('c:wires/aluminum', 'modern_industrialization:aluminum_wire')
    event.add('c:wires/lead', 'modern_industrialization:lead_wire')
    event.add('c:wires/steel', 'modern_industrialization:steel_wire')
    event.add('c:storage_blocks/coal_coke', 'modern_industrialization:coke_block')
    event.add('c:coal_coke', 'modern_industrialization:coke')
    event.add('c:dusts/coal_coke', 'modern_industrialization:coke_dust')
    event.add('c:dusts/wood', 'modern_industrialization:wood_pulp')
    event.add('c:nuggets/netherite', 'modern_industrialization:netherite_nugget')
    event.add('c:rods/netherite', 'modern_industrialization:stick_netherite')
})
