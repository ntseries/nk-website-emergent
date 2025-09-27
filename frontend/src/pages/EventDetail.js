import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Calendar, Clock, MapPin, Trophy, Users, Award, User } from "lucide-react";
import SEOHead from "../components/SEOHead";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [event, setEvent] = useState(null);
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

  // Format date to Thai/English format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      timeZone: 'Asia/Bangkok',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    
    return date.toLocaleDateString(isEnglish ? 'en-US' : 'th-TH', options);
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

  // Get status badge color
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'past':
        return 'bg-gray-100 text-gray-800';
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fetch event detail
  useEffect(() => {
    const fetchEventDetail = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://api.nkboardgame.com/api/events/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Event not found');
          }
          throw new Error('Failed to fetch event details');
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEventDetail();
    }
  }, [id]);

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
        <h2 className="text-2xl font-bold mb-2">{t("events.detail.error.title")}</h2>
        <p className="text-gray-500 mb-6">{t("events.detail.error.message")}</p>
      </div>
      <div className="space-x-4">
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t("events.detail.error.retry")}
        </button>
        <Link 
          to={getLocalizedPath("/events")}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          {t("events.detail.back_to_events")}
        </Link>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ErrorMessage />
      </div>
    );
  }

  const badgeColor = getBadgeColor(event.event_type);
  const statusBadgeColor = getStatusBadgeColor(event.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={`${event.name} - ${t("events.meta.title")}`}
        description={`${event.name} - ${event.description || t("events.meta.description")}`}
        keywords={`${event.event_type}, ${t("events.meta.keywords")}`}
      />
      
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate(getLocalizedPath("/events"))}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t("events.detail.back_to_events")}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Event Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
                    {event.event_type}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusBadgeColor}`}>
                    {t(`events.status.${event.status}`)}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {event.name}
                </h1>
                {event.description && (
                  <p className="text-gray-600 text-lg">
                    {event.description}
                  </p>
                )}
              </div>
            </div>

            {/* Event Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                  <span>{formatDate(event.event_date_iso)}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-blue-600" />
                  <span>{t("events.detail.participants")}: {event.registrations_count}</span>
                </div>
              </div>

              {/* Winner Section */}
              {event.winner && event.winner.name !== "TBD" && (
                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                    <h3 className="font-semibold text-yellow-800">
                      {t("events.detail.winner")}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    {event.winner.avatar !== "?" && (
                      <img
                        src={event.winner.avatar}
                        alt={event.winner.name}
                        className="w-12 h-12 rounded-full mr-3"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <div>
                      <div className="font-medium text-yellow-800">
                        {event.winner.name}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Registrations List */}
          {event.registrations && event.registrations.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("events.detail.participants_list")}
                </h2>
                <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {event.registrations_count}
                </span>
              </div>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {event.registrations.map((registration, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-4 rounded-lg border ${
                      event.winner && registration.player_name === event.winner.name
                        ? 'bg-yellow-50 border-yellow-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3">
                      {registration.running_number}
                    </div>
                    <span className={`font-medium ${
                      event.winner && registration.player_name === event.winner.name
                        ? 'text-yellow-800'
                        : 'text-gray-900'
                    }`}>
                      {registration.player_name}
                    </span>
                    {event.winner && registration.player_name === event.winner.name && (
                      <Award className="w-4 h-4 ml-auto text-yellow-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to Events Button */}
          <div className="mt-8 text-center">
            <Link
              to={getLocalizedPath("/events")}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("events.detail.back_to_events")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;