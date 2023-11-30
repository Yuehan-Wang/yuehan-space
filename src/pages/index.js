import styles from 'src/styles/homepage.module.css';
import { useEffect, useState } from 'react';
import FluidAnimation from '@/component/fluid/fluid';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';


export default function Home() {
    const [typing, setTyping] = useState('');

    useEffect(() => {
        setTyping('');
        console.log('iconContainer styles:', styles.iconContainer);

        const text = 'Hi there, I am a fourth year college student studying CS and Mathematics \n 你好，欢迎光临我的主页！'; 
        let i = -1;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setTyping((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 20); 

        return () => {
            clearInterval(typingEffect); 
            setTyping(''); 
        };
    }, []); 

    return (
        <div className={styles.container}>
            <FluidAnimation className={styles.FluidAnimation} /> 
            <img src="/profile.jpeg" alt="Yuehan" className={styles.profileImage} />
            <h2 className={styles.profileName}>Yuehan Wang</h2>
            <p className={styles.typing}>{typing}</p>
            <div className={styles.iconContainer}>
                <a href="https://github.com/Yuehan-Wang" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FaGithub size='30' />
                </a>
                <a href="https://www.linkedin.com/in/yuehan-wang-6b7a37162/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FaLinkedin size="30" />
                </a>
                <a href="mailto:yuehan@uchicago.edu" className={styles.iconLink}>
                    <FaEnvelope size="30" />
                </a>
                <a href="https://www.instagram.com/yuehan1130/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FaInstagram size="30" />
                </a>
            </div>

        </div>
    )
}
