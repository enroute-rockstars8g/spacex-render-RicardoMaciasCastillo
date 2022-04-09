export const getSpaceInfo = async() =>{

        try {
    
        const response = await fetch( `https://api.spacexdata.com/v4/rockets`);
            
        if ( response.status!==200 ) return
    
        const companyData = await response.json(); 
    
       
        return companyData
     
       
        
    
        } catch (error) {
            console.error(error)
        }
    }


