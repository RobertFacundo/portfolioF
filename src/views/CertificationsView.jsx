import React from "react";
import CertificationsContainer from "../components/CertificationsContainer";
import useAnalytics from "../hooks/useAnalytics";

const CertificationsView = () => {
    const { identifier } = useAnalytics('certificationView', 'tab');

    useEffect(() => {
        identifier();
    }, [])

    return (
        <CertificationsContainer />
    )
};

export default CertificationsView;