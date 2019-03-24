module.exports = {
  stat: {
    require: ['mid'],
    get: async ({ mid, parse }) => parse(`https://api.bilibili.com/x/relation/stat?vmid=${await mid}`)
  },
  info: {
    require: ['mid'],
    get: async ({ mid, parse }) => parse(`https://api.bilibili.com/x/space/acc/info?mid=${await mid}`)
  }
}
