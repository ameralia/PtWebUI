if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
}

export const lngToXTile = (x, zoom) => {
    const xTile = Math.floor((x + 180) / 360 * (1<<zoom));
    return xTile;
};

export const latToYTile = (y, zoom) => {
    const yTile = Math.floor((1 - Math.log(Math.tan(y.toRad()) + 1 / Math.cos(y.toRad())) / Math.PI) / 2 * (1<<zoom));
    return yTile;
};