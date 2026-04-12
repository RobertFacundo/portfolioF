import styled, {keyframes} from "styled-components";

export const TerminalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
`;

export const Terminal = styled.div`
  max-width: 730px;
  background: #0d1117;
  border-radius: 10px;

  color: #c9d1d9;
  font-family: monospace;

  box-shadow:
    0 0 10px rgba(0,0,0,0.6),
    0 0 20px rgba(0,255,100,0.15);

  padding: 15px;

  border: 1px solid #30363d;
`;

export const TerminalHeader = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  padding-bottom: 8px;

  border-bottom: 1px solid #30363d;
`;

export const Dot = styled.div`
   width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => p.color};
`;

export const DateLinks = styled.div`
  border-top: 1px solid #30363d;
  border-bottom: 1px solid #30363d;

  padding: 10px 0;
  margin: 10px 0;
`;

export const LinkItem = styled.div`
font-family: 'VT323', monospace;
font-size: 1.4rem; /* Base font size */
    letter-spacing: 0.7px;
   cursor: pointer;
  padding: 4px 0;

  color: ${(p) => (p.active ? "#39ff14" : "rgba(57,255,20,0.6)")};

  background: ${(p) =>
        p.active ? "rgba(57,255,20,0.12)" : "transparent"};

  &:hover {
    color: #39ff14;
    background: rgba(57,255,20,0.08);
  }

    /* Media queries para mobile */
  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    letter-spacing: 0.4px;
  }
`;

export const DateText = styled.span`
  font-size: 1.1rem;
  margin-right: 4px;
  color: rgba(191, 248, 156, 0.5);
`;

export const TerminalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
    color: #e6edf3;

  padding-top: 4px;

  line-height: 1.5;

  text-shadow: 0 0 2px rgba(0, 255, 100, 0.25);

  h3 {
    color: #39ff14;

    margin-bottom: 6px;

    text-shadow:
      0 0 4px rgba(0,255,100,0.5),
      0 0 8px rgba(0,255,100,0.4);

        @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-family: 'Oxanium', sans-serif;
    font-size: 1.1rem; 
    letter-spacing: 1.4px;
    font-weight: 300;
    color: white;

    text-shadow:  0 0 2px rgba(0,255,100,0.3),
      0 0 4px rgba(0,255,100,0.2);

       @media (max-width: 768px) {
      font-size: 1rem;
      letter-spacing: 1px;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      letter-spacing: 0.8px;
    }
  }

 a {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Oxanium', sans-serif;
  letter-spacing: 0.5px;
  font-size: 1.4rem;
  font-weight: 300;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out, border-color 0.2s ease-in-out;
  text-shadow: 
      0 0 2px rgba(0,255,100,0.4),
      0 0 4px rgba(0,255,100,0.2); 
  margin: 10px auto; /* centra horizontalmente */

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
}

a:hover {
  color: #00ff41;
  transform: scale(1.05);/* aparece al hover */
}

`;

export const Highlight = styled.span`
  color: #00FF41;

  text-shadow:
    0 0 4px rgba(0,255,100,0.6),
    0 0 8px rgba(0,255,100,0.4);
`;

const blink = keyframes`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 5px #00ff41; }
  50% { box-shadow: 0 0 15px #00ff41; }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 4px;
  height: 1.2em;
  background-color: #00ff41;
  margin-left: 4px;
  animation: ${blink} 1.4s infinite, ${pulse} 2s infinite;
  position: relative;
  top: 2px;

    @media (max-width: 768px) {
    height: 1em;
    width: 3px;
  }
  @media (max-width: 480px) {
    height: 0.9em;
    width: 2px;
  }
`;

