import { CONFIG } from './config'

export const VALIDGUESSES = [
  "ʔadil'",
  "bayin",
  'danix',
  'daʔit',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
