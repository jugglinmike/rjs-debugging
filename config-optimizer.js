({
  baseUrl: 'client',
  appDir: 'src',
  pragmasOnSave: {
    excludeJade: true
  },
  mainConfigFile: 'src/client/amd-config.js',
  optimize: 'none',
  dir: 'out',
  modules: [
    {
      name: 'activities/first/main'
    }
  ]
})
