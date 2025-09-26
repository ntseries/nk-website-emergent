import React from "react";
import { useTranslation } from "react-i18next";
import { Trophy, Target, Calculator, Calendar, Users, Zap, ArrowUp, ArrowDown, Star, ExternalLink } from "lucide-react";
import SEOHead from "../../components/SEOHead";

const BeybladeRating = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  return (
    <div className="beyblade-rating-page">
      <SEOHead 
        title={isEnglish ? "Elo Rating System - NK Beyblade X | How Elo Rating Works" : "ระบบ Elo Rating - NK Beyblade X | ทำความเข้าใจ Elo Rating"}
        description={isEnglish ? "Learn about NK Beyblade X Elo Rating system, how it works, calculation methods, season resets, and why we use Elo Rating for fair competition." : "เรียนรู้เกี่ยวกับระบบ Elo Rating ของ NK Beyblade X วิธีการทำงาน การคำนวณคะแนน การรีเซ็ต Season และเหตุผลที่เราใช้ Elo Rating"}
        keywords={isEnglish ? "Elo Rating, Beyblade X, NK Board Game, Rating System, Competition, Leaderboard, Ranking, Season Reset" : "Elo Rating, เบย์เบลด เอ็กซ์, NK Board Game, ระบบคะแนน, การแข่งขัน, อันดับ, Season Reset"}
        url={isEnglish ? "https://nkboardgame.com/en/beyblade/rating" : "https://nkboardgame.com/beyblade/rating"}
      />

      {/* Hero Section */}
      <section className="hero-section rating-hero">
        <div className="hero-content">
          <div className="hero-badge">{t('beyblade_rating.hero.badge')}</div>
          <h1 className="hero-title">
            {t('beyblade_rating.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('beyblade_rating.hero.description')}
          </p>
          <div className="hero-actions">
            <a href="/beyblade" className="btn btn-secondary btn-lg">
              <ExternalLink className="w-5 h-5" />
              {t('beyblade_rating.hero.back_to_beyblade')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Elo Rating Section */}
      <section className="why-elo-section py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="section-header text-center mb-16">
            <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="section-title text-blue-900">{t('beyblade_rating.why_elo.title')}</h2>
            <p className="section-subtitle text-blue-700 text-lg font-medium mb-8">{t('beyblade_rating.why_elo.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
              <div className="benefit-icon bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('beyblade_rating.why_elo.motivation')}</p>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="benefit-icon bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('beyblade_rating.why_elo.fairness')}</p>
            </div>
            
            <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="benefit-icon bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <p className="text-gray-700 leading-relaxed">{t('beyblade_rating.why_elo.realtime')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Elo Rating Section */}
      <section className="what-is-elo-section py-20">
        <div className="container">
          <div className="section-header text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full mb-4">
              <Calculator className="w-8 h-8" />
            </div>
            <h2 className="section-title">{t('beyblade_rating.what_is.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-12">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{t('beyblade_rating.what_is.definition')}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="result-card bg-green-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                      <ArrowUp className="w-5 h-5" />
                    </div>
                    <span className="text-green-800 font-semibold text-lg">{t('beyblade_rating.what_is.win')}</span>
                  </div>
                  <p className="text-green-700">{t('beyblade_rating.what_is.win_description')}</p>
                </div>

                <div className="result-card bg-red-50 rounded-2xl p-6 border border-red-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                    <span className="text-red-800 font-semibold text-lg">{t('beyblade_rating.what_is.lose')}</span>
                  </div>
                  <p className="text-red-700">{t('beyblade_rating.what_is.lose_description')}</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">{t('beyblade_rating.what_is.win_strong_title')}</p>
                    <p className="text-blue-700 font-medium">{t('beyblade_rating.what_is.win_strong')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm mb-2">{t('beyblade_rating.what_is.lose_weak_title')}</p>
                    <p className="text-purple-700 font-medium">{t('beyblade_rating.what_is.lose_weak')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Calculate Section */}
      <section className="calculation-section py-20 bg-gray-50">
        <div className="container">
          <div className="section-header text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full mb-4">
              <Calculator className="w-8 h-8" />
            </div>
            <h2 className="section-title">{t('beyblade_rating.calculation.title')}</h2>
            <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">{t('beyblade_rating.calculation.subtitle')}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bonus-card bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">{t('beyblade_rating.calculation.upset_bonus.title')}</h3>
                </div>
                <p className="text-yellow-100 leading-relaxed">{t('beyblade_rating.calculation.upset_bonus.description')}</p>
              </div>

              <div className="bonus-card bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">{t('beyblade_rating.calculation.sweep_bonus.title')}</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">{t('beyblade_rating.calculation.sweep_bonus.description')}</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Season & Leaderboard Section */}
      <section className="season-section py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container">
          <div className="section-header text-center mb-16">
            <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="section-title text-purple-900">{t('beyblade_rating.season.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="season-card bg-white rounded-2xl p-8 shadow-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">{t('beyblade_rating.season.reset.title')}</h3>
                <p className="text-purple-700 mb-4">{t('beyblade_rating.season.reset.description')}</p>
                <div className="bg-purple-100 rounded-lg p-4">
                  <p className="text-purple-800 font-medium text-sm">{t('beyblade_rating.season.reset.bonus')}</p>
                </div>
              </div>

              <div className="season-card bg-white rounded-2xl p-8 shadow-lg border border-pink-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">{t('beyblade_rating.season.rewards.title')}</h3>
                <p className="text-purple-700">{t('beyblade_rating.season.rewards.description')}</p>
              </div>
            </div>

            <div className="text-center">
              <a href="https://beyblade.nkboardgame.com/leaderboard" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <Trophy className="w-5 h-5" />
                {t('beyblade_rating.season.view_leaderboard')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="examples-section py-20">
        <div className="container">
          <div className="section-header text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded-full mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="section-title">{t('beyblade_rating.examples.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Example 1 */}
              <div className="example-card bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                    <ArrowUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">{t('beyblade_rating.examples.example1.title')}</h3>
                </div>
                <p className="text-green-700 leading-relaxed">{t('beyblade_rating.examples.example1.description')}</p>
              </div>

              {/* Example 2 */}
              <div className="example-card bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800">{t('beyblade_rating.examples.example2.title')}</h3>
                </div>
                <p className="text-red-700 leading-relaxed">{t('beyblade_rating.examples.example2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t('beyblade_rating.cta.title')}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">{t('beyblade_rating.cta.description')}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="/beyblade" className="btn btn-secondary btn-lg">
              <Trophy className="w-5 h-5" />
              {t('beyblade_rating.cta.join_competition')}
            </a>
            <a href="https://beyblade.nkboardgame.com/leaderboard" className="btn btn-outline-white btn-lg" target="_blank" rel="noopener noreferrer">
              <Star className="w-5 h-5" />
              {t('beyblade_rating.cta.view_rankings')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeybladeRating;