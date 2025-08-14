import {useState, useEffect} from 'react';
import apiServices from '../services/backEndServices';
import axiosInstance from '../config/axiosConfig';

const useAnalytics = (initialIdentifier, type)=>{
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const increment = async (newIdentifier, newType)=>{
        setLoading(true);
        setError(null);
        try{
            let response;
            const identifier = newIdentifier || initialIdentifier;
            const type = newType || initialType;

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

    const logVisit = async ()=>{
        try{
            await apiServices.logPortfolioVisit();
            console.log('Portfolio visit logged successfully');
        }catch(err){
            console.error('Failed to log portfoliovisit:', err)
        }
    };

    return {count, loading, error, increment, logVisit}
};

export default useAnalytics;