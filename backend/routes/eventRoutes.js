const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticate } = require('../middleware/auth');
const { validateEventRegistration, validateEventIdea } = require('../middleware/validation');

// GET /api/events - Get all events
router.get('/', eventController.getAllEvents);

// GET /api/events/:id - Get event by ID
router.get('/:id', eventController.getEventById);

// POST /api/events - Create new event (protected)
router.post('/', authenticate, eventController.createEvent);

// PUT /api/events/:id - Update event (protected)
router.put('/:id', authenticate, eventController.updateEvent);

// DELETE /api/events/:id - Delete event (protected)
router.delete('/:id', authenticate, eventController.deleteEvent);

// POST /api/events/register - Register for event (protected)
router.post('/register', authenticate, validateEventRegistration, eventController.registerForEvent);

// POST /api/events/ideas - Submit event idea (protected)
router.post('/ideas', authenticate, validateEventIdea, eventController.submitEventIdea);

// GET /api/events/registrations/my - Get user's event registrations (protected)
router.get('/registrations/my', authenticate, eventController.getMyRegistrations);

// GET /api/events/ideas/my - Get user's event ideas (protected)
router.get('/ideas/my', authenticate, eventController.getMyEventIdeas);

module.exports = router;