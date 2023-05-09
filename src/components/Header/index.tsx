import * as s from './styles'

import Cover from '../../assets/Cover.svg'

export function Header() {
  return (
    <s.CoverImgContainer>
      <img src={Cover} alt="" />
    </s.CoverImgContainer>
  )
}
