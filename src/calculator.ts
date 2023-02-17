import { Material, Unit } from './types/unit';

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
