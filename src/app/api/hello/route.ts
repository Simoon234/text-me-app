import {redis} from "../../../../redis";

export async function POST(req: Request) {
    const {message} = await req.json();

    const newMessage = {
        ...message,
        createdAt: Date.now()
    }

    await redis.hset('message', message.id, JSON.stringify(newMessage))
    return new Response(newMessage);
}
