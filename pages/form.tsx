import type { NextPage } from 'next'
import { useState } from 'react'
import { Character, ClassType } from '../libs/characters';

import styles from '../styles/Form.module.css'

const Home: NextPage = () => {
    const [name, setName] = useState('');
    const [alias, setAlias] = useState('');
    const [portrait, setPortrait] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const [path, setPath] = useState<number>();
    const [className, setClassName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [classPortrait, setClassPortrait] = useState('');

    const handleSendClick = () => {
        let character: Character = { name, alias, portrait: `/assets/${portrait}.png`, videoUrl, classes: [] }
        let classe = { path, name: className, description, imageUrl: `/assets/${imageUrl}.png`, portrait: `/assets/${classPortrait}.png` }

        character.classes.push(classe as ClassType)

        console.log(JSON.stringify(character))
    }

    return (
        <div className={styles.container}>
            <h1>Personagem</h1>

            <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='alias' value={alias} onChange={e => setAlias(e.target.value)} />
            <input type="text" placeholder='portrait' value={portrait} onChange={e => setPortrait(e.target.value)} />
            <input type="text" placeholder='videoUrl' value={videoUrl} onChange={e => setVideoUrl(e.target.value)} />

            <button onClick={handleSendClick} style={{ height: '40px' }}>Enviar</button>

            <h1>Classe 1</h1>
            <input type="text" placeholder='path' value={path} onChange={e => setPath(parseInt(e.target.value))} />
            <input type="text" placeholder='className' value={className} onChange={e => setClassName(e.target.value)} />
            <input type="text" placeholder='description' value={description} onChange={e => setDescription(e.target.value)} />
            <input type="text" placeholder='imageUrl' value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <input type="text" placeholder='portrait' value={classPortrait} onChange={e => setClassPortrait(e.target.value)} />


        </div >


    )
}

export default Home
