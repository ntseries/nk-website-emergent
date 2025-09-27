import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import SEOHead from "../components/SEOHead";

const Events = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  const getLocalizedPath = (path) => {
    if (isEnglish) {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  // Format date to Thai/English format with timezone conversion
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      timeZone: 'Asia/Bangkok',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    
    return date.toLocaleDateString(isEnglish ? 'en-US' : 'th-TH', options);
  };

  // Get day and month for icon display
  const getDateIcon = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString('th-TH', { 
      timeZone: 'Asia/Bangkok',
      day: 'numeric' 
    });
    const month = date.toLocaleDateString('th-TH', { 
      timeZone: 'Asia/Bangkok',
      month: 'short' 
    });
    return { day, month };
  };

  // Get event type badge color
  const getBadgeColor = (eventType) => {
    switch (eventType) {
      case 'Beyblade X':
        return 'bg-blue-100 text-blue-800';
      case 'Board Game':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Decode URL encoded winner name
  const decodeWinnerName = (name) => {
    try {
      return decodeURIComponent(name);
    } catch (error) {
      return name; // Return original if decode fails
    }
  };

  // Fetch events data
  const fetchEvents = async (status) => {
    try {
      const response = await fetch(`https://api.nkboardgame.com/api/events?status=${status}`);
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Error fetching ${status} events:`, err);
      throw err;
    }
  };

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [upcoming, past] = await Promise.all([
          fetchEvents('upcoming'),
          fetchEvents('past')
        ]);
        
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center py-16">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-gray-600">{t("common.loading")}...</span>
    </div>
  );

  const ErrorMessage = () => (
    <div className="text-center py-16">
      <div className="text-red-600 mb-4">
        <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p className="text-lg font-medium">{t("events.error.title")}</p>
        <p className="text-sm text-gray-500 mt-2">{t("events.error.message")}</p>
      </div>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {t("events.error.retry")}
      </button>
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-16">
      <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {activeTab === "upcoming" ? t("events.empty.upcoming") : t("events.empty.past")}
      </h3>
      <p className="text-gray-500">
        {activeTab === "upcoming" ? t("events.empty.upcoming_desc") : t("events.empty.past_desc")}
      </p>
    </div>
  );

  const EventCard = ({ event }) => {
    const dateIcon = getDateIcon(event.date);
    const badgeColor = getBadgeColor(event.event_type);
    
    return (
      <Link 
        to={getLocalizedPath(`/events/${event.id}`)}
        className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Date Icon */}
            <div className="flex-shrink-0 bg-blue-50 rounded-lg p-3 text-center min-w-[70px]">
              <div className="text-2xl font-bold text-blue-600">{dateIcon.day}</div>
              <div className="text-xs text-blue-500 uppercase font-medium">{dateIcon.month}</div>
            </div>
            
            {/* Event Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {event.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColor} ml-2 whitespace-nowrap`}>
                  {event.event_type}
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4 mr-2" />
                {formatDate(event.date)}
              </div>

              {/* Location */}
              {event.location && (
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              )}
              
              {/* Winner Info */}
              {event.winner && event.winner.name !== "TBD" && (
                <div className="flex items-center mt-3 p-3 bg-yellow-50 rounded-lg">
                  <Trophy className="w-4 h-4 text-yellow-600 mr-2" />
                  <div className="flex items-center">
                    {event.winner.avatar !== "?" && (
                      <img
                        src={event.winner.avatar}
                        alt={event.winner.name}
                        className="w-6 h-6 rounded-full mr-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <span className="text-sm font-medium text-yellow-800">
                      {t("events.winner")}: {decodeWinnerName(event.winner.name)}
                    </span>
                  </div>
                </div>
              )}
              
              {activeTab === "upcoming" && (
                <div className="flex items-center mt-3 text-sm text-blue-600">
                  <Users className="w-4 h-4 mr-2" />
                  {t("events.status.upcoming")}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={t("events.meta.title")}
        description={t("events.meta.description")}
        keywords={t("events.meta.keywords")}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">{t("events.hero.badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("events.hero.title")}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t("events.hero.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8 mt-6">
            <div className="bg-white rounded-lg p-1 shadow-sm border">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "upcoming"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {t("events.tabs.upcoming")}
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "past"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {t("events.tabs.past")}
              </button>
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage />
          ) : currentEvents.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;