import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from "../../sanity";
import { PageInfo } from '../../typings';

const query = groq`
    *[_type == "page"]
`

type Data = {
    info: PageInfo[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const info: PageInfo[] = await sanityClient.fetch(query);
    res.status(200).json({ info });
}