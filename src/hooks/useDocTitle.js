import { useEffect } from "react";

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Glasses Shopping`;
        } else {
            document.title = 'Glasses Shopping | The Perfect Glasses Store';

        }
    }, [title]);

    return null;
};

export default useDocTitle;