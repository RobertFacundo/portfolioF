import React from "react";
import { useTranslation } from "react-i18next";
import { technicalChallenges } from "../data";
import {
    ChallengesList,
    ChallengeItem,
    Screenshot,
    DateWrapper,
    ContentWrapper,
    ChallengeTitle,
    Description
} from "../styles/TechnicalChallengesStyles";


const TechnicalChallengesContainer = () => {
    const { t } = useTranslation()

    return (
        <ChallengesList>
            {technicalChallenges.map((challenge, index) => (
                <ChallengeItem key={index}>
                    <Screenshot src={challenge.image} alt={t(challenge.titleKey)}  />

                    <DateWrapper>
                        {t(challenge.dateKey)} 
                    </DateWrapper>

                    <ContentWrapper>
                        <ChallengeTitle>
                            <a
                                href={challenge.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={t(challenge.titleKey)}
                            >
                                {t(challenge.titleKey)}
                            </a>
                        </ChallengeTitle>
                        <Description>
                            {t(challenge.descriptionKey)}
                        </Description>
                    </ContentWrapper>
                </ChallengeItem>
            ))}
        </ChallengesList>
    )
};

export default TechnicalChallengesContainer;