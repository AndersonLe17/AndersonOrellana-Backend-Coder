import local from 'passport-local'; // Importo la estrategia local
import passport from 'passport'; // Importo el core de passport

import { createHash, validatePassword } from '../utils/bcrypt';

const LocalStrategy = local.Strategy; // Defino mi estrategia

const initializePassport = () => {
    // Defino la aplicacion de estrategia
    
    //Registro de usuarios
    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email'}, async(req, username, password, done) => {
            const {first_name, last_name, email, age, gender} = req.body;

            const user = await User.findOne({email: email}); // Verificamos si el usuario ya esta registrado

            if(user) {
                return done(null, false);
            }

            const passwordHash = createHash(password);
            const userCreated = User.create({
                first_name: first_name,
                last_name: last_name,
                email: email,
                age: age,
                gender: gender,
                password: passwordHash
            });

            console.log(userCreated);
            return done(null, userCreated);
        }
    ))
}