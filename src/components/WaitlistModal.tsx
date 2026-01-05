import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../i18n';
import { useWaitlist } from '../context';

type ModalState = 'form' | 'loading' | 'success' | 'error';

export function WaitlistModal() {
  const { t } = useLanguage();
  const { isOpen, closeModal } = useWaitlist();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<ModalState>('form');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage(t.waitlist.error.invalid);
      setState('error');
      return;
    }

    setState('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setState('success');
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch {
      setErrorMessage(t.waitlist.error.generic);
      setState('error');
    }
  };

  const handleClose = () => {
    closeModal();
    setState('form');
    setEmail('');
    setErrorMessage('');
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className="relative bg-white rounded-2xl shadow-elevated border border-slate-200/60 max-w-md w-full p-8 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label={t.waitlist.close}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content based on state */}
          {state === 'success' ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                id="waitlist-title"
                className="font-display text-2xl font-semibold text-slate-900 mb-2"
              >
                {t.waitlist.success.title}
              </h3>
              <p className="text-slate-600">{t.waitlist.success.message}</p>
            </div>
          ) : (
            <>
              <h2
                id="waitlist-title"
                className="font-display text-2xl font-semibold text-slate-900 mb-2"
              >
                {t.waitlist.title}
              </h2>
              <p className="text-slate-600 mb-6">{t.waitlist.subtitle}</p>

              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === 'error') {
                      setState('form');
                      setErrorMessage('');
                    }
                  }}
                  placeholder={t.waitlist.placeholder}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors mb-4"
                  disabled={state === 'loading'}
                />

                {state === 'error' && (
                  <p className="text-red-600 text-sm mb-4" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary w-full justify-center py-3.5"
                >
                  {state === 'loading' ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span>{t.waitlist.loading}</span>
                    </>
                  ) : (
                    <span>{t.waitlist.button}</span>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
