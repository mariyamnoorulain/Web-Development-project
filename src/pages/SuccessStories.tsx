import React, { useState } from 'react';
import { Search, Award, Briefcase, GraduationCap, Filter } from 'lucide-react';

const SuccessStories = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const stories = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      batch: '2015',
      title: 'Software Engineer at Google',
      category: 'technology',
      story: 'Sarah leads a team of engineers developing AI solutions that are changing how we interact with technology. After graduating from Namal, she pursued her Masters in Computer Science from Stanford University before joining Google.',
      achievements: ['Forbes 30 Under 30 in Technology', 'Lead Developer on Google Assistant', '3 Patents in AI Technology'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Imran Khan',
      batch: '2012',
      title: 'Founder & CEO of TechVentures',
      category: 'entrepreneurship',
      story: 'Imran\'s startup has revolutionized renewable energy solutions in developing countries. His company has raised over $50 million in venture capital and is expanding operations across Asia and Africa.',
      achievements: ['Raised $50M in Series B Funding', 'Expanded to 12 Countries', 'Sustainable Energy Innovation Award'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Fatima Malik',
      batch: '2017',
      title: 'Research Scientist at MIT',
      category: 'research',
      story: 'Fatima\'s groundbreaking research in biotechnology has earned her international recognition. Her work focuses on developing affordable medical solutions for underserved communities.',
      achievements: ['Published in Nature Journal', 'Gates Foundation Research Grant', 'Pakistan Science Innovation Award'],
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Ali Hassan',
      batch: '2014',
      title: 'Investment Banker at Morgan Stanley',
      category: 'finance',
      story: 'Ali has had a meteoric rise in the world of finance, specializing in mergers and acquisitions for technology companies. He completed his MBA from INSEAD before joining Morgan Stanley.',
      achievements: ['Managed $2B in M&A Deals', 'Financial Times Future Leader', 'INSEAD Scholar'],
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      name: 'Zainab Qureshi',
      batch: '2016',
      title: 'Humanitarian Aid Director at UNICEF',
      category: 'social-impact',
      story: 'Zainab has dedicated her career to improving education access for children in conflict zones. Her innovative programs have reached over 100,000 children across South Asia.',
      achievements: ['UN Humanitarian Award', 'Implemented Programs in 5 Countries', 'Featured in Time Magazine'],
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      name: 'Usman Farooq',
      batch: '2013',
      title: 'Chief Medical Officer at HealthTech',
      category: 'healthcare',
      story: 'Dr. Usman is revolutionizing healthcare delivery through telemedicine. His startup has provided remote medical consultations to over 2 million patients in rural areas.',
      achievements: ['Medical Innovation Prize', 'WHO Digital Health Advisor', 'Featured in Medical Journal'],
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  const filteredStories = stories
    .filter(story => filter === 'all' || story.category === filter)
    .filter(story => 
      story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.story.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Success Stories</h1>
            <p className="text-xl">Celebrating the achievements and impact of Namal graduates around the world.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, title, or keyword"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex items-center mr-2">
                <Filter className="h-5 w-5 text-green-800 mr-1" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <button 
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'all' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('technology')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'technology' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Technology
              </button>
              <button 
                onClick={() => setFilter('entrepreneurship')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'entrepreneurship' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Entrepreneurship
              </button>
              <button 
                onClick={() => setFilter('research')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'research' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Research
              </button>
              <button 
                onClick={() => setFilter('finance')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'finance' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Finance
              </button>
              <button 
                onClick={() => setFilter('social-impact')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'social-impact' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Social Impact
              </button>
              <button 
                onClick={() => setFilter('healthcare')}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === 'healthcare' 
                    ? 'bg-green-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Healthcare
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No stories found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12">
              {filteredStories.map(story => (
                <div key={story.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-green-800">{story.name}</h3>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                          Class of {story.batch}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <Briefcase className="h-4 w-4 text-yellow-500 mr-2" />
                        <p className="text-gray-700 font-medium">{story.title}</p>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{story.story}</p>
                      
                      <div className="mb-6">
                        <h4 className="flex items-center text-lg font-semibold text-green-800 mb-3">
                          <Award className="h-5 w-5 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {story.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 text-xs font-bold">✓</div>
                              <span className="ml-2 text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white font-medium rounded-md transition-colors">
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Share Your Success Story</h2>
              <p className="text-lg mb-6">
                We'd love to hear about your journey since graduating from Namal. Your story could inspire current students and fellow alumni.
              </p>
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-md transition-colors">
                Submit Your Story
              </button>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-green-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">What to Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-green-900 text-xs font-bold">✓</div>
                    <span className="ml-2">Your career path since graduation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-green-900 text-xs font-bold">✓</div>
                    <span className="ml-2">Key achievements and milestones</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-green-900 text-xs font-bold">✓</div>
                    <span className="ml-2">How Namal University influenced your journey</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-green-900 text-xs font-bold">✓</div>
                    <span className="ml-2">Advice for current students and recent graduates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center text-green-900 text-xs font-bold">✓</div>
                    <span className="ml-2">High-resolution professional photo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;