import { rest } from "msw";
import { products, nodes } from './data'

let assets = Array.from(Array(7), (_, i) => ({
  "id": i + 1,
  "name": `장비 ${i + 1}`,
  "assetProduct": products[i],
  "nodes": i % 3 === 0 ? [nodes[i]] : i % 3 === 1 ? [nodes[i], nodes[i + 1]] : [],
}));

export const handlers = [
  rest.get("/assets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(assets));
  }),

  rest.get("/assets/:id", (req, res, ctx) => {
    const id = req.params?.id;

    if (!id) {
      return res(ctx.status(400));
    }

    const asset = assets.find(asset => asset.id === Number(id));

    if (!asset) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.json(asset));
  }),

  rest.post("/assets", (req, res, ctx) => {
    if (!req.body?.name) {
      return res(ctx.status(400), ctx.json({ messgae: "name is required" }));
    }

    if (!req.body?.assetProduct) {
      return res(ctx.status(400), ctx.json({ messgae: "product is required" }));
    }

    if (!req.body?.nodes) {
      return res(ctx.status(400), ctx.json({ messgae: "nodes is required" }));
    }

    assets.push({ id: assets.length + 1, ...req.body });

    return res(ctx.status(201));
  }),

  rest.put("/assets/:id", (req, res, ctx) => {
    const id = req.params?.id;

    if (!id) {
      return res(ctx.status(400));
    }

    if (!req.body?.name) {
      return res(ctx.status(400), ctx.json({ messgae: "name is required" }));
    }

    if (!req.body?.assetProduct) {
      return res(ctx.status(400), ctx.json({ messgae: "product is required" }));
    }

    if (!req.body?.nodes) {
      return res(ctx.status(400), ctx.json({ messgae: "nodes is required" }));
    }

    assets = assets.map((asset) => {
      if (asset.id === Number(id)) {
        return {
          id: Number(id),
          ...req.body
        };
      }

      return asset;
    });

    return res(ctx.status(200));
  }),

  rest.delete("/assets/:id", (req, res, ctx) => {
    const id = req.params?.id;

    if (!id) {
      return res(ctx.status(400));
    }

    assets = assets.filter((asset) => asset.id !== Number(id));

    return res(ctx.status(200));
  }),

  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  rest.get("/nodes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(nodes));
  }),
];
