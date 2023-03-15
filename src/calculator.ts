import { cloneDeep } from 'lodash';
import { LowestMaterial, Material, Unit, Temp } from './types/Unit';

export const getSumCombinaionQty = (arr: Unit) => {
  if (arr.lowestMaterial)
    return arr.lowestMaterial.reduce((acc, cur) => {
      return (acc += cur.qty);
    }, 0);

  if (arr.material)
    return arr.material.reduce((acc, cur) => {
      return (acc += cur.qty);
    }, 0);

  return 0;
};

export const getHaveUnitList = <T extends Unit[], U extends Unit>(
  curUnitList: T,
  curUnit: U,
) => {
  const unitList = cloneDeep(curUnitList);
  const combiUnitQueue = cloneDeep(curUnit.material);
  let unit: Material | undefined;
  const result: Material[] = [];

  const recursive = (queue: Material[]) => {
    if (!queue?.length) return;

    unit = queue.shift();
    // 0개라면
    if (unitList[unit?.index as number].qty === 0) {
      for (let i = 0; i < (unit as Material).qty; i++) {
        unitList[unit?.index as number].material?.forEach(el => {
          if (el.name !== '위습') queue.push(el);
          else result.push(el);
        });
      }
    }

    // 0개는 아니며 필요 개수보다 작다면
    if (
      unitList[unit?.index as number].qty !== 0 &&
      unitList[unit?.index as number].qty < (unit?.qty as number)
    ) {
      result.push(cloneDeep(unitList[unit?.index as number]));

      (unit as Material).qty -= unitList[unit?.index as number].qty;

      for (let i = 0; i < (unit as Material).qty; i++) {
        unitList[unit?.index as number].material?.forEach(el => {
          if (el.name !== '위습') queue.push(el);
        });
        unitList[unit?.index as number].qty -=
          unitList[unit?.index as number].qty;
      }
    }

    // 만약 다 가지고 있다면
    if (unitList[unit?.index as number].qty >= (unit?.qty as number)) {
      result.push(unit as Material);
      unitList[unit?.index as number].qty -= unit?.qty as number;
    }

    recursive(queue);
  };

  recursive(combiUnitQueue as Material[]);
  return result;
};

export const getPercent = <T extends Unit[], U extends Unit>(
  curUnitList: T,
  curUnit: U,
) => {
  const haveUnitList = getHaveUnitList(curUnitList, curUnit);
  const sumQty = getSumCombinaionQty(curUnit);
  let haveUnitQty = 0;
  let percent = 0;

  haveUnitList.forEach(el => {
    if (el.dpname.includes('-흔함')) haveUnitQty += el.qty;
    else haveUnitQty += el.qty * getSumCombinaionQty(curUnitList[el.index]);
  });
  haveUnitQty += curUnitList[0].qty;
  percent = (haveUnitQty / sumQty) * 100;
  return percent;
};

export const getLessUnit = <T extends Unit[], U extends Unit>(
  curUnitList: T,
  curUnit: U,
) => {
  const lowestMaterial = curUnit.lowestMaterial
    ? cloneDeep(curUnit.lowestMaterial)
    : cloneDeep(curUnit.material);
  const haveUnitList = getHaveUnitList(curUnitList, curUnit);
  let haveUnitListToLowestUnit: LowestMaterial[] = [];
  let appendUnitList: Temp[] = [];
  const temp = new Map<string, number>();

  haveUnitList.forEach(el => {
    if (curUnitList[el.index].grade !== 'common') {
      if (curUnitList[el.index].lowestMaterial) {
        haveUnitListToLowestUnit = [
          ...haveUnitListToLowestUnit,
          ...curUnitList[el.index].lowestMaterial!,
        ];
      }
      if (!curUnitList[el.index].lowestMaterial) {
        haveUnitListToLowestUnit = [
          ...haveUnitListToLowestUnit,
          ...curUnitList[el.index].material!,
        ];
      }
    } else {
      haveUnitListToLowestUnit.push(el);
    }
  });
  if (!haveUnitListToLowestUnit.length) return lowestMaterial;
  for (const { name, qty } of haveUnitListToLowestUnit) {
    temp.set(name, (temp.get(name) || 0) + qty);
  }
  appendUnitList = [...temp].map(([name, qty]) => ({ name, qty }));

  for (const unit of lowestMaterial as LowestMaterial[]) {
    for (const appendUnit of appendUnitList as Temp[]) {
      if (unit.name === appendUnit.name) {
        if (unit.qty <= appendUnit.qty) {
          unit.qty -= unit.qty;
        }
        if (unit.qty > appendUnit.qty) {
          unit.qty -= appendUnit.qty;
        }
      }
    }
  }

  return lowestMaterial;
};

export const setCombinationUnit = <T extends Unit[], U extends Unit>(
  curUnitList: T,
  curUnit: U,
) => {
  const combiUnitQueue = cloneDeep(curUnit.material);
  const sumQtyValue = getSumCombinaionQty(curUnit);
  let tempValue = 0;
  let unit: Material | undefined;

  const recursive = (queue: Material[]) => {
    if (!queue.length) return;
    unit = queue.shift();
    if (typeof unit?.index === 'number') {
      // 0개라면
      if (curUnitList[unit?.index].qty === 0) {
        for (let i = 0; i < (unit as Material).qty; i++) {
          curUnitList[unit?.index].material?.forEach(el => {
            queue.push(el);
          });
        }
      }

      // 0개는 아니며 필요 개수보다 작다면
      if (
        curUnitList[unit?.index].qty !== 0 &&
        curUnitList[unit?.index].qty < unit?.qty
      ) {
        (unit as Material).qty -= curUnitList[unit?.index].qty;
        curUnitList[unit?.index].qty -= curUnitList[unit?.index].qty;
        tempValue += unit.qty * getSumCombinaionQty(curUnitList[unit.index]);

        for (let i = 0; i < (unit as Material).qty; i++) {
          curUnitList[unit?.index].material?.forEach(el => {
            queue.push(el);
          });
        }
      }

      // 만약 다 가지고 있다면
      if (curUnitList[unit?.index].qty >= unit?.qty) {
        curUnitList[unit?.index].qty -= unit?.qty;
        tempValue += unit.qty * getSumCombinaionQty(curUnitList[unit.index]);
      }
    }
    if (tempValue === sumQtyValue) return;
    else recursive(queue);
  };

  recursive(combiUnitQueue as Material[]);

  curUnitList[curUnit.index].qty += 1;
  return curUnitList;
};
