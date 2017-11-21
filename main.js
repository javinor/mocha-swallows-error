"use strict"

process.on('unhandledRejection', () => {
    console.log('this happens before AFTER')
    throw new Error('tsk, tsk, tsk...')
})

describe('errors thrown in event handler', function () {
    it('should let me know something went wrong', function (done) {
        new Promise((res, rej) => {
            setTimeout(() => {
                Promise.reject() 
                res()
                done()
            }, 1000)
        })
    })
    after(() => console.log('In AFTER: Should not get here?'))
})
