const express = require('express');
const hostelController = require('../controllers/studentController');
const router = express.Router();

router
  .route('/')
  .get(hostelController.getAllVacantRooms)
  .post(hostelController.createRoomExchangeVacancy);

router
  .route('/:id')
  .get(hostelController.getRoomVacancyDetails)
  .patch(hostelController.updateRoomVacancyDetails)
  .delete(hostelController.deleteRoomVacancy);

module.exports = router;
