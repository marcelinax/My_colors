import React, {useState} from 'react';
import ColorFormatType from "../types/ColorFormatType";
import ColorType from "../types/ColorType";
import MyColorsItem from "./MyColorsItem";
import MyColorsListItem from "./MyColorsListItem";

interface Props {
    colors: ColorType[];
    colorFormat: ColorFormatType;
}

const MyColorsList: React.FC<Props> = ({colors, colorFormat}) => {


    const [modalColor, setModalColor] = useState<ColorType | null>(null);

    const renderModal = (): JSX.Element => {

        return modalColor !== null ?
            <MyColorsItem id={modalColor.id} hex={modalColor.hex} numVotes={modalColor.numVotes}
                          dateCreated={modalColor.dateCreated} userName={modalColor.userName}
                          formatColor={colorFormat}
                          hsv={modalColor.hsv}
                          rgb={modalColor.rgb} imageUrl={modalColor.imageUrl}
                          onClick={() => setModalColor(null)}/> : <></>;
    };


    const renderColors = (): JSX.Element[] => {
        return colors.map(color => (
            <MyColorsListItem id={color.id} hex={color.hex} numVotes={color.numVotes}
                              dateCreated={color.dateCreated}
                              userName={color.userName} formatColor={colorFormat} hsv={color.hsv} rgb={color.rgb}
                              key={color.id} onClick={() => {
                setModalColor(color);
            }}/>
        ));
    };


    return (
        <div className={'my-colors-list'}>
            {renderColors()}
            {renderModal()}
        </div>
    );
};

export default MyColorsList;
