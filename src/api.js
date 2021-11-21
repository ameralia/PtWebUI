import logger from "./logger";
import config from "./config";

export const getData = async (req) => {
    const reqStr = JSON.stringify(req);
    logger(`Going to make a call with payload ${reqStr}.`);
    const rsp = await fetch(config('basicURL') + config('stopsResourcePath') + "?" + new URLSearchParams({q: reqStr}));
    return rsp.json();
};