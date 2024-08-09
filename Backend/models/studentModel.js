const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A student must have a name']
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'A student must have an email']
  },
  hostel: {
    type: String,
    required: [true, 'Student must have a current hostel']
  },
  currentRoom: {
    type: String,
    required: [true, 'Student must have a current Room Number']
  },
  password: {
    type: String,
    required: [true, 'A student must have a password'],
    minlength: [5, 'Password must have atleast 5 characters']
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide a password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(pass) {
        return pass === this.password;
      },
      message: 'Passwords do not match'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

module.exports = mongoose.model('Student',studentSchema)
