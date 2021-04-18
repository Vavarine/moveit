import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

import { LevelUpModal } from '../components/LevelUpModal';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

// teste

interface ChallengesContextData {
  level: number,
  currentExpirience: number,
  challengesCompleted: number,
  activeChallenge: Challenge,
  experinceToNextLevel: number,
  levelUp: () => void,
  startNewChallenge: () => void,
  resetChallenge: () => void,
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {

  const [level, setLevel] = useState(rest.level || 1);
  const [currentExpirience, setCurrentExpirience] = useState(rest.currentExperience || 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted || 0);
  const [isLevelUpModalActive, setIsLevelUpModalActive] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experinceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExpirience));
    Cookies.set('challengesCompleted', String(challengesCompleted));

  }, [level, currentExpirience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalActive(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalActive(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalExperience = currentExpirience + amount;

    if (finalExperience > experinceToNextLevel) {
      finalExperience = finalExperience - experinceToNextLevel;
      setCurrentExpirience(experinceToNextLevel);

      setTimeout(() => {
        levelUp();
        setCurrentExpirience(0);
        setTimeout(() => { setCurrentExpirience(finalExperience) }, 1000);
      }, 1000);

    } else {
      setCurrentExpirience(finalExperience);
    }

    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExpirience,
        challengesCompleted,
        activeChallenge,
        experinceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}
      {isLevelUpModalActive && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}

