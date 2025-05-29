// Update the imports at the top of the file
import React, { useState } from 'react';
import { Search, Award, Briefcase, GraduationCap, Filter } from 'lucide-react';
import StoryModal from '../components/StoryModal';

// Add this state near the top of the SuccessStories component
const [selectedStory, setSelectedStory] = useState<null | any>(null);

// Update the "Read Full Story" button in the story card to:
<button 
  onClick={() => setSelectedStory(story)}
  className="px-4 py-2 bg-green-800 hover:bg-green-700 text-white font-bold rounded-md transition-colors"
>
  Read Full Story
</button>

// Add this at the bottom of the component, before the final closing div
{selectedStory && (
  <StoryModal
    story={selectedStory}
    onClose={() => setSelectedStory(null)}
  />
)}