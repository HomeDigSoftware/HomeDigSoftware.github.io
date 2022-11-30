const { watch } = require('fs')
const path = require('path')

module.exports = {
 entry: './App/scripts/App.js', 
 output: {
    filename: 'bundled.js' , 
    path: path.resolve(__dirname, 'app')
 },
  mode: 'development',
  watch: true
}