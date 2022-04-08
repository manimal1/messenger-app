import { FC } from 'react';
import { useMultiChatLogic, MultiChatWindow, MultiChatSocket } from 'react-chat-engine-advanced';

const ChatApp: FC = () => {
  const chatProps = useMultiChatLogic('1bdd43e7-1aea-43ca-8a72-3892fe288e21', 'jmac', 'MySuperSecretSecret');

  return (
    <>
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
      <MultiChatSocket {...chatProps} />
    </>
  );
};

export default ChatApp;
