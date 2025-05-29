// Update the imports at the top of the file
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';
import { EventRegistrationModal } from '../components/EventRegistrationModal';
import { EventIdeaModal } from '../components/EventIdeaModal';
import EventCountdown from '../components/EventCountdown';

// Add this near the top of the Events component, after the state declarations
const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Alumni Reunion',
    date: '2025-06-25T10:00:00.000Z',
  },
  {
    id: 2,
    title: 'Career Development Workshop',
    date: '2025-07-10T15:00:00.000Z',
  },
  {
    id: 3,
    title: 'Networking Dinner',
    date: '2025-08-18T19:00:00.000Z',
  }
];

// Add this after the Hero Section and before the Events Filter section
<section className="bg-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-green-800 mb-6">Upcoming Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {upcomingEvents.map(event => (
        <EventCountdown key={event.id} title={event.title} date={event.date} />
      ))}
    </div>
  </div>
</section>

export default upcomingEvents