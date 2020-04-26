function evento(msg) {
   const EventEmitter = require('events')
   const emitter = new EventEmitter()
   const fs = require('fs')   
   const path = require('path')

   emitter.on('log', (message) => {
      fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
         if (err) throw err
      })
   })

   emitter.emit('log', msg)
}

function memoria() {
   const os = require('os')
   setInterval(() => {
      const { freemem, totalmem } = os

      const free = parseInt(freemem() / 1024 / 1024)
      const total = parseInt(totalmem() / 1024 / 1024)
      const usage = parseInt((free / total) * 100)

      const stats = {
         free: `${free}MB`,
         total: `${total}MB`,
         usage: `${usage}%`,
      }
      console.clear();
      console.log(" === PC STATS === ")
      console.table(stats)
      evento(`${JSON.stringify(stats)}\n`)
   }, 1000)
}
memoria()
