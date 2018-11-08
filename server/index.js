// localhost:4455
const Koa=require('koa')
const views=require('koa-views')
const { resolve }=require('path')
const router=require('./routes')

const app=new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())


app.use(views(resolve(__dirname,'./views'),{
  extension:'pug'
}))

app.use(async(ctx,next)=>{
  await ctx.render('index',{
    you:'王英',
    me:'阿杜'
  })
})
app.listen(2333)


