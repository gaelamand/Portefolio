import './styles.scss';
import Designgael from '../../assets/Designgael.png';

const About = () => (
  <section id='about' className="about">
    <h2 className="about-title"><span className='numbers-span'>01.</span> À propos</h2>
    <div className="about-container">
      <div className="about-container-left">
        <p className="about-text">
          Je suis consultant ERP depuis 6 ans, sur SAP puis Microsoft Dynamics 365 Business Central
          et développeur web fullstack de formation. J&apos;ai créé l&apos;un des premiers GPT
          dédiés à Business Central : il a dépassé les <strong>50 000 conversations</strong> et
          obtenu <strong>4,3/5 sur plus de 200 avis</strong>.
        </p>
        <p className="about-text">
          Référent Business Central de la <strong>task force IA</strong> de ma BU, je conçois et
          déploie des agents IA en production : 2 agents Copilot M365 utilisés par mes collègues,
          et un agent Copilot Studio connecté à Business Central via <strong>MCP</strong>.
        </p>
        <p className="about-text">
          En dehors de mon activité salariée, je consacre mon temps personnel à la conception de
          produits : j&apos;ai cadré, développé et mis en production <strong>3 applications
          SaaS</strong> en autonomie complète, en 30 à 60 h de build chacune.
        </p>
        <p className="about-text about-text-highlight">
          Je cherche aujourd&apos;hui à faire de cette pratique mon métier à plein temps :
          transformer l&apos;expérimentation IA en résultat opérationnel mesurable.
        </p>
      </div>
      <div className="about-container-right">
        <img className="picture personal-picture" src={Designgael} alt="Photo de Gaël Amand" />
      </div>
    </div>
    <div className="about-skills">
      <div className="skill-card skill-card--ai">
        <div className="skill-card__header">
          <span className="skill-card__icon">◆</span>
          <h3 className="skill-card__title">IA &amp; Agents</h3>
        </div>
        <ul className="skill-card__list skill-card__list--two-cols">
          <li className="skill-card__item">LLMs</li>
          <li className="skill-card__item">Agents</li>
          <li className="skill-card__item">RAG</li>
          <li className="skill-card__item">MCP</li>
          <li className="skill-card__item">M365 Copilot</li>
          <li className="skill-card__item">Copilot Studio</li>
          <li className="skill-card__item">GPT Store</li>
          <li className="skill-card__item">Prompting avancé</li>
          <li className="skill-card__item">Cadrage de cas d&apos;usage</li>
          <li className="skill-card__item">Conversationnel vs agentique</li>
        </ul>
      </div>
      <div className="skill-card skill-card--build">
        <div className="skill-card__header">
          <span className="skill-card__icon">◆</span>
          <h3 className="skill-card__title">Produit &amp; Build</h3>
        </div>
        <ul className="skill-card__list skill-card__list--two-cols">
          <li className="skill-card__item">Claude Code</li>
          <li className="skill-card__item">Next.js / React</li>
          <li className="skill-card__item">Tailwind</li>
          <li className="skill-card__item">Node.js / Express</li>
          <li className="skill-card__item">Supabase / PostgreSQL</li>
          <li className="skill-card__item">Stripe, Twilio, Resend</li>
          <li className="skill-card__item">Power Automate</li>
          <li className="skill-card__item">Power Platform</li>
          <li className="skill-card__item">n8n / Make / Zapier</li>
          <li className="skill-card__item">Backlog &amp; priorisation</li>
          <li className="skill-card__item">Test &amp; learn / POC</li>
          <li className="skill-card__item">Git / GitHub / Figma</li>
        </ul>
      </div>
      <div className="skill-card skill-card--erp">
        <div className="skill-card__header">
          <span className="skill-card__icon">◆</span>
          <h3 className="skill-card__title">ERP &amp; Métier</h3>
        </div>
        <ul className="skill-card__list">
          <li className="skill-card__item">Business Central</li>
          <li className="skill-card__item">SAP S/4HANA</li>
          <li className="skill-card__item">SAP ECC6</li>
          <li className="skill-card__item">AS400 / JDE</li>
          <li className="skill-card__item">Ateliers métiers</li>
          <li className="skill-card__item">Conduite du changement</li>
          <li className="skill-card__item">Formation utilisateurs</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
