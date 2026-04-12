import React, { useState } from "react";
import {
    TerminalWrapper,
    Terminal,
    TerminalHeader,
    Dot,
    DateLinks,
    LinkItem,
    TerminalInfo,
    Highlight,
    Cursor,
    DateText,
} from "../styles/ExperienceViewStyles";
import { Trans, useTranslation } from "react-i18next";

import { experienceData } from "../data";
import { motion } from "framer-motion";

const TerminalInfoMotion = motion(TerminalInfo);


const ExperienceView = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(0);

    const job = experienceData[selected];

    return (
        <TerminalWrapper>
            <Terminal>

                <TerminalHeader>
                    <Dot color="#ff5f56" />
                    <Dot color="#ffbd2e" />
                    <Dot color="#27c93f" />
                </TerminalHeader>

                <div>facundo-robert@portfolio:~$ experience --list</div>

                <DateLinks>
                    {experienceData.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                            <LinkItem
                                key={i}
                                active={i === selected}
                                onClick={() => setSelected(i)}
                            >
                                {">"} <DateText>{item.date}</DateText> | {t(item.titleKey)}
                            </LinkItem>
                        </motion.div>
                    ))}
                </DateLinks>

                <TerminalInfoMotion
                    key={selected} // reinicia la animación cada vez que cambias de trabajo
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >

                    {/* <h3>{t(job.titleKey)}</h3> */}

                    <p>
                        <Trans
                            i18nKey={t(job.descKey)}
                            components={{
                                highlight: <Highlight />
                            }}
                        />
                        <Cursor />
                    </p>

                    {job.link && (
                        <a href={job.link} target="_blank">
                            Link
                        </a>
                    )}

                </TerminalInfoMotion>

            </Terminal>
        </TerminalWrapper>
    );
};

export default ExperienceView;