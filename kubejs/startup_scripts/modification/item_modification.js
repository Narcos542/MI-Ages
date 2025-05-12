ItemEvents.modification(event => {

    const hammers_modification = [
        {itemName: 'ytech:stone_hammer', maxDamage: 131},
        {itemName: 'ytech:bronze_hammer', maxDamage: 384},
        {itemName: 'ytech:tin_hammer', maxDamage: 28},
        {itemName: 'ytech:lead_hammer', maxDamage: 32},
        {itemName: 'ytech:iron_hammer', maxDamage: 250},
        {itemName: 'ytech:golden_hammer', maxDamage: 32},
        {itemName: 'ytech:copper_hammer', maxDamage: 64},
    ]

    hammers_modification.forEach(hammer => {
        hammer.itemName
        event.modify(hammer.itemName, item => {item.maxDamage = hammer.maxDamage * 3})
    });


})
