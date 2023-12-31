import { io } from 'socket.io-client';
import { HOST } from '../constant/Host';

const socket = io(`${HOST.SOCKET}`, { transports: ['websocket'] });

socket.on('connect', () => {
  console.log('Connected to server!');
});

socket.on('disconnected', () => {
  console.log('Disconnected from server!');
});

export { socket };
