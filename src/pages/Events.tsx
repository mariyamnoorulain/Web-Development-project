import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';
import { EventRegistrationModal } from '../components/EventRegistrationModal';
import { EventIdeaModal } from '../components/EventIdeaModal';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEventIdeaOpen, setIsEventIdeaOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{ title: string; date: string } | null>(null);
  
  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion',
      date: 'June 25, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Namal University Campus, Mianwali',
      description: 'Join us for a day of networking, reminiscing, and celebrating our alma mater. The event includes campus tours, panel discussions, and an evening gala dinner.',
      category: 'reunion',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: 'July 10, 2025',
      time: '3:00 PM - 5:00 PM',
      location: 'Virtual Event',
      description: 'Enhance your professional skills with our expert-led workshop on leadership and management. Learn practical strategies to advance your career.',
      category: 'workshop',
      image: 'https://images.pexels.com/photos/7647913/pexels-photo-7647913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Networking Dinner',
      date: 'August 18, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Pearl Continental Hotel, Lahore',
      description: 'Connect with alumni in your industry at our exclusive networking dinner. This is a perfect opportunity to build professional relationships in a relaxed setting.',
      category: 'networking',
      image: 'https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Tech Innovation Summit',
      date: 'September 5, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Arfa Software Technology Park, Lahore',
      description: 'Join industry leaders and fellow alumni for a day of discussions on emerging technologies and innovation. Features keynote speakers and interactive sessions.',
      category: 'conference',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Alumni Mentorship Program Launch',
      date: 'October 12, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Namal University Campus & Virtual',
      description: 'Be part of our new mentorship initiative connecting experienced alumni with recent graduates. Learn how you can participate as a mentor or mentee.',
      category: 'workshop',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: 'International Alumni Chapter Meet',
      date: 'November 20, 2025',
      time: 'Various Times',
      location: 'Multiple Locations Worldwide',
      description: 'Our international chapters will host simultaneous events across the globe. Find your local chapter and connect with Namal alumni in your region.',
      category: 'networking',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  const handleRegisterClick = (event: { title: string; date: string }) => {
    setSelectedEvent(event);
    setIsRegistrationOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Reunions</h1>
            <p className="text-xl">Connect, learn, and celebrate with fellow Namal alumni at our upcoming events.</p>
          </div>
        </div>
      </section>

      {/* Events Filter */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-green-800 mr-2" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'all' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Events
              </button>
              <button 
                onClick={() => setFilter('reunion')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'reunion' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Reunions
              </button>
              <button 
                onClick={() => setFilter('workshop')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'workshop' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Workshops
              </button>
              <button 
                onClick={() => setFilter('networking')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'networking' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Networking
              </button>
              <button 
                onClick={() => setFilter('conference')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === 'conference' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Conferences
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No events found</h3>
              <p className="text-gray-600">There are no upcoming events in this category at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map(event => (
                <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-green-800 mb-3">{event.title}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full capitalize">
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-yellow-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <button 
                      onClick={() => handleRegisterClick(event)}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Past Event Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Relive the memories from our previous alumni gatherings
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 1" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/7647913/pexels-photo-7647913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 2" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 3" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 4" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 5" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 6" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 7" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Past Event 8" 
              className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-green-800 mb-4">Host Your Own Alumni Event</h2>
                <p className="text-gray-600 mb-6">
                  Have an idea for an alumni gathering in your city? We can help you organize and promote it to the Namal community.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-800 flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span className="ml-2 text-gray-600">Support with planning and logistics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-800 flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span className="ml-2 text-gray-600">Promotion to local alumni</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-800 flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span className="ml-2 text-gray-600">Access to alumni database for your region</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-800 flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span className="ml-2 text-gray-600">Namal branding materials</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setIsEventIdeaOpen(true)}
                  className="px-6 py-3 bg-yellow-500 hover: bg-yellow-600 text-green-900 font-bold rounded-md transition-colors"
                >
                  Submit Your Event Idea
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Host an event" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedEvent && (
        <EventRegistrationModal
          isOpen={isRegistrationOpen}
          onClose={() => {
            setIsRegistrationOpen(false);
            setSelectedEvent(null);
          }}
          eventTitle={selectedEvent.title}
          eventDate={selectedEvent.date}
        />
      )}

      <EventIdeaModal
        isOpen={isEventIdeaOpen}
        onClose={() => setIsEventIdeaOpen(false)}
      />
    </div>
  );
};

export default Events;