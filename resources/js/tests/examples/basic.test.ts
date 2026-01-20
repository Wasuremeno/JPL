import { describe, it, expect } from 'vitest'

describe('Basic test suite', () => {
  it('should pass basic math', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle strings', () => {
    expect('hello').toBe('hello')
    expect('hello').toContain('ell')
  })

  it('should handle arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr).toContain(2)
  })
})