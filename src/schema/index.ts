import * as yup from 'yup';

// validation schema for create player form here
export const createPlayerSchema = yup.object().shape({
    playerFirstName: yup.string().required(`You forgot to enter player's first name!`),
    playerLastName: yup.string().required(`You forgot to enter player's last name!`),
    playerPhoto: yup.string().required(`You forgot to enter player's photo url!`),
    playerThumbNail: yup.string().required(`You forgot to enter player's photo thumbnail!`),
    country: yup.string().required(`You forgot to enter player's country!`),
    playerRole: yup.string().required(`You forgot to enter player's role!`),
    playerSubRole: yup.string().required(`You forgot to enter player's sub role!`),
})