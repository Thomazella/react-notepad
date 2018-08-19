let id = -1;
const getUniqueId = prefix => {
  id += 1;
  return prefix ? `${prefix}${id}` : id;
};

export default getUniqueId;
