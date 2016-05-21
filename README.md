# srcds-perfmon
A little utility to track the performance of SRCDS servers and display
the results

Written for and tested with CS:GO, but other SRCDS servers might work?
TODO: test that :)

# Roadmap

* Automatically poll a list of servers for the performance stats (using `stats` rcon command)
* Provide a simple web interface to graph recent performance statistics
* Save state somewhere (postgres? redis? logstash? idk)
* ??? Your feature suggestion here

# Requirements

A recent version of node. Written and tested with node v5.7.1 

# Usage

```
npm install 
node index.js
```

# Demo

No demo, but here's an image of it in action, monitoring 4 servers:

![image](https://raw.githubusercontent.com/opensourcelan/srcds-perfmon/master/images/srcds-perfmon.png)

