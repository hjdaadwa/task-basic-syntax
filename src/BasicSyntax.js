export function romanToInteger(str) {
    let result = 0;

    for (let i = 0; i < str.length - 1; i++) {
        if (decodeLetter(str[i]) < decodeLetter(str[i + 1])) {
            result -= decodeLetter(str[i]);
        } else {
            result += decodeLetter(str[i]);
        }
    }
    result += decodeLetter(str[str.length - 1]);

    function decodeLetter(letter) {
        switch (letter) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    return result;
}
