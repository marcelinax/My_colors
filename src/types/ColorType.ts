export default interface ColorType {
    id: number;
    userName: string;
    numVotes: number;
    dateCreated: string;
    hex: string;
    rgb: {
        red: number,
        green: number,
        blue: number
    };
    hsv: {
        hue: number,
        saturation: number,
        value: number
    };
    imageUrl: string;


}