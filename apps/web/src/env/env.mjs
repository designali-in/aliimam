
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'


/* c8 ignore start */
export const env = createEnv({
  
  skipValidation: process.env.CI === 'true' || process.env.NODE_ENV === 'test',
  
  server: {
    
  },
  runtimeEnv: {
    
  }
})
/* c8 ignore stop */