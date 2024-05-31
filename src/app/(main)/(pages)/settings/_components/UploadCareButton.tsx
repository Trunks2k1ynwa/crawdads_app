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
  const router = useRouter();
  const ctxProviderRef = React.useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null);
  React.useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = async (event: any) => {
      const file = await onUpload(event.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    ctxProvider.addEventListener('file-upload-successs', handleChangeEvent);
    return () => {
      ctxProvider.removeEventListener('file-upload-successs', handleChangeEvent);
    };
  }, [onUpload, router]);
  return (
    <div>
      <lr-config ctx-name='my-uploader' pubkey='a9428ff5ff90ae7a64eb' />

      <lr-file-uploader-regular
        ctx-name='my-uploader'
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider ctx-name='my-uploader' ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
