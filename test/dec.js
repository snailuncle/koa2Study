class Boy {
  @speak
  run () {
    console.log('i can run')
  }
}
function speak (target) {
  console.log(target)
}

const john=new Boy()
console.log(john)
john.run()
