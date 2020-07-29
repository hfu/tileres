#!/usr/bin/ruby
require 'json'

count = 0
t = ENV['FILTER_T']
z = ENV['FILTER_Z']
x = ENV['FILTER_X']
y = ENV['FILTER_Y']
while gets
  f = JSON.parse($_.strip)
  count += 1
  f["DEBUG"] = {
    :t => t,
    :z => z,
    :x => x,
    :y => y,
    :count => count
  }
  next unless count == 1
  print JSON.dump(f), "\n"
  #$stderr.print JSON.dump(f), "\n"
end
$stderr.print "#{[t, z, x, y].inspect} #{count}\n"
