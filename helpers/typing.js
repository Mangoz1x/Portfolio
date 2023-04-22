import { useState, useEffect } from 'react';

const TypingEffect = (arr) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = arr || ['Hello, world!', 'Welcome to Next.js.', 'Enjoy coding!'];

    useEffect(() => {
        const currentPhrase = phrases[textIndex];

        const typeNext = () => {
            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
            } else {
                setDisplayText((prev) => currentPhrase.substring(0, prev.length + 1));
            }
        };

        const typeSpeed = isDeleting ? 50 : 100;
        const typeTimeout = setTimeout(typeNext, typeSpeed);

        if (displayText === currentPhrase && !isDeleting) {
            setTimeout(() => setIsDeleting(true), 1000); // Add a 1000ms delay before deleting
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % phrases.length);
        }

        return () => clearTimeout(typeTimeout);
    }, [textIndex, displayText, isDeleting]);

    return displayText;
};

export { TypingEffect };
