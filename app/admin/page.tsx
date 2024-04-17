// TODO: Admin login page. Going to be restricted to a @wekul.dev
import { useState, useEffect } from "react";
import { sql } from "@vercel/postgres";

export async function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (localStorage.getItem("loginToken") === null) {
    setLoggedIn(false);
  }

  return <div>{loggedIn && <div></div>}</div>;
}

export default async function Cart({params} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;