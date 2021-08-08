import { FlourType } from './flourTypes';

export function recipeCalculator (flourType: FlourType, finalWeight: number, isWholemeal: boolean): Recipe {
    if (isWholemeal) {
        return flourWeight(recipesWholemeal[flourType], finalWeight)
    }
    return flourWeight(recipesWhite[flourType], finalWeight)
}

export interface Recipe {
    water: number,
    sourdought: number,
    flour: number,
    salt: number
}

function flourWeight (recipeNumbers: RecipeCalculations, finalWeight: number): Recipe {
    if (finalWeight === 0) {
        return {
            flour: 0,
            salt: 0,
            sourdought: 0,
            water: 0
        }
    }
    const flourWeight = Math.round(finalWeight / (1 + recipeNumbers.sourdoughPer + recipeNumbers.waterPer))
    return {
        flour: flourWeight,
        salt: Math.round(flourWeight * recipeNumbers.saltPer),
        sourdought: Math.round(flourWeight * recipeNumbers.sourdoughPer),
        water: Math.round(flourWeight * recipeNumbers.waterPer)
    }
}



interface RecipeCalculations {
    waterPer: number,
    sourdoughPer: number,
    saltPer: number,
}

const recipesWholemeal = {
    [FlourType.EMMER]: {
        waterPer: 1,
        sourdoughPer: 0.6,
        saltPer: 0.03
    },
    [FlourType.RYE]: {
        waterPer: 1,
        sourdoughPer: 0.6,
        saltPer: 0.03
    },
    [FlourType.KHORASAN]: {
        waterPer: 0.85,
        sourdoughPer: 0.2,
        saltPer: 0.02
    },
    [FlourType.SPELT]: {
        waterPer: 0.8,
        sourdoughPer: 0.2,
        saltPer: 0.02
    },
    [FlourType.WHEAT]: {
        waterPer: 0.8,
        sourdoughPer: 0.2,
        saltPer: 0.02
    },
}
const recipesWhite = {
    [FlourType.EMMER]: {
        waterPer: 0.8,
        sourdoughPer: 0.6,
        saltPer: 0.03
    },
    [FlourType.RYE]: {
        waterPer: 0.8,
        sourdoughPer: 0.6,
        saltPer: 0.03
    },
    [FlourType.KHORASAN]: {
        waterPer: 0.65,
        sourdoughPer: 0.2,
        saltPer: 0.02
    },
    [FlourType.SPELT]: {
        waterPer: 0.65,
        sourdoughPer: 0.2,
        saltPer: 0.02
    },
    [FlourType.WHEAT]: {
        waterPer: 0.65,
        sourdoughPer: 0.2,
        saltPer: 0.02
    },
}


