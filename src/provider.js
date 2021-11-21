import logger from "./logger";
import {getData} from "./api";
const cache = {};

export const getStopsData = async (boxReq) => {
    const res = [];
    const dataToFetch = [];
    for (let x = boxReq.x0; x <= boxReq.x1; x++) {
        for (let y = boxReq.y0; y <= boxReq.y1; y++) {
            const tileId = { z: boxReq.z, x, y };
            const stops = cache[JSON.stringify(tileId)];
            if (stops) {
                res.push(...stops);
                continue;
            }

            dataToFetch.push({x, y});
        }
    }

    if (!dataToFetch.length) {
        return res;
    }

    logger(`BBox is ${JSON.stringify(boxReq)}.`);
    const rsp = await getData({z: boxReq.z, boxes: dataToFetch});
    rsp.forEach((stops, i) => {
        const tileId = { z: boxReq.z, x: dataToFetch[i].x, y: dataToFetch[i].y };
        cache[JSON.stringify(tileId)] = stops;
        res.push(...stops);
    });

    return res;
};