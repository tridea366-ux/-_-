
import { useCallback } from 'react';

export const useTextToSpeech = () => {
  const speak = useCallback((text: string, force: boolean = false) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('Text-to-speech not supported in this browser.');
      return;
    }
    if (force) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak };
};
