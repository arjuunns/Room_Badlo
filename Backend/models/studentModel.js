const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A student must have a name']
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'A student must have a unique email'],
    validate: [
      validator.isEmail && this.email.endsWith('@thapar.edu'),
      'Please provide a valid thapar email'
    ]
  },
  mobileNumber: {
    type: Number,
    required: [true, 'Please specify your phone number'],
    validate: [validator.isMobilePhone, 'Please enter a valid mobile Number']
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

module.exports = mongoose.model('Student', studentSchema);
