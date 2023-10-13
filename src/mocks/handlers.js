import { rest } from "msw";
import { products, nodes } from './data'

const assets = [
  {
    "id": 1,
    "name": "장비 1",
    "assetProduct": products[0],
    "nodes": [
      nodes[0],
      nodes[1],
    ],
  },
  {
    "id": 2,
    "name": "장비 2",
    "assetProduct": products[1],
    "nodes": [
      nodes[2],
    ],
  },
  {
    "id": 3,
    "name": "장비 3",
    "assetProduct": products[2],
    "nodes": [
      nodes[3],
    ],
  },
];

export const handlers = [
  rest.get("/assets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(assets));
  }),

  rest.post("/assets", (req, res, ctx) => {
    assets.push({id: assets.length + 1, ...req.body});

    return res(ctx.status(201));
  }),

  rest.put("/assets/:id", (req, res, ctx) => {
    const id = req.params?.id;
    
    if (id) {
      assets[id] = req.body;
      
      return res(ctx.status(201));
    }

    return res(ctx.status(400));
  }),

  rest.delete("/assets/:id", (req, res, ctx) => {
    const id = req.params?.id;
    
    if (id) {
      assets.splice(id, 1);
    }

    return res(ctx.status(400));
  }),

  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  rest.get("/nodes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nodes));
  }),
];
