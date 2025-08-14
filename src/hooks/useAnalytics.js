import {useState, useEffect} from 'react';
import apiServices from '../services/backEndServices';

const useAnalytics = (identifier, type)=>{
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const increment = async ()=>{
        setLoading(true);
        setError(null);
        try{
            let response;
            if(type === 'portfolio'){
                response = await apiServices.incrementServiceView();
            }else if (type === 'tab'){
                response = await apiServices.incrementTabVisit(identifier);
            }else if (type === 'project'){
                response = await apiServices.incrementProjectClick(identifier);
            }

            if (response.success){
                setCount(response.count || response.visitCount || response.clickCount);
            }else{
                throw new Error(response.message);
            }
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    };

    return {count, loading, error, increment}
};

export default useAnalytics;