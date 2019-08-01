let views = require('../Http/renderController')

const Mail = use('Mail')
'use strict'

class UserController {


  async store ({ request,view }) {
    const data = request.only(['name', 'email', 'message'])
    await Mail.send('welcome',data,(message) => {
     message
       .to("tgeorgesdev@gmail.com")
       .from(data.email)
       .subject(`New message from ${data.name}`)
   })

   return view.render('message')
}
}

module.exports = UserController
