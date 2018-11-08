const Router=require('koa-router')
const mongoose=require('mongoose')
const router=new Router()

@controller('/api/v0/movies')
export class movieController {
  @get('/')
  @login
  @admin(['developer'])
  @log
  async getMovies (ctx,next){
    const Movie=mongoose.model('Movie')
    const movies=await Movie.find({}).sort({
      'meta.createAt':-1
    })

    ctx.body={
      movies
    }
  }


  // @post
  // @required({body: ['username','doubanId']})

  @get('/:id')
  async getMovieDetail (ctx,next){
    const Movie=mongoose.model('Movie')
    const id=ctx.params.id
    const movie=await Movie.findOne({_id:id})

    ctx.body={
      movie
    }
  }
}

module.exports=router
