import image from './assets/img/test.png'
import {TitleBloc, TextBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'

export const model = [

        new TitleBloc('Конструктор JS',{tag: 'h2',styles: 'background: yellow; color: black;'}),
        new TextBlock('Семантический анализ текста Адвего для SEO онлайн ',{
            tag: 'p',
            styles: 'background: grey; color: white;'
        }),
        new TextColumnsBlock([
            ' профессиональный инструмент для оценки качества текстов',
            'seo оптимизации статей и поиска ключевых слов в тексте. ',
            'Проверьте количество символов, тошноту и водность',
            'плотность ключевых слов и фраз онлайн, семантическое ядро текста бесплатно!'
        ],{styles: 'padding: 1rem;'}),
        new ImageBlock(image,{
            tag: 'img',
            alt: 'Photo',
            imageStyles: 'width: 500px; height: auto',
            styles: 'padding: 2rem 0; display: flex;justify-content:center;'
        })

]
