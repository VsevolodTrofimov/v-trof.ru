### Pull-Put
Я провел исследование и выяснил, что большая часть нашей ЦА (да и вообще большая часть пользователей ПК) избегает Dran'n'Drop, потому мы заменили его на pull-put (понятнее всего будет пощупать в [демо Pileus](https://pileus.v-trof.ru), например, в редакторе тестов)
 

### Loads
Ситуация: есть серверный рендеринг, есть необходимость рендерить компоненты на клиенте \ использовать на клиенте серверные переменные.

Решение:
В директориях компонентов может быть создан `loads.json` в котором перечислены серверные шаблоны\переменные, которые использует компонент

На этапе сборки они явно вставляются в объект window.loads

Скрипты на клиенте читают из loads