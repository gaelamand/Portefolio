import './styles.scss';
import { useState } from 'react';
import WebDev from '../../assets/projects/web-development.png';
import oplayground from '../../assets/projects/oplayground.jpg';
import Sushi from '../../assets/sushi-1.jpg';
import MiaDC from '../../assets/MiaDC.jpg';
import Nico from '../../assets/projects/Nico.jpeg';

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  GPT_BC_URL,
  BONNIE_URL,
  KLOZAT_URL,
  EVOLYA_URL,
  OPLAYGROUND_URL,
  SUSHI_URL,
  MIA_URL,
  NICOLAS_URL,
} from '../../data/links';

const GROUPS = [
  {
    id: 'ia',
    title: 'IA & Agents',
    tagline: 'GPT Store',
    intro:
      "Création d'un GPT pour répondre à un manque de réponses fonctionnelles pour les consultants Business Central.",
    projects: [
      {
        highlight: true,
        letter: 'BC',
        color: '#74AA9C',
        reference: 'GPT public · 2024',
        title: 'Business Central Expert',
        status: 'Publié sur le GPT Store',
        stats: [
          { value: '50 000+', label: 'conversations' },
          { value: '4,3/5', label: 'note moyenne' },
          { value: '200+', label: 'avis' },
        ],
        tags: [
          { label: 'ChatGPT', cls: 'chatgpt' },
          { label: 'Prompting', cls: 'claude' },
          { label: 'Business Central', cls: 'bc' },
        ],
        description:
          "L'un des premiers GPT dédiés à Microsoft Dynamics 365 Business Central. Cas d'usage identifié, construit et diffusé en autonomie — sans budget ni promotion.",
        link: GPT_BC_URL,
        accent: 'teal',
        cta: 'Tester le GPT',
      },
    ],
  },
  {
    id: 'vibecoding',
    title: 'Vibecoding',
    tagline: 'Claude Code · ChatGPT',
    intro: 'Développement de produits seul, du cadrage à la mise en production.',
    projects: [
      {
        letter: 'B',
        color: '#1a1a1a',
        reference: 'Produit SaaS · 2026',
        title: 'Bonnie',
        tags: [
          { label: 'Next.js', cls: 'next' },
          { label: 'React', cls: 'react' },
          { label: 'Tailwind', cls: 'tailwind' },
          { label: 'Supabase', cls: 'supabase' },
          { label: 'Twilio', cls: 'twilio' },
          { label: 'Resend', cls: 'resend' },
          { label: 'Claude Code', cls: 'claude' },
        ],
        description:
          "Gestion de rendez-vous et CRM pour les artisans du bâtiment : planning, clients, relances SMS et e-mail automatisées. Validé auprès d'une artisane pilote. Stripe et Pennylane en cours.",
        link: BONNIE_URL,
        accent: 'black',
        cta: 'In build',
      },
      {
        letter: 'K',
        color: '#3B82F6',
        reference: 'Produit SaaS · 2026',
        title: 'Klozat',
        tags: [
          { label: 'Next.js', cls: 'next' },
          { label: 'React', cls: 'react' },
          { label: 'Tailwind', cls: 'tailwind' },
          { label: 'Supabase', cls: 'supabase' },
          { label: 'PostgreSQL', cls: 'postgre' },
          { label: 'Claude Code', cls: 'claude' },
        ],
        description:
          "CRM immobilier : suivi des biens, des acquéreurs et du cycle de vente. Cadré, développé et mis en production en autonomie, puis testé avec un utilisateur pilote.",
        link: KLOZAT_URL,
        accent: 'blue',
      },
      {
        letter: 'E',
        color: '#6B9E6E',
        reference: 'Produit SaaS · 2025',
        title: 'Evolya',
        tags: [
          { label: 'React', cls: 'react' },
          { label: 'Tailwind', cls: 'tailwind' },
          { label: 'NodeJS', cls: 'node' },
          { label: 'Express', cls: 'express' },
          { label: 'PostgreSQL', cls: 'postgre' },
          { label: 'Claude Code', cls: 'claude' },
        ],
        description:
          "Gestion des cadeaux, des partenariats de marque et des déclarations fiscales pour les créateurs de contenu. Mon premier produit passé en production.",
        link: EVOLYA_URL,
        accent: 'green',
      },
      {
        image: Sushi,
        alt: 'Site Sushi Chef',
        reference: 'Site client',
        title: 'Sushi Chef',
        tags: [
          { label: 'React', cls: 'react' },
          { label: 'Tailwind', cls: 'tailwind' },
          { label: 'Javascript', cls: 'javascript' },
          { label: 'Claude Code', cls: 'claude' },
        ],
        description:
          "Vitrine d'un chef sushi qui lance son activité. Un rendu épuré et appétissant pour présenter son savoir-faire et ses prestations.",
        link: SUSHI_URL,
        accent: 'blue',
      },
      {
        image: MiaDC,
        alt: 'Site Mia Da Costa',
        reference: 'Site client',
        title: 'Mia Da Costa',
        tags: [
          { label: 'React', cls: 'react' },
          { label: 'Tailwind', cls: 'tailwind' },
          { label: 'Javascript', cls: 'javascript' },
          { label: 'Claude Code', cls: 'claude' },
        ],
        description:
          "Portfolio d'une Community & Brand Strategy Manager, conçu pour mettre en avant son expertise et ses projets clients.",
        link: MIA_URL,
        accent: 'blue',
      },
    ],
  },
  {
    id: 'code-pur',
    title: 'Code pur',
    tagline: 'Écrit à la main, ligne à ligne',
    intro:
      "Le socle qui rend le vibecoding fiable. Savoir lire, déboguer et reprendre ce qu'une IA produit, c'est ce qui sépare un POC d'un produit qui tient en production.",
    projects: [
      {
        image: oplayground,
        alt: "Application O'playground",
        reference: 'Projet de fin de formation',
        title: "O'playground",
        tags: [
          { label: 'React', cls: 'react' },
          { label: 'Tailwind', cls: 'tailwind' },
          { label: 'NodeJS', cls: 'node' },
          { label: 'Express', cls: 'express' },
          { label: 'PostgreSQL', cls: 'postgre' },
        ],
        description:
          "Application qui aide à trouver un terrain de sport partout en France et à réunir des joueurs. Développeur front-end React, en équipe de 5, méthode Agile.",
        link: OPLAYGROUND_URL,
        accent: 'green',
      },
      {
        image: WebDev,
        alt: 'Illustration du portfolio',
        imageClass: 'portfolio-img',
        containerClass: 'portfolio',
        reference: 'Portfolio',
        title: 'Ce site',
        tags: [
          { label: 'React', cls: 'react' },
          { label: 'SCSS', cls: 'scss' },
          { label: 'Javascript', cls: 'javascript' },
          { label: 'HTML', cls: 'html' },
        ],
        description:
          "Le site que vous lisez. React et SCSS, sans framework de composants : navigation par scroll, onglets d'expérience, formulaire de contact, animations.",
        link: '#',
        isEasterEgg: true,
        accent: 'purple',
      },
    ],
  },
  {
    id: 'cms',
    title: 'CMS',
    tagline: 'WordPress',
    intro:
      "Parfois le besoin réel, c'est que le client reprenne la main sur son contenu sans moi. Le bon outil n'est pas toujours du code, c'est aussi une décision produit.",
    projects: [
      {
        image: Nico,
        alt: 'Site Nicolas Dionnet',
        reference: 'Site client',
        title: 'Nicolas Dionnet',
        tags: [{ label: 'WordPress', cls: 'wordpress' }],
        description:
          "Site d'un praticien en hypnothérapie. Un univers coloré et apaisant, livré sur WordPress pour qu'il gère son contenu en toute autonomie.",
        link: NICOLAS_URL,
        accent: 'wordpress',
      },
    ],
  },
];

const ProjectCard = ({ project, onEasterEggClick }) => (
  <div className={`card-wrapper ${project.highlight ? 'card-wrapper--highlight' : ''}`}>
    <div className={`card-image-container ${project.containerClass || ''}`}>
      {project.image ? (
        <img
          className={project.imageClass || 'card-img'}
          src={project.image}
          alt={project.alt}
        />
      ) : (
        <div className="card-letter-bg" style={{ background: project.color }}>
          <span
            className={`card-letter ${project.letter.length > 1 ? 'card-letter--wide' : ''}`}
          >
            {project.letter}
          </span>
        </div>
      )}
    </div>

    <p className="card-reference">{project.reference}</p>
    <h3 className="card-title">{project.title}</h3>
    {project.status && <p className="card-status">{project.status}</p>}

    {project.stats && (
      <div className="card-stats">
        {project.stats.map((stat) => (
          <div className="card-stat" key={stat.label}>
            <span className="card-stat__value">{stat.value}</span>
            <span className="card-stat__label">{stat.label}</span>
          </div>
        ))}
      </div>
    )}

    <div className="card-tags">
      {project.tags.map((tag) => (
        <div key={tag.label} className={`card-tag ${tag.cls}`}>
          {tag.label}
        </div>
      ))}
    </div>

    <p className="card-description">{project.description}</p>

    <div className="card-links">
      <a
        href={project.link}
        target={project.isEasterEgg ? undefined : '_blank'}
        rel="noreferrer"
        onClick={
          project.isEasterEgg
            ? (e) => {
                e.preventDefault();
                onEasterEggClick();
              }
            : undefined
        }
      >
        <div className={`card-link card-link--${project.accent}`}>
          <OpenInNewRoundedIcon />
          <p className="card-link__view--text">{project.cta || 'Voir en ligne'}</p>
        </div>
      </a>
    </div>
  </div>
);

const EasterEggModal = ({ onClose }) => (
  <div className="easter-egg-overlay" onClick={onClose}>
    <div className="easter-egg-modal" onClick={(e) => e.stopPropagation()}>
      <button className="easter-egg-modal__close" onClick={onClose} aria-label="Fermer">
        <CloseRoundedIcon />
      </button>
      <p className="easter-egg-modal__text">Come on bro...</p>
    </div>
  </div>
);

const Projects = () => {
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2 className="projects-title"><span className="numbers-span">03.</span> Réalisations personnelles</h2>
      </div>

      {GROUPS.map((group) => (
        <div key={group.id} className="project-group">
          <div className="project-group__header">
            <h3 className="project-group__title">
              {group.title}
              <span className="project-group__tagline">{group.tagline}</span>
            </h3>
            <p className="project-group__intro">{group.intro}</p>
          </div>
          <div className="cards-container">
            {group.projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onEasterEggClick={() => setIsEasterEggOpen(true)}
              />
            ))}
          </div>
        </div>
      ))}

      {isEasterEggOpen && <EasterEggModal onClose={() => setIsEasterEggOpen(false)} />}
    </section>
  );
};

export default Projects;
