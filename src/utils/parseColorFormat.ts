import ColorFormatType from "../types/ColorFormatType";


const parseColorFormat = (formatColor: ColorFormatType, hex: string, hsv: { 'hue': number, "saturation": number, "value": number }, rgb: { "red": number, "green": number, "blue": number }): string => {
    switch (formatColor) {
        case "hex":
            return `#${hex}`;
        case "hsv":
            return `hsv(${hsv.hue}, ${hsv.saturation}, ${hsv.value})`;
        case "rgb":
            return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    }
};

export default parseColorFormat;