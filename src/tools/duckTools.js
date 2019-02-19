class Duck {
    constructor(type) {
        this.type = type;
        this.image = this.getImage(type);
    }

    getImage(type) {
        return require(`../images/ducks/${type}.png`);
    }
}

export const ducks = {
    canvasback:new Duck("canvasback"),
    gadwall:new Duck("gadwall"),
    "lesser scaup":new Duck("lesser scaup"),
    mallard:new Duck("mallard"),
    redhead:new Duck("redhead")
};