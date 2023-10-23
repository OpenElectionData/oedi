import { defineConfig } from "tinacms";
import { academy_templateFields } from "./templates";
import { guideFields } from "./templates";
import { inventory_countryFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "dist",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Academy",
        name: "academy",
        path: "_academy",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...academy_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Inventory",
        name: "inventory",
        path: "_inventory",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...inventory_countryFields(),
        ],
      },
      {
        format: "md",
        label: "Guide",
        name: "guide",
        path: "_guide",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...guideFields(),
        ],
      },
    ],
  },
});
