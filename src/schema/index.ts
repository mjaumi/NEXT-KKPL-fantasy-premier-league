import * as yup from 'yup';

// email format regex here
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// validation schema for create player form here
export const createPlayerSchema = yup.object().shape({
    playerFirstName: yup.string().required(`You forgot to enter player's first name!`),
    playerLastName: yup.string().required(`You forgot to enter player's last name!`),
    playerPhoto: yup.string().required(`You forgot to enter player's photo url!`),
    playerThumbNail: yup.string().required(`You forgot to enter player's photo thumbnail!`),
    country: yup.string().required(`You forgot to enter player's country!`),
    playerRole: yup.string().required(`You forgot to enter player's role!`),
    playerSubRole: yup.string().required(`You forgot to enter player's sub role!`),
});

// validation schema for sign in form here
export const signinFormSchema = yup.object().shape({
    email: yup.string().required(`Email Required!`)
        .test('validate', 'Invalid Email!', function (value) {
            if (!emailRegex.test(value)) {
                return false;
            }
            return true;
        }),
    password: yup.string().required(`Password Required!`),
});