#!/usr/bin/env node

async function findUserByName(username) {
  const inputParam = (username) => {
    return encodeURIComponent(
      JSON.stringify({ 0: { json: { username: username } } })
    );
  };

  const input = inputParam(username);

  const response = await fetch(
    `https://api.app.tea.xyz/trpc/findUserByName?batch=1&input=${input}`
  );
  const data = await response.json();

  // Assuming data is an array and taking the first element
  if (
    Array.isArray(data) &&
    data.length > 0 &&
    data[0].result &&
    data[0].result.data &&
    data[0].result.data.json
  ) {
    const user = data[0].result.data.json;
    console.log(`${user.githubUsername}: ${user.safeAddress}`);
  } else {
    throw new Error("User not found or invalid response structure");
  }
}

const username = process.argv[2];
if (!username) {
  console.error("Usage: findUserByName <github username>");
  process.exit(1);
}

findUserByName(username).catch(console.error);
