import './styles.scss';
import { useState } from 'react';

const Works = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section id='work' className="work">
      <h2 className="work-title"><span className='numbers-span'>02.</span> Expérience</h2>
      <div className="inner">
        <div className="tablist">
          <button
            className={toggleState === 1 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(1)}
          >SYD DIGITAL CARE
          </button>
          <button
            className={toggleState === 2 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(2)}
          >Projets perso
          </button>
          <button
            className={toggleState === 3 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(3)}
          >O&apos;playground
          </button>
          <button
            className={toggleState === 4 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(4)}
          >NTT DATA
          </button>
          <button
            className={toggleState === 5 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(5)}
          >Reckitt Benckiser
          </button>
          <button
            className={toggleState === 6 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(6)}
          >Lactalis
          </button>
          <button
            className={toggleState === 7 ? "tablist-item tablist-item--active" : "tablist-item"}
            onClick={() => toggleTab(7)}
          >Voyages
          </button>
        </div>

        <div className="content-tabs">

          {/* ---------------- SYD DIGITAL CARE ---------------- */}
          <div className={toggleState === 1 ? "content active-content" : "content"}>
            <h3 className="tab-title">Consultant ERP Business Central<span className='company-span'>@ SYD DIGITAL CARE</span></h3>
            <p className="tab-date">Novembre 2023 — aujourd&apos;hui · Rennes</p>
            <p className="tab-context">Cabinet de conseil et d&apos;intégration. Clients PME et ETI, 10 à 60 M€ de CA. Projets de 5 à 18 mois.</p>
            <div className="tab-description">
              <h4 className="tab-group-title">Intelligence artificielle &amp; agents</h4>
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Membre de la <strong>task force IA</strong> de la BU (5 collaborateurs sur 64), en tant que référent sur le périmètre Business Central</li>
                <li className="tab-description__list__item">Conception et déploiement de <strong>2 agents Microsoft 365 Copilot</strong> désormais utilisés par les consultants de l&apos;équipe : génération de comptes rendus d&apos;atelier structurés avec qualification automatique des écarts au standard Business Central (type d&apos;écart et niveau de difficulté), et génération de spécifications fonctionnelles normées</li>
                <li className="tab-description__list__item">Développement d&apos;un <strong>agent Copilot Studio connecté à Business Central via MCP</strong> : interrogation du stock disponible en langage naturel, dans un usage de type chatbot client</li>
                <li className="tab-description__list__item">Développement d&apos;un agent conversationnel Copilot Studio adossé à une <strong>base documentaire (RAG)</strong> pour répondre aux questions fonctionnelles des utilisateurs</li>
              </ul>

              <h4 className="tab-group-title">Conseil &amp; delivery ERP</h4>
              <ul className="tab-description__list">
                <li className="tab-description__list__item">4 go-live à date, sur 7 périmètres fonctionnels : Achats, Ventes, Stock, Master Data, Interfaces, Planification, Production</li>
                <li className="tab-description__list__item">Animation d&apos;ateliers de conception : recueil, challenge et arbitrage des besoins métiers</li>
                <li className="tab-description__list__item">Paramétrage complet des modules et structuration de la master data</li>
                <li className="tab-description__list__item">Rédaction des spécifications fonctionnelles et arbitrage standard vs développement spécifique</li>
                <li className="tab-description__list__item">Cadrage fonctionnel et participation à la réalisation d&apos;une application Power Platform de gestion du stock sur le terrain</li>
                <li className="tab-description__list__item">Formation et accompagnement des utilisateurs, support post go-live</li>
              </ul>
            </div>
          </div>

          {/* ---------------- PROJETS PERSO ---------------- */}
          <div className={toggleState === 2 ? "content active-content" : "content"}>
            <h3 className="tab-title">Product Builder<span className='company-span'>@ Temps personnel</span></h3>
            <p className="tab-date">2023 — aujourd&apos;hui</p>
            <p className="tab-context">Cadrage du besoin, design, développement, mise en production et test avec utilisateur pilote — en autonomie complète. Stack : Next.js, React, Tailwind, Supabase, PostgreSQL. <strong>30 à 60 h de build par application.</strong></p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item"><strong>« Business Central Expert » (2024)</strong> — L&apos;un des premiers GPT dédiés à Microsoft Dynamics 365 Business Central, publié sur le GPT Store. <strong>+50 000 conversations, 4,3/5 sur +200 avis.</strong> Cas d&apos;usage identifié, construit et diffusé en autonomie, sans budget ni promotion.</li>
                <li className="tab-description__list__item"><strong>Bonnie (2026)</strong> — Gestion de rendez-vous et CRM pour artisans du bâtiment. En production, validé auprès d&apos;une artisane pilote. Intégrations Twilio (SMS) et Resend (e-mail) ; Stripe et Pennylane en cours.</li>
                <li className="tab-description__list__item"><strong>Klozat (2026)</strong> — CRM immobilier. En production, utilisateur pilote.</li>
                <li className="tab-description__list__item"><strong>Evolya (2025)</strong> — Gestion des cadeaux et partenariats pour créateurs de contenu. En production, utilisateur pilote.</li>
                <li className="tab-description__list__item">3 sites web clients livrés en vibecoding et 1 site WordPress client (2023 — 2026)</li>
                <li className="tab-description__list__item">gaelamand.fr — ce site, développé en code pur</li>
              </ul>
              <p className="tab-outro">Chaque produit est en ligne et testable — voir la section Réalisations ci-dessous.</p>
            </div>
          </div>

          {/* ---------------- O'PLAYGROUND ---------------- */}
          <div className={toggleState === 3 ? "content active-content" : "content"}>
            <h3 className="tab-title">Développeur front-end<span className='company-span'>@ O&apos;playground</span></h3>
            <p className="tab-date">Février — Mars 2023 · Projet de fin de formation</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Développement front-end en équipe de 5, méthode Agile (React, Next.js, Tailwind, Axios, React Hook Form)</li>
                <li className="tab-description__list__item">Brief client, cahier des charges, planning</li>
                <li className="tab-description__list__item">Choix des langages, librairies et frameworks</li>
                <li className="tab-description__list__item">Compréhension de l&apos;environnement back-end</li>
              </ul>
              <p className="tab-outro">Le projet est en ligne — voir la section Réalisations ci-dessous.</p>
            </div>
          </div>

          {/* ---------------- NTT DATA ---------------- */}
          <div className={toggleState === 4 ? "content active-content" : "content"}>
            <h3 className="tab-title">Consultant SAP (Achats)<span className='company-span'>@ NTT DATA</span></h3>
            <p className="tab-date">Octobre 2019 — Juillet 2022 · Paris</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">2 projets greenfield d&apos;implémentation SAP S/4HANA (interface Fiori), d&apos;environ 18 mois chacun, pour les groupes UPSA (laboratoire pharmaceutique) puis Herta (agroalimentaire)</li>
                <li className="tab-description__list__item">Animation d&apos;ateliers de conception et recueil des besoins clients</li>
                <li className="tab-description__list__item">Paramétrage de la solution et rédaction des spécifications aux développeurs (analyse d&apos;écart standard vs spécifique)</li>
                <li className="tab-description__list__item">Formation des utilisateurs et résolution des incidents post go-live — méthode Agile</li>
              </ul>
            </div>
          </div>

          {/* ---------------- RECKITT ---------------- */}
          <div className={toggleState === 5 ? "content active-content" : "content"}>
            <h3 className="tab-title">Coordinateur de stock &amp; Super User SAP<span className='company-span'>@ Reckitt Benckiser</span></h3>
            <p className="tab-date">Novembre 2017 — Avril 2019</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Gestion du stock quotidien de l&apos;entrepôt principal et de 4 entrepôts externes</li>
                <li className="tab-description__list__item">Pilotage des flux entrants et sortants entre entrepôts de débord et entrepôt principal</li>
                <li className="tab-description__list__item">Super User SAP : accompagnement des équipes au changement lors du go-live</li>
              </ul>
            </div>
          </div>

          {/* ---------------- LACTALIS ---------------- */}
          <div className={toggleState === 6 ? "content active-content" : "content"}>
            <h3 className="tab-title">Supply Planner<span className='company-span'>@ Lactalis</span></h3>
            <p className="tab-date">Mai — Octobre 2016 · Stage de fin d&apos;études</p>
            <div className="tab-description">
              <p className="tab-context">Pilotage de deux usines (Écosse et Belgique) :</p>
              <ul className="tab-description__list">
                <li className="tab-description__list__item">Établissement du plan de production hebdomadaire</li>
                <li className="tab-description__list__item">Optimisation des stocks de produits finis</li>
              </ul>
            </div>
          </div>

          {/* ---------------- VOYAGES ---------------- */}
          <div className={toggleState === 7 ? "content active-content" : "content"}>
            <h3 className="tab-title">Voyages<span className='company-span'>@ Ailleurs</span></h3>
            <p className="tab-date">2017 &amp; 2019</p>
            <div className="tab-description">
              <ul className="tab-description__list">
                <li className="tab-description__list__item">2017 — 8 mois en Asie du Sud-Est, 8 pays traversés</li>
                <li className="tab-description__list__item">2019 — 2 mois de woofing en Alaska</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
