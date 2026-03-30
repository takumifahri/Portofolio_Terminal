// FILE 2: terminal-input.tsx
'use client';

import { useState, KeyboardEvent } from 'react';

interface TerminalInputProps {
    onCommand: (command: string) => string;
    onTabOpen: (tabId: string) => void;
    onClose?: () => void;
}

export default function TerminalInput({ onCommand, onTabOpen, onClose }: TerminalInputProps) {
    const [input, setInput] = useState('');

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const result = onCommand(input);
            setInput('');
        }
    };

    return (
        <div className="border-t border-[#1a1f2e] bg-[#0D1117] px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 animate-slide-up">
            <div className="flex gap-1 sm:gap-2 items-center min-w-0">
                <span className="text-[#39FF14] font-mono text-[10px] xs:text-xs sm:text-xs lg:text-sm whitespace-nowrap flex-shrink-0">
                    user@terminal
                </span>
                <span className="text-[#39FF14] flex-shrink-0">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="open [tab] | help"
                    className="flex-1 min-w-0 bg-transparent text-[#00FFFF] placeholder-[#666666] focus:outline-none font-mono text-[10px] xs:text-xs sm:text-xs lg:text-sm"
                    autoFocus
                />
                {onClose && (
                    <button
                        onClick={onClose}
                        className="text-[#666666] hover:text-[#FF3366] font-mono text-xs sm:text-sm transition-colors flex-shrink-0"
                        title="Close input"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
}