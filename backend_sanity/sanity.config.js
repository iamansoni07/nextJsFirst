import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'   // Import schema types from index.js

export default defineConfig({
  name: 'default',                            // Name of your Sanity project
  title: 'myPortfolio',                       // Title displayed in the Studio

  projectId: '880xilh7',                      // Replace with your Sanity project ID
  dataset: 'production',                      // The dataset you're using (default: 'production')

  plugins: [structureTool(), visionTool()],   // Enable the desk tool for content management

  schema: {
    types: schemaTypes,                       // Pass your schema types here
  },
})
