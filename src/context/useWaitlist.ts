import { createContext, useContext } from 'react';

interface WaitlistContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error('useWaitlist must be used within WaitlistProvider');
  }
  return context;
}
