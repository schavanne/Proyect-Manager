const createError = require('http-errors');
const User = require('../database/models/User');
const errorResponse = require('../helpers/errorResponse');
const generateTokenRandom = require('../helpers/generateTokenRandom');

module.exports = {
    register : async (req,res) => {

    try{ 
        const {name,email,password} = req.body;

        if([name,email,password].includes("")){
            throw createError(400,"Todos los campos son obligatorios");
        
        };

        let user = await User.findOne({
            email
        });



        if(user){
            throw createError(400,"El email ya se encuentra registrado :(");
        }

        user = new User(req.body);

        user.token = generateTokenRandom();

        const userStore = await user.save();

        //enviar email de confirmacion

        return res.status(201).json({
            ok : true,
            msg : 'Usuario Registrado',
            data : userStore
        })
    } catch (error) {
        
        return errorResponse(res,error, "Register")
    }
},
login : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Usuario Logeado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en el login'
        })
    }
},
checked : async (req,res) => {

    try{ 
        return res.status(201).json({
            ok : true,
            msg : 'Usuario Checkeado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en checked'
        })
    }
},
sendToken : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Token enviado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en send-token'
        })
    }
},
verifyToken : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Token verificado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en verify-token'
        })
    }
},
changePassword : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Password actualizado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en actulizar password'
        })
    }
}
}