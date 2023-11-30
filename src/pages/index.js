import styles from 'src/styles/homepage.module.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const [typing, setTyping] = useState('');

    useEffect(() => {
        setTyping('');
        const text = 'Hi there, I am a fourth year college student studying CS and Mathematics \n 你好，欢迎光临我的主页！'; 
        let i = -1;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                setTyping((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 30); 

        return () => clearInterval(typingEffect);
    }, []);

    return (
        <div className={styles.container}>
           <img src="/profile.jpeg" alt="Yuehan" className={styles.profileImage} />
            <h2>Yuehan Wang</h2>
            <p className={styles.typing}>{typing}</p>
            <div className={styles.iconContainer}>
                    <a href="https://github.com/Yuehan-Wang" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/yuehan-wang-6b7a37162/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="mailto:yuehan@uchicago.edu" className={styles.iconLink}>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/yuehan1130/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
            </div>
        </div>
    )
}
