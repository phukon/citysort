import PocketBase from 'pocketbase';

const url = import.meta.env.VITE_API;
const pb = new PocketBase(url);
pb.autoCancellation(false);

export default pb;
