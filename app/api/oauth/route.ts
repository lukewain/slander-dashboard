import fetch from "node-fetch";
import { DiscordUser } from "@/utils/types";
import { config } from "@/utils/config";
import { NextApiRequest, NextApiResponse } from "next";

const scope = ["indentify"].join(" ");
const REDIRECT_URI = `${config.appUri}/api/oauth`;

// https://github.com/alii/nextjs-discord-oauth/blob/main/pages/api/oauth.ts
