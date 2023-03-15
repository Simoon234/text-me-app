import MessageWrapper from "@/app/components/MessageWrapper";
import MessageInput from "@/app/components/MessageInput";

export default function Home() {
  return (
    <main className='flex flex-col h-full'>
        <MessageWrapper/>
        <MessageInput/>
    </main>
  )
}
