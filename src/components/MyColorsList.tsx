import React from 'react';
import ColorFormatType from "../types/ColorFormatType";
import ColorType from "../types/ColorType";
import MyColorsListItem from "./MyColorsListItem";

interface Props {
    colors: ColorType[];
    colorFormat: ColorFormatType;
}

const MyColorsList: React.FC<Props> = ({colors, colorFormat}) => {


    const renderColors = (): JSX.Element[] => {
        return colors.map(color => (
            <MyColorsListItem id={color.id} hex={color.hex} numVotes={color.numVotes} dateCreated={color.dateCreated}
                              userName={color.userName} formatColor={colorFormat} hsv={color.hsv} rgb={color.rgb}
                              key={color.id}/>
        ));
    };


    return (
        <div className={'my-colors-list'}>
            {renderColors()}
        </div>
    );
};

export default MyColorsList;
