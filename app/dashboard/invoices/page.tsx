import ClientSideComponent from './ClientSideComponent';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getData() {
  console.log("Fetching users from server...");
  const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  const data = await res.json();

  return data;
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div>
      <h2>Users (SSR)</h2>
      <ClientSideComponent users={data.users} />
    </div>
  );
}