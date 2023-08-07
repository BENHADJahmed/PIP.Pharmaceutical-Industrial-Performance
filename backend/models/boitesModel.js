import mongoose from 'mongoose'

const boitesSchema = mongoose.Schema(
    {
        annee : {
            type: Number,
            required: true
        },
        nombres : {
            type: Array,
            required: true,
            default: 0,
        },
    }
)

const Boites = mongoose.model('boites',boitesSchema);
export default Boites;