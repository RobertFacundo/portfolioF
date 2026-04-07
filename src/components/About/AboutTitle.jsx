import React from "react";
import { useTranslation } from "react-i18next";
import { FaFilePdf } from "react-icons/fa";

const AboutTitle = () => {
    const { t } = useTranslation();

    return (
        <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {t("about_title")}

      <a
        href="/FacundoRobert-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center" }}
        className="cv-icon"
      >
        <FaFilePdf size={24} />
      </a>
    </h1>
    )
}

export default AboutTitle;