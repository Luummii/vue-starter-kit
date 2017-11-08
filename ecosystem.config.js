module.exports = {
  apps : [{
    name        : "vue-starter-kit",
    script      : "./server/index.js",
    watch       : true,
    instances  : 4,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    },
    node_args: "--harmony"
  }]
}