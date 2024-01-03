import { body } from "express-validator"

export const movieCreateValidation = () => {
  return (

    body("title")
        .isString()
        .withMessage("OO títulooo é obrigatório.")
        .isLength( {min: 5} )
        .withMessage('O título precisa ter no mínimo 5 letras.'),
    
    body("rating")
        .isNumeric()
        .withMessage("A nota precisa ser um número")
        .custom((value: number) => {
            if (value < 0 || value > 10) {
                throw new Error ("A nota deve estar entre 0 e 10.");
            }
            return true
        }),

    body("description")
        .isString()
        .withMessage("A descrição do filme é obrigatória."),

    body("director")
        .isString()
        .withMessage("O nome diretor é obrigatório.")
        .isLength( {min: 5} )
        .withMessage('O nome precisa ter no mínimo 5 letras.'),

    body("stars")
        .isString()
        .withMessage("O nome dos atores é obrigatório."),
            
    body("poster")
        .isURL()
        .withMessage("A imagem precisa ser uma URL.")
    )
}

