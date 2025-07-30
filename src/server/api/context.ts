import { auth } from '@clerk/nextjs/server';
import { db } from '~/server/db';

export const createContext = async (opts: { headers: Headers }) => {
    const authData = await auth();
    return {
        auth: authData,
        userId: authData.userId,
        db,
        ...opts,
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;