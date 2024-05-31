import { ConnectionsProvider } from '@/providers/connections-provider';
import EditorProvider from '@/providers/editor-provider';
import React from 'react';
import EditorCanvas from './_components/EditorCanvans';

type Props = {};

const page = (props: Props) => {
  return (
    <div className='h-full'>
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default page;
