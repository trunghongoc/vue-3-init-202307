import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import styled from 'vue3-styled-components'

import PageHeaderTeleport from '@/layout/admin/page-header-teleport/index.vue'
import ButtonIcon from '@/components/atoms/buttons/button-icon.vue'
import GaIcon from '@/components/atoms/icons/ga-icon/index.vue'

const Header = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const IncrementWrapper = styled.div`
  display: flex;

  .button {
    &:not(:last-child) {
      margin-right: 5px;
    }

    &.btn-increment {
      span:nth-child(2) {
        margin-left: 5px;
      }
    }
  }
`

export function TsxView(props: any, context: SetupContext<any>) {
  const count = ref<number>(0)

  return (
    <div>
      <PageHeaderTeleport>
        <IncrementWrapper>
          <ButtonIcon class="btn-increment" onClick={() => count.value++}>
            <GaIcon name="appstore-outlined" />
            <span>increment count</span>
          </ButtonIcon>
        </IncrementWrapper>
      </PageHeaderTeleport>

      <Header>JSX page</Header>

      <div>
        <RouterLink to="/">Go to Home</RouterLink>
      </div>

      <IncrementWrapper>
        <ButtonIcon class="btn-increment" onClick={() => count.value++}>
          <GaIcon name="appstore-outlined" />
          <span>increment count</span>
        </ButtonIcon>

        <ButtonIcon>{count.value}</ButtonIcon>
      </IncrementWrapper>
    </div>
  )
}

TsxView.inheritAttrs = false

export default TsxView
