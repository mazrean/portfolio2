import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const compressionMiddleware: any = compression({ threshold: 0 });
const sapperMiddleware: any = sapper.middleware()

polka() // You can also use Express
	.use(
		compressionMiddleware,
		sirv('static', { dev }),
		sapperMiddleware,
	)
	.listen(PORT);
