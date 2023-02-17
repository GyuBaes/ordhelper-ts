import { cloneDeep } from 'lodash';
import { Material, Unit } from './types/Unit';

export const getSumCombinaionQty = (arr: Unit) => {
  if (arr.lowestMaterial)
    return arr.lowestMaterial.reduce((acc, cur) => {
      return (acc += cur.qty);
    }, 0);

  if (arr.material)
    return arr.material.reduce((acc, cur) => {
      return (acc += cur.qty);
    }, 0);
};

export const getHaveUnitList = <T extends Unit[], U extends Unit>(
  curUnitList: T,
  curUnit: U,
) => {
  const copyUnitList = cloneDeep(curUnitList);
  const combiUnitQueue = cloneDeep(curUnit.material);
  let unit: Material | undefined;
  const result: Material[] = [];

  const recursive = (queue: Material[]) => {
    if (!queue.length) return;
    unit = queue.shift();
    // 만약 다 가지고 있다면
    if (copyUnitList[unit?.index as number].qty >= (unit?.qty as number)) {
      result.push(unit as Material);
      copyUnitList[unit?.index as number].qty -= unit?.qty as number;
    }

    // 0개는 아니며 필요 개수보다 작다면
    if (
      copyUnitList[unit?.index as number].qty !== 0 &&
      copyUnitList[unit?.index as number].qty < (unit?.qty as number)
    ) {
      [(unit as Material).qty, copyUnitList[unit?.index as number].qty] = [
        copyUnitList[unit?.index as number].qty,
        (unit as Material).qty,
      ];
      result.push(unit as Material);
      copyUnitList[unit?.index as number].qty -= (unit as Material).qty;

      for (let i = 0; i < copyUnitList[unit?.index as number].qty; i++) {
        copyUnitList[unit?.index as number].material?.forEach(el => {
          if (el.name !== '위습') queue.push(el);
        });
      }
      copyUnitList[unit?.index as number].qty -=
        copyUnitList[unit?.index as number].qty;
    }

    // 0개라면
    if (copyUnitList[unit?.index as number].qty === 0) {
      for (let i = 0; i < (unit as Material).qty; i++) {
        copyUnitList[unit?.index as number].material?.forEach(el => {
          if (el.name !== '위습') queue.push(el);
        });
      }
    }

    recursive(queue);
  };
  recursive(combiUnitQueue as Material[]);
  return result;
};
