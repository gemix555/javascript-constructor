 import {row, col} from './utils'

function title(block) {
    const {tag, styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), styles)
 }

 function text(block) {
    const {tag, styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

 function textColumns(block) {
    const {styles} = block.options
    const html = block.value.map(item => col(item))
    return row(html.join(''), styles)
}

function image(block) {
    const {tag, styles, alt, imageStyles} = block.options
    return row(`<${tag} src="${block.value}" alt="${alt}" styles="${imageStyles}">`, styles)
}

export const templates = {title, text, textColumns, image}
