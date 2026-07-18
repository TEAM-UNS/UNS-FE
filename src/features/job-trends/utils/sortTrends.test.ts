import { describe, expect, it } from 'vitest'
import { sortTrendsByCount } from './sortTrends'
import type { TechTrend } from '../types'

const trends: TechTrend[] = [
  { keyword: 'A', count: 10, rankDelta: 0 },
  { keyword: 'B', count: 30, rankDelta: 0 },
  { keyword: 'C', count: 20, rankDelta: 0 },
]

describe('sortTrendsByCount', () => {
  it('count 내림차순으로 정렬한다', () => {
    expect(sortTrendsByCount(trends).map((t) => t.keyword)).toEqual([
      'B',
      'C',
      'A',
    ])
  })

  it('원본 배열을 변경하지 않는다 (불변성)', () => {
    sortTrendsByCount(trends)
    expect(trends.map((t) => t.keyword)).toEqual(['A', 'B', 'C'])
  })
})
