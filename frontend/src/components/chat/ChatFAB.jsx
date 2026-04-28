import { IoChatbubbleEllipsesSharp, IoClose } from "react-icons/io5";


export default function ChatFAB({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
        isOpen
          ? 'bg-(--pacific-cyan) border border-(--pearl-aqua) text-[#4ecdc4] rotate-90'
          : 'bg-(--pacific-cyan) text-white hover:bg-(--pacific-cyan)/70 hover:scale-110'
      }`}
      title={isOpen ? 'Close chat' : 'Chat with AI assistant'}
    >{isOpen ? <IoClose /> : <IoChatbubbleEllipsesSharp className="text-2xl"/>}</button>
  );
}