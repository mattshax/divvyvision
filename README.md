# Divvy.Vision

**[Divvy.Vision](http://divvy.vision) is an open-source visualization platform of Chicago's Divvy bike share program, and an entry for the Divvy Data Challenge 2015.**

It aims to better understand rider mobility by visualizing trips between stations with hourly height curves representing trip length, and daily flow from a selected neighborhood with a map-coupled chord diagram.

Here's a [demo of Divvy.Vision](http://vimeo.com/mattshax/divvyvision). Feel free to try out the visualization yourself at http://divvy.vision, or recreate the visualization using the instructions below.

![http://divvy.vision](http://dev.divvy.vision/img/OVERVIEW_sm.png)


* * *
### Features

Major features of the visualization platform are outlined and below:

1. Find 2014 daily & hourly origin-destination trip data with the sliders. Taller curves = longer trips.	
2. View daily frequency of trips between two neighborhoods with the chord diagram to the right.	
3. Highlight neighborhoods to see flow from a selected neighborhood. Brightness = more trips.

This visualization uses a dockerized Cassandra database for storage and querying,Cesium for 3D GIS mapping, CartoDB Positron for basemap tiling, d3 for chord diagrams, jsTween for sliders, Nodejs for serving of content, and Turf for server-side GIS operations.

 
* * *
### Run Divvy.Vision

Clone the Divvy.Vision repository to a local directory:
```
git clone git@github.com:mattshax/divvyvision.git
```

Install nodejs packages via npm:
```
cd divvyvision
npm install
```

Divvy.Vision uses a Cassandra database for storage of 2014 Divvy trips. Install docker with the command below if on Ubuntu or see the instructions [here](https://docs.docker.com/installation/).
```
curl -sSL https://get.docker.com/ubuntu/ | sudo sh
```

Pull and run the mattshax/divvyvision_db docker container with the command below:
```
docker run --entrypoint /sbin/my_init -d --name divvyvision_db mattshax/divvyvision_db
```
After a few minutes (ie download container and start Cassandra ~1-2 min), the database should be available. 

Get the IP address of the database container, and set as the "databaseIP" environment variable:
```
export databaseIP=$(docker inspect -f '{{ .NetworkSettings.IPAddress }}' divvyvision_db)
```

Start the nodejs service directly:
```
node server --public
```

If developing, run the Grunt task manager to watch for file changes and auto-reload on update:
```
grunt
```
Then open [http://localhost:3006/](http://localhost:3006/) and you should see Divvy.Vision come to life.


* * *
### Libraries and Technologies

* [Cesium](http://cesiumjs.org) – 3D mapping platform
* [Cassandra](http://cassandra.apache.org/) – Database of Divvy Trips
* [Docker](https://www.docker.com/) – Containerizer of Cassandra database
* [Node.js](https://nodejs.org/) – Server-side runtime environment
* [D3.js](http://d3js.org) – Interactive chord flow diagrams
* [Grunt](http://gruntjs.com) – Task manager / build system
* [Turf](http://turfjs.org/) – Server-side geospatial analysis
* [CartoDB Positron](http://cartodb.com/basemaps/) – Night cesium basemap
* [jsTween](http://www.jstween.org/) – Slider tweening


* * *
### Copyright & License

The MIT License (MIT)

Copyright (c) 2015 - Matthew Shaxted

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.