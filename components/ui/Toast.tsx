'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'success' | 'error';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-2xl px-5 py-4 shadow-xl max-w-sm transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
        type === 'success'
          ? 'bg-brand-green-50 border border-brand-green-200'
          : 'bg-red-50 border border-red-200'
      )}
      role="alert"
    >
      {type === 'success' ? (
        <CheckCircle className="h-5 w-5 text-brand-green-600 shrink-0 mt-0.5" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
      )}
      <p
        className={cn(
          'text-sm font-medium',
          type === 'success' ? 'text-brand-green-800' : 'text-red-800'
        )}
      >
        {message}
      </p>
      <button
        onClick={() => { setVisible(false); setTimeout(onClose, 300); }}
        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors shrink-0"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// Simple hook for managing toast state
export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  const showToast = (message: string, type: ToastType = 'success') => {
    setToast({ message, type });
  };

  const clearToast = () => setToast(null);

  return { toast, showToast, clearToast };
}
