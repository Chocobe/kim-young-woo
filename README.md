# MRX-ray client

### API

```javascript

GET /assets

response {
   id: number;
   name: string;
   assetProduct: {
      id: number;
      name: string;
      properties: Record<string, string | number>;
      description: string;
   };
   nodes: {
      id: number;
      name: string;
      serialNo: string;
   }[];
}[]

```

```javascript

GET /assets/assetId

response {
   id: number;
   name: string;
   assetProduct: {
      id: number;
      name: string;
      properties: Record<string, string | number>;
      description: string;
   };
   nodes: {
      id: number;
      name: string;
      serialNo: string;
   }[];
}

```

```javascript

POST /assets

body {
   id: number;
   * name: string;
   * assetProduct: {
      id: number;
      name: string;
      properties: Record<string, string | number>;
      description: string;
   };
   * nodes: {
      id: number;
      name: string;
      serialNo: string;
   }[];
}

```

```javascript

PUT /assets/:assetId

body {
   * id: number;
   * name: string;
   * assetProduct: {
      id: number;
      name: string;
      properties: Record<string, string | number>;
      description: string;
   };
   * nodes: {
      id: number;
      name: string;
      serialNo: string;
   }[];
}

```

```javascript

DELETE /assets/:assetId

```

```javascript

GET /products

response {
   id: number;
   name: string;
   properties: Record<string, string | number>;
   description: string;
}[]

```

```javascript

GET /nodes

response {
   id: number;
   name: string;
   serialNo: string;
}[]

```
