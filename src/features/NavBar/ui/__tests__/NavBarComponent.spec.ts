import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('meduza-pet-ui-kit', () => ({
  LinkComponent: {
    template: '<div><slot /></div>',
    props: ['isActive', 'theme'],
  },
}))

vi.mock('host/NavigationService', () => ({
  default: { navigate: vi.fn() },
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ t: (key: string) => key }),
}))

vi.mock('host/useCustomRoute', () => ({
  default: () => ({ route: { name: 'home' } }),
}))

import NavBarComponent from '../NavBarComponent.vue'
import { NavBarLinks } from '../../model'
import NavigationService from 'host/NavigationService'

describe('NavBarComponent', () => {
  it('renders all links', () => {
    const wrapper = mount(NavBarComponent)
    Object.values(NavBarLinks).forEach((link) => {
      expect(wrapper.text()).toContain(link.title)
    })
  })
  // TODO:изменить после реализации ссылочек
  it('calls goTo with correct argument on click', async () => {
    const wrapper = mount(NavBarComponent)
    await wrapper.findAllComponents({ name: 'LinkComponent' })[0].trigger('click')
    expect(NavigationService.navigate).toHaveBeenCalledWith({ name: 'auth' })
  })
})
