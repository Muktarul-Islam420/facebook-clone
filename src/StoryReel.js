import React from 'react'
import { useStateValue } from './StateProvider';
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="storyReel">
            <Story image="https://www.linkpicture.com/q/story5.jpg"
            profileSrc={user.photoURL}
            title={user.displayName}
            />
             <Story image="https://www.linkpicture.com/q/story1.jpg"
            profileSrc="https://www.linkpicture.com/q/woaresul.jpg"
            title="Woaresul Al Hridoy"
            />
             <Story image="https://www.linkpicture.com/q/story2.jpg"
            profileSrc="https://www.linkpicture.com/q/Sriti-saha.jpg"
            title="Riya"
            />
             <Story image="https://www.linkpicture.com/q/story3.jpg"
            profileSrc="https://www.linkpicture.com/q/afsana.jpg"
            title="Afsana khan"
            />
             <Story image="https://www.linkpicture.com/q/story4.jpg"
            profileSrc="https://www.linkpicture.com/q/angel-ritu.jpg"
            title="Rebeka"
            />
        </div>
    )
}

export default StoryReel
