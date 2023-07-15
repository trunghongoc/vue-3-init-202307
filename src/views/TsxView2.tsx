import type { SetupContext, defineAsyncComponent } from 'vue'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import LazyComponent from '@/components/molecules/lazy-component/index.vue'
import ButtonIcon from '@/components/atoms/buttons/button-icon.vue'
import GaIcon from '@/components/atoms/icons/ga-icon/index.vue'

const Page = () => import('@/pages/Tsx.tsx')

export function TsxView(props: any, context: SetupContext<any>) {
  return (
    <>
      <LazyComponent component={Page} isShowSpiner={true} />
    </>
  )
}

TsxView.inheritAttrs = false

export default {
  name: 'Tsx2',
  setup() {},
  render() {
    return (
      <div>
        <LazyComponent component={Page} />
      </div>
    )
  }
}
