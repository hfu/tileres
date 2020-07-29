const { transform } = require('@moneyforward/stream-util')
const dissolve = require('@turf/dissolve')
const buffer = require('@turf/buffer')
const { featureCollection, multiPolygon } = require('@turf/helpers')
;

(async () => {
  let fs = []
  for await (const line of process.stdin.pipe(new transform.Lines())) {
    const f = buffer(JSON.parse(line), 0.02)
    if (f.geometry.type === 'MultiPolygon') {
      for (const coordinates of f.geometry.coordinates) {
        fs.push({
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: coordinates
          },
          properties: f.properties
        })
      }
    } else {
      fs.push(f)
    }
  }
  try {
    let fc = dissolve(
      featureCollection(fs),
      { propertyName: '耕地の種類' }
    )
    fc = buffer(fc, -0.02) 
console.error(`${fs.length} -> ${fc.features.length}\t${process.argv.slice(2, 5).join('/')}`)
    for (const f of fc.features) {
      console.log(JSON.stringify(f))
    }
  } catch (e) {
    console.error(e)
  }
})()
