import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de rpg"
              to="/categorias#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de ação"
              to="/categorias#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de simulação"
              to="/categorias#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de esportes"
              to="/categorias#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar jogos de luta"
              to="/categorias#fight"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link title="clique aqui para acessar a seção de novidades" to="">
              Novidades
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de pomoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; - E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
