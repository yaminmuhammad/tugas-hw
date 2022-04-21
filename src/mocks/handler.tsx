import { rest } from 'msw';

const searchParams = "SeachParams";
export const handler = [
    rest.get(
        `https://api.spotify.com/v1/search?q=${searchParams}&type=track`,
        (req, res, ctx) => {
            const title = req.url.searchParams;
            return res(ctx.json(title));
        }
    ),
]