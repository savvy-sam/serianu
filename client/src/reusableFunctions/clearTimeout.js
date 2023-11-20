import React, { useEffect, useRef } from 'react';

const YourComponent = () => {
    const timeoutRef = useRef(null);

    const handleSubmit = async () => {
        await handleAddSubmit();

        // Set a 3-second delay using setTimeout and store the timeout ID in timeoutRef.current
        timeoutRef.current = setTimeout(() => {
            refetch();
        }, 3000);
    }
}