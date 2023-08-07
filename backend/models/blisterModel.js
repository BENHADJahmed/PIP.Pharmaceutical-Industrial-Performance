import mongoose from 'mongoose';

const blistersSchema = mongoose.Schema({
  annee: {
    type: Number,
    required: true
  },
  nombres: {
    type: Array,
    required: true,
    default: 0,
  },

});

const Blisters = mongoose.model('blisters', blistersSchema);

export default Blisters;
