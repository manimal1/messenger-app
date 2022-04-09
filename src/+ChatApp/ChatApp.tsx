import { FC } from 'react';
import { useMultiChatLogic, MultiChatWindow, MultiChatSocket } from 'react-chat-engine-advanced';
import { useAppSelector } from 'store/hooks';
import { loggedInUser } from 'store/_slices/loggedInUserSlice';

const ChatApp: FC = () => {
  const chatProps = useMultiChatLogic('1bdd43e7-1aea-43ca-8a72-3892fe288e21', 'jmac', 'MySuperSecretSecret');
  const currentUser = useAppSelector(loggedInUser);
  console.log({ currentUser });

  return (
    <>
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
      <MultiChatSocket {...chatProps} />
    </>
  );
};

export default ChatApp;
