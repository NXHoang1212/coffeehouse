

export const ToggleDescription = (setShowFullDescription: any, showFullDescription: boolean) => {
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription); // Khi nhấn vào, đảo ngược giá trị của state showFullDescription
    };
    return toggleDescription;
};