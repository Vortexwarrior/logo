class shape{
    constructor(){
        this.color='';
    }
    setcolor(color) {
        this.color = color;
    }
};

class circle extends shape {
    render(){
        return `<circle cx="150" cy="100" r="80" style="fill:${this.color}" />`
    }
};

class square extends shape {
    render(){
        return `<rect x="50" width="200" height="200" style='fill:${this.color}' />`
    }
};

class triangle extends shape {
    render(){
        return `<polygon height='100%' width='100%' points="0,200 300,200 150,0" style="fill:${this.color}" />
        `
    }
};

module.exports = {circle, square, triangle}