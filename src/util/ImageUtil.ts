type BasicImageType = "info" | "ban" | "unknownBan";

class ImageUtil {
    private imageMap: {[key: string]: string};

    constructor() {
        this.imageMap = {};
    }

    getImage(img: BasicImageType): string {
        if(img in this.imageMap) {
            return this.imageMap[img];
        }
        const loadImage = require(`../../public/${img}.png`);
        this.imageMap[img] = loadImage;
        return loadImage;
    }

    getChampionImage(champ: string, patch: string = "12.17.1"): string {
        return `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ}.png`;
    }
}

const _instance = new ImageUtil();
export { _instance as ImageUtil };
