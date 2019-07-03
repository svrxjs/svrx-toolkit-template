module.exports = {
  // define props
  configSchema: {},
  // insert scripts or styles
  assets: {
    script: [],
    style: []
  },
  services: {},
  hooks: {
    async onCreate({ io, config, events, logger }) {
      // onCreate
      return () => {
        // onDestory
      }
    },
    async onRoute(ctx, next, { config }) {
        await next();
    }
  }
};