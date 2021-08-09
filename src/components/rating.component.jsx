import React from 'react';

const Rating = ({ value, text, color }) => {
    return(
        /*
        Explanation of the code below:
        There are an 5 <i> tags inside the Rating component. Each <i> tag will receive a Font Awesome class that will render a type of star. 
        There will be 3 types of stars given by Font Awesome classes: 'fas fa-star' - full star; 'fas-fa-star-half-alt' - half star; 'far fa-star' - empty star.
        The if operator condition inside each <i> tag:
            if the value prop is greater than a certain value, then give a certain Font Awesome class; if it's greater than another certain value, give another certain Font Awesome class; if it's not greater than any of the values above, than give another Font Awesome class.
        Basically each <i> tag will receive different Font Awesome classes, depending of the value passed into the Rating component
        */
        <div className='rating'>
            <span>
                <i style={{ color }} className={
                    value >= 1 ? 'fas fa-star' // if the value prop is greater or equal to 1 - give class of full star (fas fa-star from font awesome)
                    : value >= 0.5 ? 'fas fa-star-half-alt' // if the value prop is greater or equal to .5 - give class of half star (fas fa-star-half-alt from font awesome)
                    : 'far fa-star' // otherwise - give class of empty star (far fa-star from font awesome)
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 2 ? 'fas fa-star'
                    : value >= 1.5 ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 3 ? 'fas fa-star'
                    : value >= 2.5 ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 4 ? 'fas fa-star'
                    : value >= 3.5 ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }>

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 5 ? 'fas fa-star'
                    : value >= 4.5 ? 'fas fa-star-half-alt'
                    : 'far fa-star'
                }>

                </i>
            </span>
            <span>
                {text}
            </span>
        </div>
    )
}

export default Rating