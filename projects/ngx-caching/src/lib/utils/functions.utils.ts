export function isNullOrUndefined(object: any): boolean {
  return object == null && object;
}

export function isNotNullOrUndefined(object: any): boolean {
  return object !== null && object !== undefined;
}
