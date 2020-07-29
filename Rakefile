task :attempt1 do
  sh "ogr2ogr -oo ENCODING=CP932 -f GeoJSONSeq /vsistdout/ ../ag/src/47211沖縄市2016/47211沖縄市2016_5.shp | MINZOOM=13 MAXZOOM=13 tippecanoe -f -o tiles.mbtiles --prefilter='FILTER_Z=$1 FILTER_X=$2 FILTER_Y=$3 FILTER_T=pre ruby ./filter.rb' --postfilter='FILTER_Z=$1 FILTER_X=$2 FILTER_Y=$3 FILTER_T=post ruby filter.rb'"
end

task :default do
  sh "ogr2ogr -oo ENCODING=CP932 -f GeoJSONSeq /vsistdout/ ../ag/src/35203山口市2019/35203山口市2019_5.shp | tippecanoe --quiet -f -o tiles.mbtiles --postfilter='node filter.js $1 $2 $3'"
end

