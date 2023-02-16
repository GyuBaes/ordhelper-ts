export type Unit = {
  name: string;
  qty: number;
  grade: string;
  urn: string;
  dpname: string;
  description?: string;
  combiDescription?: string;
  attack?: 'ap' | 'ad';
  material?: Material[];
  lowestMaterial?: Material[];
  decreaseSpeed?: number;
  onOffDecreaseSpeed?: number;
  decreaseDefense?: number;
  onOffDecreaseDefense?: number;
  stun?: number;
  singleStun?: '단일스턴';
  boss?: '보잡' | '광잡' | '광보잡';
  burgess?: boolean;
  armorBreak?: boolean;
  cautionAura?: boolean;
  single?: number;
};

type Material = {
  name: string;
  qty: number;
  urn: string;
  dpname: string;
  index?: number;
};
