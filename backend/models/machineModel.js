import mongoose from 'mongoose';

const machineSchema = mongoose.Schema({
  phase: {
    type: String,
    enum: ['fab', 'cond'],
    required: true
  },
  nomMachine: {
    type: String,
    required: true,
    validate: {
      validator: function() {
        if (this.phase === 'fab') {
          return ['comprimeuse', 'granulateur'].includes(this.nomMachine);
        } else if (this.phase === 'cond') {
          return ['blisteureuse', 'remplisseuse'].includes(this.nomMachine);
        }
        return false;
      },
      message: 'Le nom de la machine n\'est pas valide pour cette phase.'
    }
  },
  mois: {
    type: String,
    required: true
  },
  arret: {
    panneMachine: {
      type: Number,
      default: 0,
    },
    attente: {
      type: Number,
      default: 0,
    },
    nonQualite: {
      type: Number,
      default: 0,
    },
  },
  temps: {
    TT: {
      type: Number,
      required: true
    },
    TO: {
      type: Number,
      required: true
    },
  },
  cadence: {
    optimale: {
      type: Number,
      required: true
    },
    reel: {
      type: Number,
      required: true
    }
  },
  // Champs spécifiques aux machines de fabrication
  nombreComprime: {
    type: Number,
    default: 0,
    validate: {
      validator: function() {
        return this.nomMachine === 'comprimeuse';
      },
      message: 'Le champ "nombreComprime" est applicable uniquement pour la comprimeuse en phase de fabrication.'
    }
  },
  tonnage: {
    type: Number,
    default: 0,
    validate: {
      validator: function() {
        return this.nomMachine === 'granulateur';
      },
      message: 'Le champ "tonnage" est applicable uniquement pour le granulateur en phase de fabrication.'
    }
  },
  // Champs spécifiques aux machines de conditionnement
  nombreBlister: {
    type: Number,
    default: 0,
    validate: {
      validator: function() {
        return this.nomMachine === 'blisteureuse';
      },
      message: 'Le champ "nombreBlister" est applicable uniquement pour la blisteureuse en phase de conditionnement.'
    }
  },
  nombreFlacon: {
    type: Number,
    default: 0,
    validate: {
      validator: function() {
        return this.nomMachine === 'remplisseuse';
      },
      message: 'Le champ "nombreFlacon" est applicable uniquement pour la remplisseuse en phase de conditionnement.'
    }
  }
});

const Machine = mongoose.model('Machine', machineSchema);

export default Machine;
