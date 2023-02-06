/**
 * Convert a decimal quantity into its approximate
 * fraction representation.
 * 
 * @param {number} quantity
 * @param {number} epsilon - The maximum error allowed.
 * @returns {number[]} [numerator, denominator]
 */
export function decimalToFraction(quantity: number, epsilon = 0.0001): [number, number] {
  if (quantity == 0) return [0, 1]

  const absQuantity = Math.abs(quantity)
  let numerator = 0
  let denominator = 1
  let ratio

  while (true) {
      ratio = numerator / denominator
      if (Math.abs((ratio - absQuantity) / absQuantity) < epsilon) {
          break
      }
      if (ratio < absQuantity) {
          numerator++
      }
      else {
          denominator++
      }
  }
  return [quantity < 0 ? -numerator : numerator, denominator]
}

/**
 * Convert quantity to a string representation.
 * 
 * @param {number | string} quantity
 * @returns {string}
 */
export function parseQuantity(quantity: number | string): string {
  if (typeof quantity === 'string') {
    return quantity
  }

  const [numerator, denominator] = decimalToFraction(quantity)
  if (numerator === 0) {
    return '0'
  }
  if (denominator === 1) {
    return numerator.toString()
  }
  if (numerator > denominator) {
    return `${Math.floor(numerator / denominator)} ${numerator % denominator}/${denominator}`
  }
  return `${numerator}/${denominator}`
}

/**
 * Convert a parsed quantity into a vulgar fraction.
 * Returns the original string if no conversion is possible.
 * 
 * @param {number | string} quantity
 * @returns {string}
 */
const FRACTION_REGEXP = /(\d+)\/(\d+)/
const VULGAR_MAP: Record<string, string> = {
  '1/2': '½',
  '1/3': '⅓',
  '2/3': '⅔',
  '1/4': '¼',
  '3/4': '¾',
  '1/5': '⅕',
  '2/5': '⅖',
  '3/5': '⅗',
  '4/5': '⅘',
  '1/6': '⅙',
  '5/6': '⅚',
  '1/7': '⅐',
  '1/8': '⅛',
  '3/8': '⅜',
  '5/8': '⅝',
  '7/8': '⅞',
  '1/9': '⅑',
  '1/10': '⅒',
}
export function parseVulgar(quantity: string | number): string {
  if (typeof quantity === 'string') {
    return quantity
      .split(' ')
      .map((part) => {
        if (FRACTION_REGEXP.test(part)) {
          const [numerator, denominator] = part.split('/').map(Number)
          const vulgar = VULGAR_MAP[`${numerator}/${denominator}`]
          if (vulgar) {
            return vulgar
          }
          return part
        }
      })
      .join(' ')
  }

  if (typeof quantity === 'number') {
    const [numerator, denominator] = decimalToFraction(quantity)
    if (numerator === 0) {
      return '0'
    }
    if (denominator === 1) {
      return numerator.toString()
    }
    if (numerator > denominator) {
      const whole = Math.floor(numerator / denominator)
      const remainder = numerator % denominator
      const vulgar = VULGAR_MAP[`${remainder}/${denominator}`]
      if (vulgar) {
        return `${whole} ${vulgar}`
      }
      return `${whole} ${remainder}/${denominator}`
    }
    const vulgar = VULGAR_MAP[`${numerator}/${denominator}`]
    if (vulgar) {
      return vulgar
    }
    return `${numerator}/${denominator}`
  }

  return ''
}
