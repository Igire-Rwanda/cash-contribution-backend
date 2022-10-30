export default class Response{
    static successMessage(res,message,data=nul,status){
        return res.status(status).json(
            data?{
                status,
                results:data.length,
                message,
                data,
            }:{status,message}
        );
    }
    static errorMessage(res,error,status){
        return res.status(status).json({
            
                status,
                error,
        
         } );
    }
}