import React, { useEffect, useCallback } from 'react';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const AppModal = ({ isOpen, onClose, children, title }: AppModalProps) => {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Modal */}
      <div className='flex min-h-full items-center justify-center p-4'>
        <div
          className='relative transform  rounded-2xl bg-white p-6 text-left shadow-xl transition-all w-full max-w-lg'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-title'
        >
          {/* Header */}
          <div className='flex items-center justify-between mb-4'>
            {title && (
              <h3
                id='modal-title'
                className='text-lg font-semibold leading-6 text-gray-900'
              >
                {title}
              </h3>
            )}
            <button
              onClick={onClose}
              className='scale-100 hover:scale-[1.02] focus:outline-none absolute -top-2 -right-2 bg-slate-950 rounded-full px-3 py-1 text-white'
              aria-label='Close'
            >
              <span className='text-2xl'>&times;</span>
            </button>
          </div>

          {/* Content */}
          <div className='mt-2'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppModal;
