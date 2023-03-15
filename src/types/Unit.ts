export type Unit = {
  name: string;
  qty: number;
  grade:
    | 'common'
    | 'uncommon'
    | 'unique'
    | 'rare'
    | 'legendary'
    | 'hidden'
    | 'changed'
    | 'transcendence'
    | 'immortal'
    | 'eternity'
    | 'limited'
    | 'randomltd';
  urn: string;
  dpname: string;
  combiDescription?: string;
  attack?: 'ap' | 'ad';
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
  index: number;
  material?: Material[];
  lowestMaterial?: LowestMaterial[];
};

export type Material = {
  name: string;
  qty: number;
  urn: string;
  dpname: string;
  index: number;
};

export type LowestMaterial = {
  name: string;
  qty: number;
  urn: string;
  dpname: string;
};

export type Temp = {
  name: string;
  qty: number;
};
