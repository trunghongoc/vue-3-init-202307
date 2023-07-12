import { describe, it, expect } from 'vitest'
import { bindKey, loopToCookItems, useCallAPi } from './helper'

describe('menu-expanable.helper.bindKey', () => {
  describe.each([
    { obj: { name: 'test 1', key: 'test_1' }, result: 'test_1' },
    {
      obj: {
        sample: 2,
        key: 'test_2'
      },
      parentKey: 'prefix',
      result: 'prefix.test_2'
    },
    {
      obj: {
        sample: 3,
        key: 'test_3.test_4'
      },
      parentKey: 'prefix',
      result: 'prefix.test_3.test_4'
    }
  ])(`Result should be $result`, ({ obj, parentKey, result }) => {
    it('Run', () => {
      expect(bindKey(obj, parentKey)).toBe(result)
    })
  })
})
