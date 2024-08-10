const Room = require('../models/roomModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createRoomExchangeVacancy = catchAsync(async (req, res, next) => {
  const newRoomVacancy = await Room.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      roomVacancy: newRoomVacancy
    }
  });
});

exports.getAllVacantRooms = catchAsync(async (req, res, next) => {
  const rooms = await Room.find({});
  if (!rooms.length) {
    return next(new AppError('No vacant rooms available', 204));
  }
  res.status(200).json({
    status: 'success',
    total: rooms.length,
    data: {
      rooms
    }
  });
});

exports.getRoomVacancyDetails = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const room = await Room.findById(id);
  if (!room) {
    next(new AppError('Room not found!', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      roomDetails: room
    }
  });
});

exports.updateRoomVacancyDetails = catchAsync(async (req, res, next) => {
  const updateRoomDetails = Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!updateRoomDetails) {
    return next(new AppError('No tour found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour: updateRoomDetails
    }
  });
});

exports.deleteRoomVacancy = catchAsync(async (req, res, next) => {
  const room = await Room.findByIdAndDelete(req.params.id);
  if (!room) {
    return next(new AppError('No tour found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
});
