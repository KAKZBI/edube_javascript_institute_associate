// write your code here
let Point = class{
    type = 'point';
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
let Line = class{
    type = 'line';
    constructor(args){
        let mapArray = [...args];
        this.points = [];
        mapArray.forEach((arr) => {
            let aPoint = new Point(arr[0], arr[1]);
            this.points.push(aPoint);
        });
    }
}
let Figure = class{
    elements = {points:[], lines:[]};
    addPoint(x,y){
        let aPoint = new Point(x,y);
        this.elements.points.push({...aPoint})
    }
    addLine(args){
        let aLine = new Line(args);
        this.elements.lines.push(aLine);
    }
    toJSON(){
        return JSON.stringify(this.elements);
    }
    fromJSON(args, toReplace=false){
        let newElements = JSON.parse(args);
        if (toReplace){
            this.elements.points = newElements.points;
            this.elements.lines = (newElements.lines);
        }else{
            // console.log(this.elements.points);
        this.elements.points = this.elements.points.concat(newElements.points);
        // console.log(newElements);
        this.elements.lines = this.elements.lines.concat(newElements.lines);
        }
    }
    deleteAll(){
        for(let i=0; i<this.elements.points.length;++i){
            delete this.elements.points[i];
        }
        for(let i=0; i<this.elements.lines.length;++i){
            delete this.elements.lines[i];
        }
    }
} 

let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
