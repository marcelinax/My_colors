import axios from "axios";
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import ColorFormatType from "../types/ColorFormatType";
import ColorType from "../types/ColorType";
import MyColorsList from "./MyColorsList";

const MyColors: React.FC = () => {

    const [colors, setColors] = useState<ColorType[]>([]);
    const [colorCategory, setColorCategory] = useState<string>('new');
    const [colorFormat, setColorFormat] = useState<ColorFormatType>('hex');
    const favouritesColorsIds = useSelector((state: RootState) => state.favouriteColors.favouritesColorsIds);
    const [showOnlyFavs, setShowOnlyFavs] = useState<boolean>(false);

    const getColors = (): void => {
        axios.get(`https://www.colourlovers.com/api/colors/${colorCategory}?format=json`)
            .then(res => setColors(res.data as ColorType[]));
    };


    useEffect(() => {
        getColors();
    }, [colorCategory]);

    return (
        <div className={'my-colors'}>

            <div className={'my-colors-top'}>
                <div className={'my-colors-top-buttons'}>
                    <button onClick={() => setColorFormat('hex')}
                            className={colorFormat === 'hex' ? 'btn--active' : ''}>HEX
                    </button>
                    <button onClick={() => setColorFormat('rgb')}
                            className={colorFormat === 'rgb' ? 'btn--active' : ''}>RGB
                    </button>
                    <button onClick={() => setColorFormat('hsv')}
                            className={colorFormat === 'hsv' ? 'btn--active' : ''}>HSV
                    </button>
                    <button className={showOnlyFavs ? 'btn--active' : ''}
                            onClick={() => setShowOnlyFavs(!showOnlyFavs)}><i className={"bx bx-heart"}></i></button>
                </div>
            </div>
            <div className={'my-colors-side'}>
                <div className={'my-colors-side-buttons'}>
                    <button onClick={() => setColorCategory('new')}
                            className={colorCategory === 'new' ? 'btn--active' : ''}>
                        <i className="bx bx-star"></i>New
                    </button>
                    <button onClick={() => setColorCategory('top')}
                            className={colorCategory === 'top' ? 'btn--active' : ''}><i className="bx bxs-hot"></i>Popular
                    </button>
                    <button onClick={() => setColorCategory('random')}
                            className={colorCategory === 'random' ? 'btn--active' : ''}><i className="bx bx-dice-4"></i>Random
                    </button>
                </div>
            </div>
            <div className={'my-colors-main'}>
                <MyColorsList
                    colors={showOnlyFavs ? colors.filter(color => favouritesColorsIds.includes(color.id)) : colors}
                    colorFormat={colorFormat}/>
            </div>
        </div>
    );
};

export default MyColors;