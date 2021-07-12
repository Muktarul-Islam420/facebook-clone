import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://www.linkpicture.com/q/story5.jpg"
            profileSrc="https://www.linkpicture.com/q/Muktarul_khan_akash-removebg-preview-1.png"
            title="Muktarul khan akash"
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
