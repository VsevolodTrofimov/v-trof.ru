### Scaling Up
Если надо увеличивать элемент, то лучше сразу сделать элемент финального размера, посавить ему в начале анимации `transform: scale($startSize/$finalSize)`, это позолит сохранить контур четким (да, это частный случай [FLIP](https://aerotwist.com/blog/flip-your-animations/)
(пример на Sass для удобочитаемости)  

### Event, what event?
Многие mousevent`ы игнорируются при смене окон и во время выделения текста

### Not yet absolute
До того, как элемент получит расстояние до одного из направлений 

### RTL
direction: rtl заставляет `.getBoundingClientRect` видеть мир в несколько иных красках