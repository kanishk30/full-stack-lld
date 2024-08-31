Call Stack                     Web APIs/NodeApis                 Callback Queue             Console
---------                      ---------                 --------------             -------
 |                              |                        |                           |
 | console.log("Start")         |                        |                        "Start"
 | -------------------------> Output                     |                           |
 |                              |                        |                           |
 | setTimeout(callback, 2000)  |                        |                           |
 |                              |---------------------->|                           |
 |                              |     (waits 2s)         |                           |
 | console.log("End")           |                        |                           |
 | -------------------------> Output                     |                        "End"
 |                              |                        |                           |
 |                              |                        | <-callback-               |
 |                              |                        |                           |
 | (empty, event loop checks)   |                        |                           |
 | <-------------------------- |                        |                            |
|       callback                       |                        |                     "Hello"      |