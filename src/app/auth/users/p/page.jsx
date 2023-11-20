"use client"
import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session } = useSession();
    console.log({ data: session })
  if (!session) {
    return <pre>{JSON.stringify(session)}</pre>;
  }

  return <div>Hello, {session.user.name}!</div>;
};

export default Page