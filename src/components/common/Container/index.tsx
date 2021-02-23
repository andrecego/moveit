import * as S from './style'

interface props {
  children: any
}

const Container = ({children}: props) => {
  return <S.Container>{children}</S.Container>
}

export default Container