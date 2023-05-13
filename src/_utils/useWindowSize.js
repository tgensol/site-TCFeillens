import { useCallback, useEffect, useState } from 'react';

const useWindowSize = () => {;

    const isClient = typeof window === "object";

    // Fonction getSize, retournera un objet contenant la hauteur et la largeur de la fenêtre.
    // Si l’application est chargée dans le navigateur, sinon, elles seront égales à undefined.

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.height : undefined
        };
    }, [isClient]);

    // Définition de la variable d’état windowSize
    const [windowSize, setWindowSize] = useState(getSize);

    // Le hook d’effet va d’abord s’assurer que nous sommes bien côté client 

    useEffect(() => {
        
        // Test si on est côté client ou côté serveur :
        if (!isClient) {
            return false;
        };

        // Fonction de mise à jour de la largeur de l’écran en faisant appel à getSize().
        const handleResize = () => {
            setWindowSize(getSize());
        };

        // Ecoute des évolutions de la fenêtre via eventListener. En cas de changement 
        // de taille de la fenêtre => appel de la fonction handleResize.
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, [getSize, isClient]);

    // Renvoi de l’objet windowSize à chaque utilisation du hook "useWindowSize".
    return windowSize;
};

export default useWindowSize;