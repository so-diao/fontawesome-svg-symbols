const fs = require('fs')
const rawData = require('./fontawesome-free-5.11.2-web/metadata/icons.json')

function toSymbol(id, data) {
    let html = ''
    html += `<symbol id="${id}" viewBox="${data.viewBox.join(' ')}">`
    html += `<path d="${data.path}"></path>`
    html += '</symbol>'
    return html
}

function toKey(type, name) {
    switch ( type ) {
        case 'brands':
            return 'fab-' + name
        case 'solid':
            return 'fas' + name
        case 'regular':
            return 'far' + name
    }
}

function toSvg() {
    let html = ''
    html += '<svg>'
    for ( const name in rawData ) {
        for ( const type in rawData[name].svg ) {
            const key = toKey(type, name)
            const data = rawData[name].svg[type]
            html += toSymbol(key, data)
        }
    }
    html += '</svg>'
    return html
}

function toContent() {
    const svg = toSvg()
    let content = fs.readFileSync('template.min', 'utf-8')
    content = content.replace(/{{content}}/, svg)
    return content
}


fs.writeFileSync('fontawesome-svg-symbols.js', toContent())

