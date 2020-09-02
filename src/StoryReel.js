import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
            profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
            title="Sonny Sangha"
            />
            <Story 
            image="https://images.unsplash.com/photo-1506598417715-e3c191368ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            profileSrc="https://images.unsplash.com/photo-1506598417715-e3c191368ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            title="James Hampton"
            />
             <Story 
            image="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/116433013_10157908912653439_2923967638170935317_o.jpg?_nc_cat=102&_nc_sid=84a396&_nc_ohc=3D_ugx9PdP0AX-j4QQt&_nc_ht=scontent-atl3-1.xx&oh=01b9cd9b42b646a2b18319d5654982cd&oe=5F727733"
            profileSrc=""
            title="Yin Chen"
            />
             <Story 
            image="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/117947011_3784189594930002_1873084989438217099_n.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=y6d-UUZm6jUAX-qduIc&_nc_ht=scontent-atl3-1.xx&oh=f057a3d60decca5a49afc1430fd75a06&oe=5F75B1C2"
            profileSrc=""
            title="Lala Zheng"
            />
        </div>
    )
}

export default StoryReel
