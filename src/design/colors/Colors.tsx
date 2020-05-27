import React from "react";
// import theme from '../../Theme/Theme';
import {colorCategories} from '../../Theme/Theme';
import './colors.scss'

export const Colors : React.FC = () => {

    const categoriesNames = ['Primary Palette', 'Secondary Palette', 'Neutral Palette', 'Blue', 'Red', 'Orange', 'Green', 'Deprecated colors']

    return(
        <div className='displayColors'>
            {colorCategories.map((category, index) => {
                var categoryColors = Object.entries(category)
                return <div className='colorCategory'>
                        <div className='categoryName'>{categoriesNames[index]}</div>
                        <div className='colorWithName'>
                            {categoryColors.map(color => {
                                return (
                                    <div key={color[0]} className='colorStory' onClick={() => navigator.clipboard.writeText(color[1])}>
                                        <div className='color' style={{backgroundColor: color[1]}}/>
                                        <div className='colorNameContainer'>
                                            <div className='colorName'>
                                                <div>{color[0]}</div>
                                                <div>{color[1]}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
            })}
        </div>
    )
}