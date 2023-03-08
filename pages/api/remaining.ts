import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../utils/redis";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if user is logged in
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    return res.status(500).json("Login to upload.");
  }

  // Query the redis database by email to get the number of generations left - This does not work
  const identifier = session.user.email;
  const remainingGenerations = await redis?.get(
    `@upstash/ratelimit:${identifier!}:19423`
  );

  // Calculate the remaining time until reset
  const resetDate = new Date();
  resetDate.setHours(19, 0, 0, 0);
  const diff = Math.abs(resetDate.getTime() - new Date().getTime());
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) - hours * 60;

  if (remainingGenerations == 0) {
    return res
      .status(200)
      .json(
        `You have 0 generations left today. Your generation${
          Number(remainingGenerations) > 1 ? "s" : ""
        } will renew in ${hours} hours and ${minutes} minutes.`
      );
  }
  return res
    .status(200)
    .json(
      `You have ${remainingGenerations} generation${
        Number(remainingGenerations) > 1 ? "s" : ""
      } remaining for today.`
    );
}
