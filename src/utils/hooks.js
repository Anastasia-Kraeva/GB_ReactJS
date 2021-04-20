  
import { useEffect, useRef } from "react";

export function usePrev(value) {
  //  Объект ref - это универсальный контейнер, текущее свойство которого является изменяемым ...
  // ... и может содержать любое значение, аналогичное свойству экземпляра класса
  const ref = useRef();

  // Сохранить текущее значение в ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // только при изменении значения

  // Возвращает предыдущее значение (происходит до обновления в использовании Эффекта выше)
  return ref.current;
}