const createError = require("http-errors");
const Proyect = require("../database/models/Proyect");

module.exports = {
    list : async (req,res) => {

    try{ 
        const proyects = await Proyect.find().where('createdBy').equals(req.user)

        return res.status(200).json({
            ok : true,
            msg : 'Lista de proyecto',
            proyects
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en proyect-list'
        })
    }

},
store : async (req,res) => {

    try{
        const {name, description,client} = req.body;
        if([name,description,client].includes("") || !name || !description || !client) throw createError(400,"Todos los campos son obligatorios");
        
        if(!req.user)throw createError(401,"Error de autenticacion");

        const proyect = new Proyect(req.body);

        proyect.createdBy= req.user._id;

        //console.log(proyect)
        const proyectStore = await proyect.save()


        return res.status(201).json({
            ok : true,
            msg : 'Proyecto guardado',
            proyect : proyectStore
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en proyect-store'
        })
    }
},
detail : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Detalle del proyecto'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en proyect-detail'
        })
    }
},
update : async (req,res) => {

    try{ 
        return res.status(201).json({
            ok : true,
            msg : 'Proyecto actualizado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en proyect-update'
        })
    }
},
remove : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Proyecto eliminado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en proyect-remove'
        })
    }
},
addCollaborator : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Colaborador agregado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en collaborator-add'
        })
    }
},
removeCollaborator : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Colaborador eliminado'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en collaborator-remove'
        })
    }
}
}