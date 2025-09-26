import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Trophy, Zap, Gift, Users, Calendar, Target, Star, ExternalLink, Eye } from "lucide-react";
import SEOHead from "../components/SEOHead";

const Beyblade = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';
  
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://bbapi.nkboardgame.com/api/v1/leaderboard?limit=10&offset=0');
        if (response.ok) {
          const data = await response.json();
          // Process the data to decode URL encoded names
          const processedData = data.map(player => ({
            ...player,
            decodedName: decodeURIComponent(player.name)
          }));
          setLeaderboardData(processedData);
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        // Set mock data for fallback
        setLeaderboardData([
          { rank: 1, decodedName: "Phoenix Master", rating: 1847, avatar: "" },
          { rank: 2, decodedName: "Blade Striker", rating: 1742, avatar: "" },
          { rank: 3, decodedName: "X Warrior", rating: 1698, avatar: "" },
          { rank: 4, decodedName: "Storm Legend", rating: 1634, avatar: "" },
          { rank: 5, decodedName: "Thunder King", rating: 1587, avatar: "" }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Gallery images from NK Board Game Beyblade activities
  const galleryImages = [
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_01.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_02.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_03.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_04.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_05.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_06.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_07.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_08.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_09.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_10.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_11.jpg",
    "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_12.jpg"
  ];

  return (
    <div className="beyblade-page">
      <SEOHead 
        title={t('beyblade.meta.title')}
        description={t('beyblade.meta.description')}
        keywords={t('beyblade.meta.keywords')}
        url={isEnglish ? "https://nkboardgame.com/en/beyblade" : "https://nkboardgame.com/beyblade"}
      />

      {/* Hero Section */}
      <section className="hero-section beyblade-hero relative overflow-hidden">
        {/* Beyblade X Logo */}
        <div className="absolute top-8 right-8 z-10">
          <img 
            src="https://customer-assets.emergentagent.com/job_pnk-branch-update/artifacts/koctwurh_Screenshot%202568-09-26%20at%2013.27.34.png" 
            alt="Beyblade X" 
            className="h-16 w-auto opacity-90"
          />
        </div>
        
        <div className="hero-bg-overlay"></div>
        <div className="hero-bg" style={{
          backgroundImage: `url('https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Beyblade_Atmosphere_01.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        
        <div className="hero-content relative z-10">
          <div className="hero-badge">{t('beyblade.hero.badge')}</div>
          <h1 className="hero-title beyblade-title">
            {t('beyblade.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('beyblade.hero.description')}
          </p>
          <div className="hero-actions">
            <a href="/events" className="btn btn-primary btn-lg">
              <Calendar className="w-5 h-5" />
              {t('beyblade.hero.cta_schedule')}
            </a>
            <a href="https://www.nkboardgame.com/beyblade/ranking" className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
              <Trophy className="w-5 h-5" />
              {t('beyblade.hero.cta_ranking')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-blue-900">{t('beyblade.activities.title')}</h2>
            <p className="section-subtitle text-blue-700">{t('beyblade.activities.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="activity-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">{t('beyblade.activities.daily.title')}</h3>
              <p className="text-blue-700">{t('beyblade.activities.daily.description')}</p>
            </div>
            
            <div className="activity-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <Trophy className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">{t('beyblade.activities.weekly.title')}</h3>
              <p className="text-blue-700">{t('beyblade.activities.weekly.description')}</p>
            </div>
            
            <div className="activity-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <Star className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-3">{t('beyblade.activities.special.title')}</h3>
              <p className="text-blue-700">{t('beyblade.activities.special.description')}</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/beyblade/regulations" className="btn btn-outline-blue">
              <ExternalLink className="w-5 h-5" />
              {t('beyblade.activities.regulations_link')}
            </a>
          </div>
        </div>
      </section>

      {/* Ranking & Leaderboard Section */}
      <section className="ranking-section py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-white">{t('beyblade.ranking.title')}</h2>
            <p className="section-subtitle text-blue-200 mb-6">{t('beyblade.ranking.subtitle')}</p>
            <p className="text-blue-300 max-w-3xl mx-auto">{t('beyblade.ranking.elo_description')}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('beyblade.ranking.top_players')}</h3>
            
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
                <p className="text-blue-200">{t('beyblade.ranking.loading')}</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-400/30">
                      <th className="text-left py-4 px-4 text-blue-200 font-medium">{t('beyblade.ranking.rank')}</th>
                      <th className="text-left py-4 px-4 text-blue-200 font-medium">{t('beyblade.ranking.player')}</th>
                      <th className="text-right py-4 px-4 text-blue-200 font-medium">{t('beyblade.ranking.elo')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((player, index) => (
                      <tr key={index} className="border-b border-blue-400/10 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center">
                            {index < 3 && (
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-amber-600'
                              }`}>
                                <Trophy className="w-4 h-4 text-white" />
                              </div>
                            )}
                            <span className="text-white font-bold text-lg">#{player.rank || index + 1}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            {player.avatar && (
                              <img 
                                src={player.avatar} 
                                alt={player.decodedName || player.name} 
                                className="w-10 h-10 rounded-full object-cover border-2 border-blue-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            )}
                            <span className="text-white font-medium">
                              {player.decodedName || player.player_name || player.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-2xl font-bold text-blue-300">
                            {player.rating || player.elo_rating || player.elo}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="https://www.nkboardgame.com/beyblade/ranking" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
                <Eye className="w-5 h-5" />
                {t('beyblade.ranking.view_all_ranking')}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="/beyblade/rating" className="btn btn-secondary btn-lg">
                <Trophy className="w-5 h-5" />
                {t('beyblade.ranking.what_is_elo')}
              </a>
              <a href="/events" className="btn btn-outline-blue btn-lg">
                <Calendar className="w-5 h-5" />
                {t('beyblade.ranking.tournament_calendar')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="rewards-section py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title text-purple-900">{t('beyblade.rewards.title')}</h2>
            <p className="section-subtitle text-purple-700 mb-4">{t('beyblade.rewards.subtitle')}</p>
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold text-lg">
              ⏰ {t('beyblade.rewards.season_reset')}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rewards-card bg-white rounded-2xl p-8 shadow-lg">
              <Gift className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-purple-900 mb-6">{t('beyblade.rewards.sample_rewards.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-purple-700">{t('beyblade.rewards.sample_rewards.phoenix_wing')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-purple-700">{t('beyblade.rewards.sample_rewards.ux_15')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-purple-700">{t('beyblade.rewards.sample_rewards.exclusive')}</span>
                </div>
              </div>
            </div>

            <div className="rewards-info bg-white rounded-2xl p-8 shadow-lg">
              <Zap className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-purple-900 mb-6">วิธีการรับรางวัล</h3>
              <div className="space-y-4 text-purple-700">
                <p>{t('beyblade.rewards.prizes.daily_weekly')}</p>
                <p>{t('beyblade.rewards.prizes.special_tournaments')}</p>
                <p>{t('beyblade.rewards.prizes.top_players')}</p>
                <p>{t('beyblade.rewards.prizes.elo_points')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-20 bg-gray-50">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title">{t('beyblade.gallery.title')}</h2>
            <p className="section-subtitle">{t('beyblade.gallery.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={image} 
                  alt={`Beyblade Tournament at NK Board Game ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-20 bg-white">
        <div className="container">
          <div className="section-header text-center mb-16">
            <h2 className="section-title">{t('beyblade.faq.title')}</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {Object.keys(t('beyblade.faq.items', { returnObjects: true })).map((key) => (
                <div key={key} className="faq-item bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {t(`beyblade.faq.items.${key}.question`)}
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    {t(`beyblade.faq.items.${key}.answer`)}
                    {key === 'regulations' && (
                      <a href="/beyblade/regulations" className="text-blue-600 hover:text-blue-800 ml-2 underline">
                        <ExternalLink className="w-4 h-4 inline ml-1" />
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beyblade;