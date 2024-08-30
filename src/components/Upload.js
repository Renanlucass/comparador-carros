import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/upload.module.css';

export default function Upload({ onURLChange, defaultImage }) {
  const [imageSelected, setImageSelected] = useState('');

  function handleUploadSuccess(result) {
    const imageUrl = result.info.secure_url;
    if (onURLChange) {
      onURLChange(imageUrl);
    } else {
      console.warn(
        'Você precisa passar a prop onURLChange para o formulário de cadastro'
      );
    }
    console.log('Upload bem-sucedido. URL da imagem:', imageUrl);
    setImageSelected(imageUrl);
  }

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.card}>
        <div className={styles.imagePreview}>
          {imageSelected ? (
            <Image
              src={imageSelected}
              alt='Imagem Selecionada'
              layout='fill'
              objectFit='cover'
              className={styles.image}
            />
          ) : (
            defaultImage && (
              <div className={styles.defaultImageContainer}>
                <label>Imagem Padrão:</label>
                <Image
                  src={defaultImage}
                  alt='Imagem Padrão'
                  layout='fill'
                  objectFit='cover'
                  className={styles.image}
                />
              </div>
            )
          )}
        </div>
      </div>
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onSuccess={handleUploadSuccess}
        options={{
          clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
        }}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }

          return (
            <button
              type='button'
              onClick={handleOnClick}
              className={styles.uploadButton}
            >
              Enviar imagem
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
