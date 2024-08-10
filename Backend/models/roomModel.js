const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hostel: {
    type: String,
    required: [true, 'Student must have a current hostel']
  },
  floor: {
    type: Number,
    required: [true, 'Please specify the floor']
  },
  currentRoom: {
    type: String,
    required: [true, 'Student must have a current Room Number'],
    unique:false
    },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Room', RoomSchema);
