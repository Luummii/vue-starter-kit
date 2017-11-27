module.exports = {
  apps: [{
    name: 'vue-starter-kit',
    script: './server/index.js',
    watch: true,
    instances: 'max',
    exec_mode : 'cluster', // eslint-disable-line
    env: {
      PORT: 5000,
      NODE_ENV: 'development'
    },
    // If start in production, then need change url connect in database (./db/connect.js)
    env_production: { // eslint-disable-line
      PORT: 5000,
      NODE_ENV: 'production'
    },
    node_args: '--harmony' // eslint-disable-line
  }]
}
