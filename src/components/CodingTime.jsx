import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap/gsap-core";
import {
    CodingTimeContainer,
    TimeDisplay,
    Label,
    UpdateInfo,
} from "../styles/CodingTimeStyles";

const CODING_DATA = {
    HOURS: 2058,
    MINUTES: 40,
    LAST_UPDATE: "2025-11-01"
};

const TARGET_TOTAL_MINUTES = (CODING_DATA.HOURS * 60) + CODING_DATA.MINUTES;

const formatTime = (totalMinutes) => {
    const minutes = Math.floor(totalMinutes);

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = String(hours).padStart(4, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');

    return `${formattedHours} hs ${formattedMinutes} min`;
}


const CodingTime = () => {
    const { t } = useTranslation();

    const timeRef = useRef(null);
    const counter = useRef({ value: 0 });

    useEffect(() => {
        gsap.to(counter.current, {
            value: TARGET_TOTAL_MINUTES,
            duration: 4,
            ease: "power1.in",

            onUpdate: () => {
                if (timeRef.current) {
                    timeRef.current.textContent = formatTime(counter.current.value);
                }
            },
            onComplete: () => {
                if (timeRef.current) {
                    timeRef.current.textContent = formatTime(TARGET_TOTAL_MINUTES);
                }
            }
        });
    }, []);

    return (
        <CodingTimeContainer>
            <Label>{t("total_coding_time_title")}</Label>
            <TimeDisplay ref={timeRef}>
                {formatTime(0)}
            </TimeDisplay>
            <UpdateInfo>
                {t("last_updated_label")}
                <br />
                {CODING_DATA.LAST_UPDATE}
            </UpdateInfo>
        </CodingTimeContainer>
    )
}

export default CodingTime;