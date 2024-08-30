import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useState } from 'react';

export default function Upload({ onURLChange, defaultImage }) {
  const [imageSelected, setImageSelected] = useState('');

  function handleUploadSuccess(result) {
    const imageUrl = result.info.secure_url;
    if (onURLChange) {
      onURLChange(imageUrl);
    } else {
      console.warn(
        'Você precisa passar a prop onChange para o formulário de cadastro'
      );
    }
    console.log('Upload bem-sucedido. URL da imagem:', imageUrl);

    setImageSelected(imageUrl);
  }

  return (
    <div>
      {imageSelected ? (
        <div >
          <label>Imagem Selecionada:</label>
          <Image
            src={imageSelected}
            alt='Imagem Selecionada'
            width='100'
            height='100'
          />
        </div>
      ) : (
        defaultImage && (
          <div className={styles.image}>
            <label>Imagem Padrão:</label>
            <Image
              src={defaultImage}
              alt='Imagem Padrão'
              width='100'
              height='100'
            />
          </div>
        )
      )}
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
            >
              Enviar imagem
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}