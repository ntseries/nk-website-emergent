import React from "react";
import { useTranslation } from "react-i18next";
import { Trophy, Shield, Target, AlertTriangle, Book, ExternalLink } from "lucide-react";
import SEOHead from "../../components/SEOHead";

const BeybladeRegulations = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="beyblade-regulations-page">
      <SEOHead 
        title={isEnglish ? "Beyblade X Regulations - NK Board Game | Official Tournament Rules" : "กติกา Beyblade X - NK Board Game | กติกาการแข่งขันอย่างเป็นทางการ"}
        description={isEnglish ? "Complete Beyblade X tournament regulations at NK Board Game. Official rules, equipment regulations, scoring system, and match formats for competitive Beyblade X battles." : "กติกาการแข่งขัน Beyblade X ที่ NK Board Game ฉบับเต็ม กติกาอย่างเป็นทางการ กติกาอุปกรณ์ ระบบให้คะแนน และรูปแบบการแข่งขัน"}
        keywords={isEnglish ? "Beyblade X Regulations, Tournament Rules, Equipment Regulations, Scoring System, Match Formats, NK Board Game" : "กติกา Beyblade X, กติกาการแข่งขัน, กติกาอุปกรณ์, ระบบให้คะแนน, รูปแบบการแข่งขัน, NK Board Game"}
        url={isEnglish ? "https://nkboardgame.com/en/beyblade/regulations" : "https://nkboardgame.com/beyblade/regulations"}
      />

      {/* Hero Section */}
      <section className="hero-section regulations-hero">
        <div className="hero-content">
          <div className="hero-badge">{t('beyblade_regulations.hero.badge')}</div>
          <h1 className="hero-title">
            {t('beyblade_regulations.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('beyblade_regulations.hero.description')}
          </p>
          <div className="hero-actions">
            <a href="/beyblade" className="btn btn-secondary btn-lg">
              <ExternalLink className="w-5 h-5" />
              {t('beyblade_regulations.hero.back_to_beyblade')}
            </a>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="toc-section py-12 bg-blue-50">
        <div className="container">
          <h2 className="section-title text-center mb-8">{t('beyblade_regulations.toc.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button onClick={() => scrollToSection('game-components')} className="toc-item">
              <Target className="w-5 h-5" />
              {t('beyblade_regulations.toc.game_components')}
            </button>
            <button onClick={() => scrollToSection('winning')} className="toc-item">
              <Trophy className="w-5 h-5" />
              {t('beyblade_regulations.toc.winning')}
            </button>
            <button onClick={() => scrollToSection('match-phases')} className="toc-item">
              <Shield className="w-5 h-5" />
              {t('beyblade_regulations.toc.match_phases')}
            </button>
            <button onClick={() => scrollToSection('match-types')} className="toc-item">
              <Book className="w-5 h-5" />
              {t('beyblade_regulations.toc.match_types')}
            </button>
            <button onClick={() => scrollToSection('rules-of-battle')} className="toc-item">
              <Target className="w-5 h-5" />
              {t('beyblade_regulations.toc.rules_of_battle')}
            </button>
            <button onClick={() => scrollToSection('equipment')} className="toc-item">
              <Shield className="w-5 h-5" />
              {t('beyblade_regulations.toc.equipment')}
            </button>
            <button onClick={() => scrollToSection('optional-rules')} className="toc-item">
              <Book className="w-5 h-5" />
              {t('beyblade_regulations.toc.optional_rules')}
            </button>
            <button onClick={() => scrollToSection('disqualification')} className="toc-item">
              <AlertTriangle className="w-5 h-5" />
              {t('beyblade_regulations.toc.disqualification')}
            </button>
          </div>
        </div>
      </section>

      {/* Game Components */}
      <section id="game-components" className="regulation-section py-16">
        <div className="container">
          <div className="regulation-header">
            <Target className="w-8 h-8 text-blue-600" />
            <h2 className="regulation-title">{t('beyblade_regulations.game_components.title')}</h2>
          </div>

          {/* Bey */}
          <div className="regulation-subsection">
            <h3 className="regulation-subtitle">{t('beyblade_regulations.game_components.bey.title')}</h3>
            <div className="regulation-content">
              <ul className="regulation-list">
                {Object.keys(t('beyblade_regulations.game_components.bey.items', { returnObjects: true })).map((key) => (
                  <li key={key}>{t(`beyblade_regulations.game_components.bey.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deck */}
          <div className="regulation-subsection">
            <h3 className="regulation-subtitle">{t('beyblade_regulations.game_components.deck.title')}</h3>
            <div className="regulation-content">
              <ul className="regulation-list">
                {Object.keys(t('beyblade_regulations.game_components.deck.items', { returnObjects: true })).map((key) => (
                  <li key={key}>{t(`beyblade_regulations.game_components.deck.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Launcher */}
          <div className="regulation-subsection">
            <h3 className="regulation-subtitle">{t('beyblade_regulations.game_components.launcher.title')}</h3>
            <div className="regulation-content">
              <ul className="regulation-list">
                {Object.keys(t('beyblade_regulations.game_components.launcher.items', { returnObjects: true })).map((key) => (
                  <li key={key}>{t(`beyblade_regulations.game_components.launcher.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stadium */}
          <div className="regulation-subsection">
            <h3 className="regulation-subtitle">{t('beyblade_regulations.game_components.stadium.title')}</h3>
            <div className="regulation-content">
              <ul className="regulation-list">
                {Object.keys(t('beyblade_regulations.game_components.stadium.items', { returnObjects: true })).map((key) => (
                  <li key={key}>{t(`beyblade_regulations.game_components.stadium.items.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Winning a Match */}
      <section id="winning" className="regulation-section py-16 bg-gray-50">
        <div className="container">
          <div className="regulation-header">
            <Trophy className="w-8 h-8 text-amber-600" />
            <h2 className="regulation-title">{t('beyblade_regulations.winning.title')}</h2>
          </div>
          <div className="regulation-content">
            <ul className="regulation-list">
              {Object.keys(t('beyblade_regulations.winning.items', { returnObjects: true })).map((key) => (
                <li key={key}>{t(`beyblade_regulations.winning.items.${key}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scoring Finishes */}
      <section className="scoring-section py-16">
        <div className="container">
          <h3 className="regulation-subtitle mb-8">{t('beyblade_regulations.scoring.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="scoring-card xtreme">
              <div className="scoring-icon">⚡</div>
              <div className="scoring-name">{t('beyblade_regulations.scoring.xtreme.name')}</div>
              <div className="scoring-points">3 {t('beyblade_regulations.scoring.points')}</div>
              <p className="scoring-description">{t('beyblade_regulations.scoring.xtreme.description')}</p>
            </div>
            <div className="scoring-card over">
              <div className="scoring-icon">🚀</div>
              <div className="scoring-name">{t('beyblade_regulations.scoring.over.name')}</div>
              <div className="scoring-points">2 {t('beyblade_regulations.scoring.points')}</div>
              <p className="scoring-description">{t('beyblade_regulations.scoring.over.description')}</p>
            </div>
            <div className="scoring-card burst">
              <div className="scoring-icon">💥</div>
              <div className="scoring-name">{t('beyblade_regulations.scoring.burst.name')}</div>
              <div className="scoring-points">2 {t('beyblade_regulations.scoring.points')}</div>
              <p className="scoring-description">{t('beyblade_regulations.scoring.burst.description')}</p>
            </div>
            <div className="scoring-card spin">
              <div className="scoring-icon">🌀</div>
              <div className="scoring-name">{t('beyblade_regulations.scoring.spin.name')}</div>
              <div className="scoring-points">1 {t('beyblade_regulations.scoring.points')}</div>
              <p className="scoring-description">{t('beyblade_regulations.scoring.spin.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Regulations */}
      <section id="equipment" className="regulation-section py-16 bg-gray-50">
        <div className="container">
          <div className="regulation-header">
            <Shield className="w-8 h-8 text-green-600" />
            <h2 className="regulation-title">{t('beyblade_regulations.equipment.title')}</h2>
          </div>
          <div className="regulation-content">
            <ul className="regulation-list">
              {Object.keys(t('beyblade_regulations.equipment.items', { returnObjects: true })).map((key) => (
                <li key={key}>{t(`beyblade_regulations.equipment.items.${key}`)}</li>
              ))}
            </ul>
          </div>

          {/* Banned Parts */}
          <div className="banned-parts-section mt-12">
            <h3 className="regulation-subtitle text-red-600 mb-6">
              <AlertTriangle className="w-6 h-6 inline mr-2" />
              {t('beyblade_regulations.banned.title')}
            </h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <p className="text-red-800 font-semibold mb-2">{t('beyblade_regulations.banned.bit_title')}</p>
              <p className="text-red-700">{t('beyblade_regulations.banned.metal_needle')}</p>
              <p className="text-red-600 text-sm mt-2">{t('beyblade_regulations.banned.reason')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Rules */}
      <section id="optional-rules" className="regulation-section py-16">
        <div className="container">
          <div className="regulation-header">
            <Book className="w-8 h-8 text-purple-600" />
            <h2 className="regulation-title">{t('beyblade_regulations.optional.title')}</h2>
          </div>
          <div className="regulation-content mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">{t('beyblade_regulations.optional.description')}</p>
          </div>
          
          <div className="grid gap-6">
            {Object.keys(t('beyblade_regulations.optional.rules', { returnObjects: true })).map((key) => (
              <div key={key} className="optional-rule-card">
                <h4 className="optional-rule-title">{t(`beyblade_regulations.optional.rules.${key}.title`)}</h4>
                <p className="optional-rule-description">{t(`beyblade_regulations.optional.rules.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disqualification */}
      <section id="disqualification" className="regulation-section py-16 bg-red-50">
        <div className="container">
          <div className="regulation-header">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="regulation-title text-red-600">{t('beyblade_regulations.disqualification.title')}</h2>
          </div>
          <div className="regulation-content">
            <ul className="regulation-list">
              {Object.keys(t('beyblade_regulations.disqualification.items', { returnObjects: true })).map((key) => (
                <li key={key} className="text-red-700">{t(`beyblade_regulations.disqualification.items.${key}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Beyblade CTA */}
      <section className="cta-section py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">{t('beyblade_regulations.cta.title')}</h2>
          <p className="text-gray-900 text-lg mb-8">{t('beyblade_regulations.cta.description')}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="/beyblade" className="btn btn-primary btn-lg">
              <Trophy className="w-5 h-5" />
              {t('beyblade_regulations.cta.back_to_beyblade')}
            </a>
            <a href="/events" className="btn btn-secondary btn-lg">
              <Target className="w-5 h-5" />
              {t('beyblade_regulations.cta.view_events')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeybladeRegulations;