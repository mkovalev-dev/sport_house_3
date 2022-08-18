/**
 * Очищает все параметры с null или undefined
 */
export default function filterSearchParams(params) {
  if (params) {
    let newParams = {};
    newParams = {};
    Object.keys(params).forEach((key) => {
      if (
        !(
          params[key] === undefined ||
          params[key] === null ||
          params[key] === []
        )
      ) {
        newParams[key] = params[key];
      }
    });
    return newParams;
  }
  return {};
}
