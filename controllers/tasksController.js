module.exports = {
    list : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Lista de tareas'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en task-list'
        })
    }
},
store : async (req,res) => {

    try{ 
        return res.status(201).json({
            ok : true,
            msg : 'Tarea guardada'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en task-store'
        })
    }
},
detail : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Detalle de tarea'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en task-detail'
        })
    }
},
update : async (req,res) => {

    try{ 
        return res.status(201).json({
            ok : true,
            msg : 'Tarea actualizada'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en task-update'
        })
    }
},
remove : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Tarea eliminada'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en task-remove'
        })
    }
},
changeState : async (req,res) => {

    try{ 
        return res.status(200).json({
            ok : true,
            msg : 'Tarea completada'
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            ok : false,
            msg : error.message || 'Upss, hubo un error en change-state'
        })
    }
}
}