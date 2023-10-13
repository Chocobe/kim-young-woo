export const products = Array.from(Array(9), (_, i) => ({
  "id": i + 1,
  "name": `장비 정보 ${i + 1}`,
  "properties": {
    "no": `asset product ${i + 1}`
  },
  "description": "",
}));

export const nodes = Array.from(Array(17), (_, i) => ({
  "id": i + 1,
  "name": `센서 ${i + 1}`,
  "serialNo": `serial no. ${i + 1}`,
}));
