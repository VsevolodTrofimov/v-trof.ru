### Scaling Up
Если надо увеличивать элемент, то лучше сразу сделать элемент финального размера и поставить ему в начале анимации `transform: scale($startSize / $finalSize)` — это позолит сохранить контур четким (пример на Sass для удобочитаемости)  (да, это — частный случай [FLIP](https://aerotwist.com/blog/flip-your-animations/)
 

### Event, what event?
Многие `mousevent` игнорируются при смене окон и во время выделения текста

### Not yet absolute
До того, как элемент получит расстояние до одного из направлений, `postition: absolute` (и `fixed`) не выдеренет его из layout.

### RTL
`direction: rtl` заставляет `.getBoundingClientRect` видеть мир в несколько иных красках