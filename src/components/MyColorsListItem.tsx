import React, {useState} from 'react';
import ColorFormatType from "../types/ColorFormatType";

interface Props {
    'id': number;
    'hex': string;
    'numVotes': number;
    'dateCreated': string;
    'userName': string;
    'formatColor': ColorFormatType;
    hsv: {
        hue: number,
        saturation: number,
        value: number
    };
    rgb: {
        red: number,
        green: number,
        blue: number
    };

}

const MyColorsListItem: React.FC<Props> = ({id, hex, dateCreated, numVotes, userName, formatColor, rgb, hsv}) => {

    const [buttonHovered, setButtonHovered] = useState<boolean>(false);


    const parseColorFormat = (): string => {
        switch (formatColor) {
            case "hex":
                return `#${hex}`;
            case "hsv":
                return `hsv(${hsv.hue}, ${hsv.saturation}, ${hsv.value})`;
            case "rgb":
                return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
        }
    };

    return (
        <div className={'my-colors-list-item'}>
            <div className={'my-colors-list-item-bg'} style={{backgroundColor: '#' + hex}}>
                <div className={'my-colors-list-item-bg-color'} onClick={() => {
                    navigator.clipboard.writeText(parseColorFormat());
                }}>
                    <p>{parseColorFormat()}</p>
                </div>
            </div>
            <div className={'my-colors-list-item-bottom'}>
                <button onMouseEnter={() => setButtonHovered(true)} onMouseLeave={() => setButtonHovered(false)}>
                    <i className={buttonHovered ? "bx bxs-heart" : "bx bx-heart"}/>{numVotes}</button>
                <div className={'my-colors-list-item-bottom-info'}>
                    <p>{dateCreated}</p>
                    <p>by {userName}</p>
                </div>
            </div>

        </div>
    );
};

export default MyColorsListItem;