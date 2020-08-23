import {col, row} from "../utils";

 class Block {
    constructor( value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {tag = 'h2', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }

}

export class TextBlock extends Block {
    constructor (value, options) {
        super( value, options)
    }

    toHTML() {
        const {tag = 'p', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ImageBlock extends Block{
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {tag, styles, alt, imageStyles} = this.options
        return row(`<${tag} src="${this.value}" alt="${alt}" style="${imageStyles}">`, styles)
    }
}

export class TextColumnsBlock extends Block{
    constructor(value, options) {
        super( value, options);
    }

    toHTML() {
        const {styles} = this.options
        const html = this.value.map(item => col(item))
        return row(html.join(''), styles)
    }
}
