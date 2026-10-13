class Polygon {
    constructor(height, width) {
        this.area = height * width;
    }
    get area() {
        return this._area;
    }
    set area(value) {
        if (value < 0) {
            throw new Error('面积不能为负数');
        }
        this._area = value;
    }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
