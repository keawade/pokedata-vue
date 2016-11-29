import { types as typesChart } from './assets/types.json'

const types = Object.keys(typesChart)

export function calculateStrengths (givenTypes) {
  return types.reduce((strengths, type) => {
    strengths[type] = givenTypes.reduce((total, givenType) => total * typesChart[type][givenType], 1)
    return strengths
  }, {})
}
