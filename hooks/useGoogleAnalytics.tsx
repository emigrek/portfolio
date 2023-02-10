import { useEffect } from 'react'
import ReactGA from 'react-ga';

function useGoogleAnalytics() {
    useEffect(() => {
        if(!process.env.NEXT_PUBLIC_GA_TRACKING_ID) 
            return console.warn('No Google Analytics Tracking ID found, fill your .env file before building the project');
    
        ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
        ReactGA.pageview(window.location.pathname);
    }, []);
}

export default useGoogleAnalytics