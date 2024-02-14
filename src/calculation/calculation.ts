export const calculation = (a: number, b: number): number => {
  return a + b
}

export const searchObject = (obj: any, callback: (value: any) => boolean): any => {
  const result: any = {}
  const search = (obj: any, path: string) => {
    for (const key in obj) {
      const value = obj[key]
      if (callback(value)) {
        result[`${path}.${key}`] = value
      }
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            search(item, `${path}.${key}[${index}]`)
          })
        } else {
          search(value, `${path}.${key}`)
        }
      }
    }
  }
  search(obj, 'object')
  return result
}

export const inOrder = (arr: any, order: string): any => {
  if (Array.isArray(arr) == true) {
    if (order == "ASC") {
      return arr.sort((a: any, b: any) => (a < b ? -1 : 1));
    } else {
      return arr.sort((a: any, b: any) => (a > b ? -1 : 1));
    }
  } else {
    const sortedValues = Object.values(arr).sort((a: any, b: any) => {
      if (order === 'ASC') {
        return a - b;
      } else if (order === 'DESC') {
        return b - a;
      } else {
        throw new Error('Invalid order. Please use "ASC" or "DESC".');
      }
    });

    const sortedObject: any = {};
    Object.keys(arr).forEach((key, index) => {
      sortedObject[key] = sortedValues[index];
    });

    return sortedObject;
  }
}