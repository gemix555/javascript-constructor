import image from './assets/img/test.png'
import {TitleBlock, TextBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css} from "./utils";

export const model = [

        new TitleBlock('Конструктор JS',{tag: 'h2',styles: 'background: yellow; color: black;'}),
        new TextBlock('Семантический анализ текста Адвего для SEO онлайн ',{
            tag: 'p',
            styles: css({background: 'grey', color: 'white'})
        }),
        new TextColumnsBlock([
            ' профессиональный инструмент для оценки качества текстов',
            'seo оптимизации статей и поиска ключевых слов в тексте. ',
            'Проверьте количество символов, тошноту и водность',
            'плотность ключевых слов и фраз онлайн, семантическое ядро текста бесплатно!'
        ],{
            styles: css({'padding-right': '1rem'})}),
        new ImageBlock(image,{
            tag: 'img',
            alt: 'Photo',
            imageStyles: 'width:200px; height:auto',
            styles: css({padding: '2rem 0', display: 'flex','justify-content': 'center'})
        })

]
