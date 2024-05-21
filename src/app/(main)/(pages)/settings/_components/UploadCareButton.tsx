'use client';
import React from 'react';
import * as LR from '@uploadcare/blocks';
import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css';
import { useRouter } from 'next/navigation';

LR.registerBlocks(LR);
type Props = {
  onUpload: any;
};
const UploadCareButton = ({ onUpload }: Props) => {
  const [files, setFiles] = React.useState([]);
  const router = useRouter();
  const ctxProviderRef = React.useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null);
  React.useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = async (event: any) => {
      const file = await onUpload(event.detail.cdnUrl);
      if (file) {
      }
      router.refresh();
    };

    ctxProvider.addEventListener('file-upload-successs', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('file-upload-successs', handleChangeEvent);
    };
  }, [setFiles]);
  return (
    <div>
      <lr-config ctx-name='my-uploader' pubkey='834430ac28c1f8817adb' />

      <lr-file-uploader-regular ctx-name='my-uploader' />

      <lr-upload-ctx-provider ctx-name='my-uploader' ref={ctxProviderRef} />

      <div>
        {/* {files.map(file => (
          <div key={file.uuid}>
            <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default UploadCareButton;
