webpack_watch="webpack --watch"
nodemon_compiled="nodemon --watch compiled compiled/index.js"
trap 'kill %1' SIGINT
eval $webpack_watch & eval $nodemon_compiled
