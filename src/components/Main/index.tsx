import * as S from './styles'

const Main = ({
  title = 'React Pro',
  description = 'Typescript, ReactJS, NextJS and Emotion',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and Advanced React written on its right side"
      width={250}
      height={55}
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Developer with a screen in front of him"
      height={260}
      width={300}
    />
  </S.Wrapper>
)

export default Main
