### Pathfinders
Вероятнее всего, покопавшись в исходниках (в документации ничего про это нет, но `resolver` тоже наследует от `tapable`, а значит может эммитить события) я смогу найти способ подписаться на события `resolver` или соответствующее событие `compilation` и значительно улучшить произваодительность + убрать небходимость добавлять синтаксисы вручную