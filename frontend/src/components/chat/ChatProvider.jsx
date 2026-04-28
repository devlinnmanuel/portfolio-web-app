import { useState } from 'react';
import ChatWidget from './ChatWidget';
import ChatFAB from './ChatFAB';
import MessageModal from './MessageModal';


export default function ChatProvider({ children }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [chatMode, setChatMode] = useState("AI");

  return (
    <>
      {children}

      {!chatOpen && (
        <ChatFAB isOpen={chatOpen} onClick={() => setChatOpen(true)} />
      )}

      <ChatWidget
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onMode={chatMode}
      />

      <MessageModal
        isOpen={messageOpen}
        onClose={() => setMessageOpen(false)}
      />
    </>
  );
}