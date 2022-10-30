export const creatOne = (Model)=> async(req,res,next)=> {
    
    {
    try{
        const doc  = await Model.create(req.body);
        if(!doc){
            return res.status(400).json({message:"failed to register"});
        }
        return res.status(201).json({message:"sucessfully", data:doc});
    }
    catch (error){
        console.log(error)

    }
}
};

export const getAll = (Model) => async (req, res, next)=> {
    {
    try{
        const doc  = await Model.find(req.query);
        if(!doc){
            return res.status(404).json({message:"failed to update"});
        }
        return res.status(404).json({message:"sucessfully", data:doc});
    }
    catch (error){
        console.log(error)

    }
}
};
export const updateOne = (Model) => async (req, res, next)=> {
    {
    try{
        const doc  = await Model.findByIdAndUpdate(req.param.id, req.body);
        if(!doc){
            return res.status(404).json({message:"failed to Update"});
        }
        return res.status(404).json({message:"sucessfully", data:doc});
    }
    catch (error){
        console.log(error)

    }
}
};


    export default{creatOne, getAll,updateOne}   
