import './styles.scss';
import { Link as ScrollLink } from 'react-scroll';

const MainTitle = () => (
  <div className="title">
    <p className="title-hello span">Bonjour, je m&apos;appelle</p>
    <h1 className="title-name">Gaël Amand</h1>
    <h2 className="title-catch">Product Builder IA</h2>
    <p className="title-intro">
      Consultant ERP depuis 6 ans, je me suis rapidement passionné pour l&apos;intelligence
      artificielle, jusqu&apos;à concevoir des agents IA au sein de mon poste. Sur mon temps
      personnel, je vibecode mes propres produits SaaS de bout en bout.
    </p>
    <div className="title-actions">
      <ScrollLink
        to="projects"
        smooth={true}
        offset={-100}
        duration={500}
        className="title-button title-button--primary"
      >
        Voir mes réalisations
      </ScrollLink>
    </div>
  </div>
);

export default MainTitle;
