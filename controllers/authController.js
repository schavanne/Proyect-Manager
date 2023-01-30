module.exports = {
    register : async (req,res) => {

    try{ 
        return res.status(201).json({
            ok : true,
            msg : 'Usuario Registrado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error al Registrarse'
        })
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