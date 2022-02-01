export function Injectable() {
  return function (target: any) {};
}

export interface Type<T = any> extends Function {
  new (...args: any[]): T;
}

export const PARAMTYPES_METADATA = "design:paramtypes";
export const SELF_DECLARED_DEPS_METADATA = "self:paramtypes";
