import local from 'passport-local'; // Importo la estrategia local
import passport from 'passport'; // Importo el core de passport
import { userModel } from '../models/Users.js';
import { createHash, validatePassword } from '../utils/bcrypt.js';

const LocalStrategy = local.Strategy; // Defino mi estrategia

const initializePassport = () => {
    // Defino la aplicacion de estrategia
    //Registro de usuarios
    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email'}, async(req, username, password, done) => {
            const {first_name, last_name, email, gender} = req.body;

            const user = await userModel.findOne({email: email}); // Verificamos si el usuario ya esta registrado

            if(user) {
                return done(null, false);
            }

            const passwordHash = createHash(password);
            const userCreated = await userModel.create({
                first_name: first_name,
                last_name: last_name,
                email: email,
                gender: gender,
                password: passwordHash
            });

            return done(null, userCreated);
        }
    ));

    // Inicializar la session del user
    passport.serializeUser((user, done) => {
        done(null, user._id)
    });

    // Eliminar la session del user
    passport.deserializeUser(async(id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    });

    passport.use('login', new LocalStrategy({usernameField: 'email'}, async(username, password, done) => {

        const user = await userModel.findOne({email: username});

        if (!user) {
            return (done, null);
        }

        if (validatePassword(password, user.password)) {
            return done(null, user);
        }

        return done(null, false)//Contraseña no valida

    }))
}

export default initializePassport;