const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
     res.write(`
<h2>Cities I Would Like to Visit</h2>
<p>
    The following cities are four destinations I would like to visit
    in the future.
</p>

<table border="1">
    <tr>
        <th>City</th>
        <th>Reason to Visit</th>
        <th>Distance from Chefchaouen</th>
        <th>Estimated Travel Cost</th>
    </tr>
    <tr>
        <td>Tokyo, Japan</td>
        <td>To experience Japanese culture, food, and technology.</td>
        <td>About 11,000 km</td>
        <td>About $1,200</td>
    </tr>
    <tr>
        <td>Paris, France</td>
        <td>To see the architecture, museums, and famous landmarks.</td>
        <td>About 1,600 km</td>
        <td>About $300</td>
  </tr>
  <tr>
        <td>Rome, Italy</td>
        <td>To explore its history, architecture, and Italian food.</td>
        <td>About 1,900 km</td>
        <td>About $350</td>
    </tr>
    <tr>
        <td>Dubai, UAE</td>
        <td>To experience the modern architecture and attractions.</td>
        <td>About 5,800 km</td>
        <td>About $600</td>
    </tr>
</table>
`)
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})