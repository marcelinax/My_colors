import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleLike} from "../state/favouriteColorsSlice";
import {AppDispatch, RootState} from "../store";
import ColorFormatType from "../types/ColorFormatType";
import parseColorFormat from "../utils/parseColorFormat";
import parseDate from "../utils/parseDate";

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
    onClick: () => void;
}

const MyColorsListItem: React.FC<Props> = ({
                                               id,
                                               hex,
                                               dateCreated,
                                               numVotes,
                                               userName,
                                               formatColor,
                                               rgb,
                                               hsv,
                                               onClick
                                           }) => {

    const [buttonHovered, setButtonHovered] = useState<boolean>(false);
    const favouritesColorsIds = useSelector((state: RootState) => state.favouriteColors.favouritesColorsIds);
    const dispatch = useDispatch<AppDispatch>();


    return (
        <div className={'my-colors-list-item'} onClick={onClick}>

            <div className={'my-colors-list-item-bg'} style={{backgroundColor: '#' + hex}}>
                <div className={'my-colors-list-item-bg-color'} onClick={() => {
                    navigator.clipboard.writeText(parseColorFormat(formatColor, hex, hsv, rgb));
                }}>
                    <p>{parseColorFormat(formatColor, hex, hsv, rgb)}</p>
                </div>
            </div>
            <div className={'my-colors-list-item-bottom'}>
                <button onClick={() => dispatch(toggleLike(id))} onMouseEnter={() => setButtonHovered(true)}
                        onMouseLeave={() => setButtonHovered(false)}>
                    <i className={buttonHovered || favouritesColorsIds.includes(id) ? "bx bxs-heart" : "bx bx-heart"}/>{favouritesColorsIds.includes(id) ? numVotes + 1 : numVotes}
                </button>
                <div className={'my-colors-list-item-bottom-info'}>
                    <p>{parseDate(dateCreated)}</p>
                    <p>by {userName}</p>
                </div>
            </div>

        </div>
    );
};

export default MyColorsListItem;