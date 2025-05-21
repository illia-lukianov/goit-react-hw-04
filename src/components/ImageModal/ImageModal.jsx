import styles from './ImageModal.module.css'
import { RiCloseLargeLine } from "react-icons/ri";

export default function ImageModal ({currentImage: {alt_description, color, description, likes, urls}, isModalOpen, closeModal}) {

    if (!isModalOpen) {
        return;
    }

    return (
        <div className={styles.modalWrapper} style={{backgroundColor: color}}>
            <p className={styles.modalInfo}>{description || alt_description}</p>
            <img src={urls.regular} className={styles.modalImg} alt={alt_description} />
            <p className={styles.modalInfo}>Likes: {likes}</p>
            <button className={styles.closeButton} onClick={closeModal}>
                <RiCloseLargeLine className={styles.closeIcon} />
            </button>
        </div>        
    )
}