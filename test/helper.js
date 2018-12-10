import defaults from 'superagent-defaults'
import supertest from 'supertest'
import chai from 'chai'
import chaiSubset from 'chai-subset'
import es from '../app'

chai.use(chaiSubset)

global.app = es.express
global.expect = chai.expect

global.request = defaults(supertest(global.app))
