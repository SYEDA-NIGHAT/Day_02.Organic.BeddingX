/**
 * Sanity Studio Configuration
 * This configures the embedded Sanity Studio at `/studio`
 */

import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { apiVersion, dataset, projectId } from '../env';
import { schema } from '.';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion, // Use API version from env file
  title: 'Organic Beddings CMS',
  schema,
  plugins: [
    deskTool(), // Enables the main Studio UI
    visionTool({ defaultApiVersion: apiVersion }), // Enables GROQ queries
  ],
});
