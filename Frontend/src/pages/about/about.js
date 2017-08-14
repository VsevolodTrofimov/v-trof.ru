import { h, Component } from 'preact'

import Card from '@components/card~'
import Space from '@components/space~'
import MainBlock from '@components/mainBlock~'

import styles from './about.sass'

export default function About () {
    return (
        <div>
        <div class={styles.photoRow}>
            <Card>
                <img src='/static/me-smaller.png' class={styles.photo} />
            </Card>
            <Card class={styles.photoText}>
                <h2> Всеволод Трофимов </h2>
                Официально — студент СПбГУ. <br /><br /> 
                На деле — Frontend разработчик, интересующийся UX дизайном, 
                визуализацией данных, perception hacking и&nbsp;функциональным программированием и. Свободно говорит по-английски. <br /><br />
                Предпочитаю, но не ограничиваюсь ES6+, preact, redux, webpack, flexbox. 
            </Card>
        </div>
        <Space top='m'>
            <Card>
                <h2> История </h2>

                <Space top='m' />
                <MainBlock>
                   Первый раз сверстал страницу с нуля в 11 лет, потом занимался дичью вроде крестиков-ноликов на frameset
                </MainBlock>
                
                <Space top='l' />
                <MainBlock>
                   Много работал с пресс клубом. Когда я пришел в него в 2013 — школьная газета. <br />
                   За 2 года мы выросли до объединения, к которому сразу обращалась областная газета, 
                   когда событий становилось больше, чем они могли осветить 
                   (в т.ч. передавая нам право на посещение закрытых мероприятий). <br />
                   Через нас публиковались студенты журфака. <br /> 
                   Начали снимать видео новости и выиграли бессчетное количество конкурсов (в т.ч. международных)
                    <br /><br />
                   Сначала я поддерживал сайт, потом спроектировал, разработал(PHP, MySQL, JS) и поддерживал
                   <a href='/static/eps.png' target='_blank'> редакционно издательскую систему</a>
                    <br />
                   Между тем, разок верстал номер газеты, монтажировал видео, делал полиграфический дизайн (брошюры, визитки).
                </MainBlock>

                <Space top='l' />
                <MainBlock>
                    Около 1.5 лет работал над <a href='/project/pileus'>Pileus</a>
                </MainBlock>

                <Space top='l' />
                <MainBlock>
                    Open Source и наверстывание текущей ситуации в фронтенде <br />
                    <a href='/project/ripple-js'> Ripple.js</a> <br />
                    <a href='/project/artistlib'> Artistlib</a> <br />
                    <a href='/project/u-a-l'> universal-alias-loader</a> <br />
                    <a href='/project/precise-copy'> precise-copy</a> <br />
                </MainBlock>
                

                <Space top='l' />
                <MainBlock>
                    С середины июля 2017 занимаюсь фрилансом<br />
                    Чинил мобильную версию на <a href='https://a-mtk.ru'> a-mtk.ru</a> <br />
                    Разрабатывал за неделю <a href='https://9471479.ru/'> https://9471479.ru/ </a><br />
                    Клиет обуславливал срочность необходимостью использовать долгоработающие методы SEO, почему контента все еще нет — неясно
                </MainBlock>
                
            </Card>
        </Space>
        </div>
    )
}