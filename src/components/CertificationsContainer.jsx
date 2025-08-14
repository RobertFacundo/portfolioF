import React, {useState} from "react";
import { certifications } from "../data";
import { StyledCertificationsContainer, StyledCertImage} from '../styles/CertificationsContainer.js';
import Modal from "./Modal.jsx";

const CertificationsContainer = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    }
    const closeModal = (imageSrc) => {
        setModalOpen(false);
        setSelectedImage(null);
    }

    return (
        <>
                <StyledCertificationsContainer>
                    {certifications.map((cert, index) => (
                        <StyledCertImage
                            src={cert.src}
                            alt={cert.alt}
                            key={index}
                            onClick={() => openModal(cert.src)}
                            index={index}
                        />
                    ))}
                </StyledCertificationsContainer>

            {modalOpen && <Modal src={selectedImage} onClose={closeModal} />}

        </>
    )
};

export default CertificationsContainer;