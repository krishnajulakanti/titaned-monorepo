// Service module to fetch users from an API
export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users.slice(0, 2); // Return only the first 2 users
}
