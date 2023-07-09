import { describe, it, expect } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')

    await flushPromises()
    expect(wrapper.text()).toContain('ahihi_dongock_res')
  })
})
