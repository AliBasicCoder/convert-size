
interface Options {
    lowerCase: boolean;
    accuracy: number;
    shortcut: boolean;
}

const options = {
    lowerCase: false,
    accuracy: 2,
    shortcut: true
}

export const convertSize = (size: number, op: Options = options): string => {

    const func = (thing: string): string => op.lowerCase ? thing.toLowerCase() : thing;

    const
        kb = size / 1024,
        mb = kb / 1024,
        gb = mb / 1024,
        tb = gb / 1024,
        pb = tb / 1024,
        byte = op.shortcut ? func('B') : func('Byte'),
        kiloByte = op.shortcut ? func("KB") : func('Kilo Byte'),
        megaByte = op.shortcut ? func("MB") : func('Mega Byte'),
        gigaByte = op.shortcut ? func("GB") : func('Giga Byte'),
        teraByte = op.shortcut ? func("TB") : func('Tera Byte'),
        petaByte = op.shortcut ? func("PB") : func('Peta Byte'),
        per = op.accuracy || 3;
    // END


    if (size < 1024) {
        return `${size} ${byte}${size > 1 && !op.shortcut ? 's' : ''}`;
    }

    if (kb < 1024) {
        return `${kb.toFixed(per)} ${kiloByte}${kb > 1 && !op.shortcut ? 's' : ''}`;
    }

    if (mb < 1024) {
        return `${mb.toFixed(per)} ${megaByte}${mb > 1 && !op.shortcut ? 's' : ''}`;
    }

    if (gb < 1024) {
        return `${gb.toFixed(per)} ${gigaByte}${gb > 1 && !op.shortcut ? 's' : ''}`;
    }

    if (tb < 1024) {
        return `${tb.toFixed(per)} ${teraByte}${tb > 1 && !op.shortcut ? 's' : ''}`;
    }

    return `${pb.toFixed(per)} ${petaByte}${pb > 1 ? 's' : ''}`;
}
