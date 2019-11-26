import { setPublicPath } from 'systemjs-webpack-interop'

if(process.env.NODE_ENV!=='development'){
    setPublicPath('app2',2)
}
