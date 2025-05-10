import { NextApiRequest, NextApiResponse } from "next";

const time = (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date();
  return res.json({
    time: date.toLocaleString(),
  });
};

export default time;
