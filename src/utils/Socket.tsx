import { io } from 'socket.io-client';
import { HOST } from '../constant/Host';

const socket = io(`${HOST.SOCKET}`, { transports: ['websocket'] });



export default socket;