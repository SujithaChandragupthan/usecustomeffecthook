import { useRef } from "react";

const useCustomHook = (effect, deps) => {
    const isFirstRendered = useRef(true);
    const prevDeps = useRef([]);

    if (isFirstRendered.current) {
        isFirstRendered.current = false;
        effect();
        return;
    }

    const depsChanged = deps
        ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
        : true;

    if (depsChanged) {
        effect();
    }
    prevDeps.current = deps || [];
};

export default useCustomHook;
