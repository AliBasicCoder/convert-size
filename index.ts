export const convertSize = (size: number): string => {
    if (size <= 1) {
        return (size + " byte");
    }
    if (size < 1024) {
        return (size + " bytes");
    }
    const kb = size / 1024;
    const mb = kb / 1024;
    const gb = mb / 1024;
    const tb = gb / 1024;
    const bb = tb / 1024;
    if (kb < 1024) {
        return (kb.toPrecision(3) + " KB");
    }
    if (mb < 1024) {
        return (mb.toPrecision(3) + " MB");
    }
    if (gb < 1024) {
        return (gb.toPrecision(3) + " GB");
    }
    if (tb < 1024) {
        return (tb.toPrecision(3) + " TB");
    }
    return (bb.toPrecision(3) + " PB");
};

