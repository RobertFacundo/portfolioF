import React, {useEffect} from "react";
import CertificationsContainer from "../components/CertificationsContainer";
import useAnalytics from "../hooks/useAnalytics";

const CertificationsView = () => {
    const { increment } = useAnalytics('certificationView', 'tab');

    useEffect(() => {
        increment();
    }, [])

    return (
        <CertificationsContainer />
    )
};

export default CertificationsView;