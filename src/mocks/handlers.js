import { rest } from 'msw';
import navigation from '../__mock__/navigation.json'
export const handlers = [
    rest.get('https://run.mocky.io/v3/', (req, res, ctx) => {
        return res(
            ctx.json(navigation)
        );
    }),
];
