import mongoose from 'mongoose';

const lotsSchema = mongoose.Schema({
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

const Lots = mongoose.model('lots', lotsSchema);

export default Lots;
