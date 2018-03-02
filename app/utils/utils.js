export function getTarget(target) {
  if (typeof target === 'string' && document) {
    let selection = document.querySelector(target);
    if (selection === null) {
      selection = document.querySelector(`#${target}`);
      throw new Error(`The target '${target}' couldn't be identified.`);
    }
    return selection;
  }
  return target;
}
