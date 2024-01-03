import { model , Schema } from "mongoose";

const movieSchema = new Schema (
    {
        title: { type : String },
        rating: { type: Number}, // Nota do filme
        description: { type: String },
        director: { type: String },
        stars: { type: Array}, // estrelas do filme
        poster: { type: String} //imagem de filme, como uma URL
    },
    {
        timestamps: true // data que foi criado o filme, e se atualizar ele mostrar a data atualizada
    }
)

export const MovieModel = model("Movie", movieSchema)