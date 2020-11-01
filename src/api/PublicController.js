import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor () {
  }

  async getCaptcha (ctx) {
    const newCaptcha = new svgCaptcha.create({
      size: 4, // 数量
      ignoreChars: '0oil', // 排除某些字符
      color: true, // 使用颜色
      noise: Math.floor((Math.random() * 5)),  // 线条的数量
      width: 150, // 宽度
      height: 38 // 高度
    })
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new PublicController()
