const User = require("../database/models/User");

module.exports = {
    profile : async(req,res) => {

            try{ 
                return res.status(200).json({
                    ok : true,
                    msg : 'Perfil de usuario',
                    user : req.user
                })
            } catch (error) {
                console.log(error);
                return res.status(error.status || 500).json({
                    ok : false,
                    msg : error.message || 'Upss, hubo un error en el perfil'
                })
            }
    },
    getUser : async(req,res) => {
        const {name} = req.params;
        try{ 
            let user = await User.findOne({
                name
            })
            if(user == null){
                return res.status(200).json({
                    ok : false,
                    msg : 'Usuario inexistente'
                });
            }
            else{
                return res.status(200).json({
                    ok : true,
                    msg : 'Usuario encontrado',
                    user
                });
            }
            
        } catch (error) {
            console.log(error);

        }
    }
}