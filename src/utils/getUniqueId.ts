let id = 0;
const getUniqueId = (prefix: string) => `${prefix}-${id++}`;

export default getUniqueId;
