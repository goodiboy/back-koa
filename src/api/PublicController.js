import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = new svgCaptcha.create({})
    ctx.body = {
        code:200,
        data:newCaptcha.data
    }
  }
}

export default new PublicController()
