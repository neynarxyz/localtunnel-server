import { debug } from 'book';
import CreateServer from './server.js';

const server = CreateServer({
    max_tcp_sockets: 1000,
    secure: true,
    domain: 'localtunnel-server-psi.vercel.app',
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    debug('server listening on port: %d', server.address().port);
});
