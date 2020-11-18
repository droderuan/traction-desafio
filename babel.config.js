module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node:'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        alias: {
          "@modules": "./src/modules",
          "@errors": "./src/errors",
          "@config": "./src/config",
          "@services": "./src/services"
        }
      }
    ]
  ]
}
