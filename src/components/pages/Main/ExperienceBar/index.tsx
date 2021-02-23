import * as S from './style'

const ExperienceBar = () => {
  return(
  <S.Header>
    <S.Experience>0 xp</S.Experience>
    <S.ExpBar>
      <S.CurrentExpBar size={0.5}/>

      <S.CurrentExpText size={0.5}>
        300 xp
      </S.CurrentExpText>

    </S.ExpBar>
    <S.Experience>600 xp</S.Experience>
  </S.Header>
  )
}

export default ExperienceBar