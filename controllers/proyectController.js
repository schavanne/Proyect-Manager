const createError = require("http-errors");
const Proyect = require("../database/models/Proyect");
const errorResponse = require("../helpers/errorResponse");
const ObjectId = require("mongoose").Types.ObjectId

module.exports = {
    list : async (req,res) => {

    try{ 
        const proyects = await Proyect.find().where('createdBy').equals(req.user).select('name client');

        return res.status(200).json({
            ok : true,
            msg : 'Lista de proyecto',
            proyects
        });
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "proyect-list")
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
            msg : 'Proyecto guardado con exito',
            proyect : proyectStore
        })
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "proyect-store")
    }
},
detail : async (req,res) => {

    try{ 
        const {id} = req.params;

        if(!ObjectId.isValid(id)) throw createError(400, "No es un id válido");

        const proyect = await Proyect.findById(id);

        if(!proyect) throw createError(404, "Proyecto no encontrado");

        if(req.user._id.toString() !== proyect.createdBy.toString()) throw createError(401, "No estas autorizado")


        return res.status(200).json({
            ok : true,
            msg : 'Detalle del proyecto',
            proyect
        })
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "proyect-detail")
    }
},
update : async (req,res) => {

    try{ 

        const {id} = req.params;

        if(!ObjectId.isValid(id)) throw createError(400, "No es un id válido");

        const proyect = await Proyect.findById(id);

        if(!proyect) throw createError(404, "Proyecto no encontrado");

        if(req.user._id.toString() !== proyect.createdBy.toString()) throw createError(401, "No estas autorizado");

        const {name, description,client,dateExpire} = req.body;

        proyect.name = name || proyect.name;
        proyect.description = description || proyect.description;
        proyect.client = client || proyect.client;
        proyect.dateExpire = dateExpire || proyect.dateExpire;

        const proyectUpdated = await proyect.save()

        return res.status(201).json({
            ok : true,
            msg : 'Proyecto actualizado',
            proyect : proyectUpdated
        })
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "proyect-update")
    }
},
remove : async (req,res) => {

    try{
        const {id} = req.params;

        if(!ObjectId.isValid(id)) throw createError(400, "No es un id válido");

        const proyect = await Proyect.findById(id);

        if(!proyect) throw createError(404, "Proyecto no encontrado");

        if(req.user._id.toString() !== proyect.createdBy.toString()) throw createError(401, "No estas autorizado");

        await proyect.deleteOne();

        return res.status(200).json({
            ok : true,
            msg : 'Proyecto eliminado'
        })
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "proyect-remove")
    }
},
addCollaborator : async (req,res) => {

    try{ 

        const {id} = req.params;

        if(!ObjectId.isValid(id)) throw createError(400, "No es un id válido");

        const proyect = await Proyect.findById(id);

        if(!proyect) throw createError(404, "Proyecto no encontrado");

        //if(req.user._id.toString() !== proyect.createdBy.toString()) throw createError(401, "No estas autorizado");

        const {collaborator} = req.body;

        console.log(proyect)
        return false;

        return res.status(201).json({
            ok : true,
            msg : 'Proyecto actualizado',

        })
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "proyect-update")
    }
},
removeCollaborator : async (req,res) => {

    try{ 
        const {id,idCollab} = req.params;

        if(!ObjectId.isValid(id)) throw createError(400, "No es un id válido");

        const proyect = await Proyect.findById(id);

        if(!proyect) throw createError(404, "Proyecto no encontrado");

        if(req.user._id.toString() !== proyect.createdBy.toString()) throw createError(401, "No estas autorizado");

        console.log(proyect)
        return res.status(200).json({
            ok : true,
            msg : 'Colaborador eliminado'
        })
    } catch (error) {
        console.log(error);
        return errorResponse(res,error, "collaborator-remove")
    }
}
}