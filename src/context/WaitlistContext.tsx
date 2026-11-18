import { useState, useCallback, type ReactNode } from 'react';
import { WaitlistContext } from './useWaitlist';

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <WaitlistContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </WaitlistContext.Provider>
  );
}
