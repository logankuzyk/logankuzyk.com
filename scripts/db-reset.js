#!/usr/bin/env node

import { execSync } from 'child_process'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log('WARNING: This will DELETE all database data.')
console.log('This action cannot be undone.\n')

rl.question('Type YES to confirm: ', (answer) => {
  if (answer === 'YES') {
    try {
      console.log('\nStopping and removing database container with volumes...')
      execSync(
        'docker-compose --env-file .env.development -f docker-compose.yml -f docker-compose.dev.yml down -v',
        { stdio: 'inherit' },
      )

      console.log('\nStarting fresh database container...')
      execSync(
        'docker-compose --env-file .env.development -f docker-compose.yml -f docker-compose.dev.yml up -d',
        { stdio: 'inherit' },
      )

      console.log('\nDatabase reset complete!')
    } catch (error) {
      console.error('\nError resetting database:', error.message)
      process.exit(1)
    }
  } else {
    console.log('\nReset cancelled.')
  }

  rl.close()
})
